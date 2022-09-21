import React from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./truncate.css"

const AdministrarRecetas = () => {
    return (
        <section className='container'>
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <h1 className='display-5'> Recetas a Disposicion</h1>
                <Link to="/administrar/crear" className="btn btn-primary" >Agregar</Link>
            </div>
            <hr />

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Titulo</th>
                        <th>Categoria</th>
                        <th>Descripcion</th>
                        <th>Imagen</th>
                        <th>Opciones</th>
                    </tr>
                </thead>

                <tbody>
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
                </tbody>
            </Table>

        </section>
    );
};

export default AdministrarRecetas;