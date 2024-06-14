import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nombre: "", 
    rut: "",
    patente: "",
    marca: "",
    modelo: "",
    precio: ""
};

export const vehiculoSlicer = createSlice({
    nombre: "vehiculo",
    initialState,
    reducers: {
        addVehiculo:(state, action) => {
            const {nombre, rut, patente, marca, modelo, precio} = action.payload;
            state.nombre = nombre;
            state.rut = rut;
            state.patente = patente;
            state.marca = marca;
            state.modelo = modelo;
            state.precio = precio;
        }
    }
});

export const { addVehiculo } = vehiculoSlicer.actions;
export default vehiculoSlicer.reducer;