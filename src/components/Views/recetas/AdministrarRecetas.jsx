import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import "./truncate.css"
import ItemReceta from './ItemReceta';

const AdministrarRecetas = () => {

    const URL = process.env.REACT_APP_API_SERVER;
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        consultarAPI()
    },[])

    const consultarAPI = async () =>{
        try {
            //peticion get
            const respuesta = await fetch(URL);
            const listaReecetas = await respuesta.json();

            setRecetas(listaReecetas);
        } catch (error) {
            console.log(error)
        }
    }

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
                    {
                        recetas.map((receta) => <ItemReceta key={receta._id} receta={receta} consultarAPI={consultarAPI}></ItemReceta>)
                    }
                </tbody>
            </Table>

        </section>
    );
};

export default AdministrarRecetas;