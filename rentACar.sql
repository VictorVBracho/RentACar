CREATE DATABASE RentACar;
USE RentACar;

CREATE TABLE vendedor (
    rut NVARCHAR(20) PRIMARY KEY,
    nombre NVARCHAR(50) NOT NULL,
);

CREATE TABLE modelo (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(50) NOT NULL,
    color NVARCHAR(30) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE marca (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(50) NOT NULL,
    modelo_id INT NOT NULL,
    FOREIGN KEY (modelo_id) REFERENCES modelo(id)
);

CREATE TABLE solicitud (
    id INT IDENTITY(1,1) PRIMARY KEY,
    vendedor_id INT NOT NULL,
    fecha DATE NOT NULL,
    marca_id INT NOT NULL,
    modelo_id INT NOT NULL,
    FOREIGN KEY (vendedor_id) REFERENCES vendedor(id),
    FOREIGN KEY (marca_id) REFERENCES marca(id),
    FOREIGN KEY (modelo_id) REFERENCES modelo(id)
);

---------------------------------------
CREATE OR REPLACE PROCEDURE ObtenerTop3MarcasMasSolicitadas
AS
BEGIN
    SELECT TOP 3
        m.nombre AS Marca,
        COUNT(s.id) AS CantidadSolicitudes
    FROM
        solicitud s
        INNER JOIN marca m ON s.marca_id = m.id
    GROUP BY
        m.nombre
    ORDER BY
        CantidadSolicitudes DESC;
END;

--EXEC ObtenerTop3MarcasMasSolicitadas;

---------------------------------------
CREATE OR REPLACE PROCEDURE ObtenerSolicitudesMesActual
AS
BEGIN
    DECLARE @PrimerDiaMesActual DATE, @UltimoDiaMesActual DATE;

    SET @PrimerDiaMesActual = DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0);
    SET @UltimoDiaMesActual = EOMONTH(GETDATE());

    SELECT
        s.id,
        v.nombre AS NombreVendedor,
        s.fecha,
        m.nombre AS Marca,
        mo.nombre AS Modelo
    FROM
        solicitud s
        INNER JOIN vendedor v ON s.vendedor_id = v.id
        INNER JOIN marca m ON s.marca_id = m.id
        INNER JOIN modelo mo ON s.modelo_id = mo.id
    WHERE
        s.fecha >= @PrimerDiaMesActual AND s.fecha <= @UltimoDiaMesActual
    ORDER BY
        s.fecha ASC;
END;

--EXEC ObtenerSolicitudesMesActual;

---------------------------------------
CREATE OR REPLACE PROCEDURE VendedorMenosSolicitudes30Dias
AS
BEGIN
    DECLARE @FechaActual DATE = GETDATE();
    DECLARE @FechaHace30Dias DATE = DATEADD(DAY, -30, @FechaActual);

    SELECT TOP 1
        v.nombre AS NombreVendedor,
        COUNT(s.id) AS CantidadSolicitudes
    FROM
        vendedor v
        LEFT JOIN solicitud s ON v.id = s.vendedor_id AND s.fecha BETWEEN @FechaHace30Dias AND @FechaActual
    GROUP BY
        v.nombre
    ORDER BY
        CantidadSolicitudes ASC;
END;

--EXEC VendedorMenosSolicitudes30Dias;

---------------------------------------
CREATE OR REPLACE PROCEDURE ObtenerModelosSinSolicitudes
AS
BEGIN
    SELECT
        mo.id,
        mo.nombre,
        mo.color,
        mo.precio
    FROM
        modelo mo
    LEFT JOIN
        solicitud s ON mo.id = s.modelo_id
    WHERE
        s.id IS NULL;
END;

--EXEC ObtenerModelosSinSolicitudes;
---------------------------------------
CREATE OR REPLACE PROCEDURE Top3MesesConMasVentas
AS
BEGIN
    -- Seleccionamos los 3 meses con más dinero en ventas
    SELECT TOP 3
        YEAR(s.fecha) AS Año,
        MONTH(s.fecha) AS Mes,
        SUM(mo.precio) AS TotalVentas
    FROM
        solicitud s
    INNER JOIN
        modelo mo ON s.modelo_id = mo.id
    GROUP BY
        YEAR(s.fecha),
        MONTH(s.fecha)
    ORDER BY
        TotalVentas DESC;
END;

--EXEC ObtenerTop3MesesConMasVentas;