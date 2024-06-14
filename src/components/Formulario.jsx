import { useState } from 'react';
import '../form.css';
import imgNote from '../img/lapt.png';

function Formulario() {
    // const marcas = ['Hyundai', 'Chevrolet', 'Honda', 'Audi'], ItemSeleccionado = function(X) {
    //     return <option>{X}</option>;
    // };

    const vehiculos = [
        {
            "marca": "Hyundai",
            "modelo": ["Venue", "Creta"]
        },
        {
            "marca": "Chevrolet",
            "modelo": ["Corsa", "Spark"]
        },
        {
            "marca": "Audi",
            "modelo": ["R8", "A4"]
        }
    ]

    const [idMarca, setIdMarca] = useState(-1);

    const CargarModelo = function (e) {
        const opcion = e.target.value;
        setIdMarca(opcion)
    }

    return (
        <>
            {/* <ResponsiveAppBar/> */}
            <div className='container0'>
                <p className='titleF'>Formulario de prueba</p>
                <img className='imgForm' src={imgNote} />
                <hr />
            </div>
            <div className='container'>
                <h1><b>Nuevo formulario</b></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text since ever.</p>
                <br />
                <form>
                    <div><b><h2>Datos del vendedor:</h2></b></div>
                    <div className="form-group">
                        <label>Nombre completo *</label>
                        <input type='text' id="nombre" name="nombre" required />
                        <label>Rut vendedor *</label>
                        <input type='text' id="rut" name="rut" required />
                    </div>
                    <hr />

                    <div><b><h2>Datos del vehículo:</h2></b></div>
                    <div className="form-group">
                        <label htmlFor="patente">Patente del vehículo *</label>
                        <input type="text" id="patente" name="patente" required />

                        <label>Marca del vehículo *</label>
                        <select id="marca" name="marca" onClick={CargarModelo} required>
                            <option value={-1}>Seleccione marca</option>
                            {vehiculos.map((item, i) => (
                                <option key={"marca" + i} value={i}> {item.marca} </option>
                            ))}
                        </select>

                        {/* <label>Marca del vehículo *</label>
                        <select id="marca" name="marca" required>
                        {marcas.map(ItemSeleccionado)}
                        </select> */}

                        <label>Modelo del vehículo *</label>
                        <select id="modelo" name="modelo" required>
                            {
                                idMarca > -1 &&
                                (
                                    vehiculos[idMarca].modelo.map((item, i) => (
                                        <option key={"modelo" + i} value=""> {item} </option>
                                    ))
                                )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Precio del vehículo *</label>
                        <input type="text" id="precio" name="precio" required />
                    </div>
                    <hr />
                    <button type="submit" className="submit-btn">Enviar</button>
                </form >
            </div>
        </>
    )
}

export default Formulario
