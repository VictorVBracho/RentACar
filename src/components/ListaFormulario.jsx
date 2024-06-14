import { useState } from 'react';
import '../form.css';
import imgNote from '../img/lapt.png';

function ListaForm() {

    const vehi = [
        {
            "Nombre": "Abelia Mancilla",
            "Rut": "1-9",
            "Patente": "GGWP25",
            "Marca": "Hyndai",
            "Modelo": "Venue",
            "Color": "azul",
        },
        {
            "Nombre": "Elucia Cespedes",
            "Rut": "19421853-2",
            "Patente": "EZGG15",
            "Marca": "Chevrolet",
            "Modelo": "Spark",
            "Color": "negro",
        }
    ]

    return (
        <>
            <table className='tableList'>
                <tr>
                    <th>Nombre</th>
                    <th>Rut vendedor</th>
                    <th>Patente vehículo</th>
                    <th>Marca vehículo</th>
                    <th>Modelo vehículo</th>
                    <th>Color vehículo</th>
                    <th>Eliminar</th>
                </tr>
                <br/>
                {
                    vehi.map(vehiList => {
                        return (
                            <>
                                <tr>
                                    <td>{vehiList.Nombre}</td>
                                    <td>{vehiList.Rut}</td>
                                    <td>{vehiList.Patente}</td>
                                    <td>{vehiList.Marca}</td>
                                    <td>{vehiList.Modelo}</td>
                                    <td>{vehiList.Color}</td>
                                    <td>img</td>
                                    <br/>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default ListaForm
