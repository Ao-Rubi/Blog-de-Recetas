import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditarReceta = () => {
    // traigo el parametro
    const {id} = useParams();

    const [receta, setReceta] = useState([]);
    const URL = process.env.REACT_APP_API_SERVER;

    //Referencias
    const tituloRef = useRef("");
    const descripcionRef = useRef("");
    const imagenRef = useRef("");
    const categoriaRef = useRef("");

    //navegacion
    const navegacion = useNavigate();

    useEffect(()=>{
        consultarAPI();
    },[])

    const consultarAPI = async ()=> {
        try {
            const respuesta = await fetch(URL + "/" + id);
            const dato = await respuesta.json();
            setReceta(dato);
        } catch (error) {
            console.log(error)
            //Mostrar mensaje al usuario
        }
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()

        //Validaciones
        //crear un objeto con los datos modificados
        const recetaEditada = {
            titulo: tituloRef.current.value,
            descripcion: descripcionRef.current.value,
            imagen: imagenRef.current.value,
            categoria: categoriaRef.current.value
        }

        // pedir a la API la actualizacion
        try {
            const respuesta = await fetch(`${URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(recetaEditada)
            });

            if (respuesta.status === 200) {
                Swal.fire(
                    'Receta Modificada!',
                    'La receta fue modificada correctamente',
                    'success'
                );
                // Redirecciono a la tabla de productos
                navegacion("/administrar");
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <section className='container'>
            <h1 className='display-4 mt-5'>Editar receta de: (titulo)</h1>
            <hr />

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="titulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control defaultValue={receta.titulo} ref={tituloRef} type="text" placeholder="Ej: Yogurt griego" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="descripcion">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control defaultValue={receta.descripcion} ref={descripcionRef} type="text" as="textarea" placeholder="Pasos a seguir de la receta"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="imagen">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control defaultValue={receta.imagen} ref={imagenRef} type="text" placeholder="URL de la imagen" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="categoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control defaultValue={receta.categoria} ref={categoriaRef} type="text" placeholder="Dulce, salado, etc" />
                </Form.Group>

                <Button className='ms-auto' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </section>
    );
};

export default EditarReceta;