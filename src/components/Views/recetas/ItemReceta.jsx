import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemReceta = () => {
    return (
        <tr>
            <td>123</td>
            <td>Magdalenas</td>
            <td>Dulce</td>
            <td className='truncate'>Bolitas con relleno de dulce de leche</td>
            <td className='truncate'>https://images.hola.com/imagenes/cocina/recetas/20220314206228/magdalenas-caseras/1-62-782/magdalenas-age-m.jpg</td>
            <td className='d-block'> 
                <Link className='btn btn-warning' to="/administrar/editar/:id">Editar</Link>
                <Button className='btn btn-danger'>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemReceta;