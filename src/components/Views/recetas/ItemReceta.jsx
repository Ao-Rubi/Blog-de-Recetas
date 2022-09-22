import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemReceta = ({receta, consultarAPI}) => {
    const {_id, titulo, categoria, descripcion, imagen} = {...receta}
    const URL = process.env.REACT_APP_API_SERVER;

    const handleDelete = ()=>{
        Swal.fire({
            title: 'Seguro de borrar?',
            text: "No hay vuelta atras",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!',
            cancelButtonText: "Cancelar",
        }).then(async (result)=>{
            if (result.isConfirmed) {
                //realizo peticion para borrar
                try {
                    const parametro = {
                        method: "DELETE"
                    }
                    const respuesta = await fetch(URL + "/" + _id, parametro)
                    console.log(respuesta)

                    if (respuesta.status === 200) {

                        Swal.fire(
                            'Receta eliminado!',
                            'La receta fue eliminada correctamente.',
                            'success'
                        )
                        // Recargar la tabla de productos
                        consultarAPI();
                    }

                } catch (error) {
                    console.log(error)
                }
            }
        })
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{titulo}</td>
            <td>{categoria}</td>
            <td className='truncate'>{descripcion}</td>
            <td className='truncate'>{imagen}</td>
            <td className='d-block'> 
                <Link className='btn btn-warning' to={`/administrar/editar/${_id}`}>Editar</Link>
                <Button className='btn btn-danger' onClick={handleDelete}>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemReceta;