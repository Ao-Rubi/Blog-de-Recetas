import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CrearReceta = () => {

    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [imagen, setImagen] = useState("")
    const [categoria, setCategoria] = useState("")

    //Variable de entorno
    const URL = process.env.REACT_APP_API_SERVER;

    // Inicializar useNavigate
    const navegacion = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault()

        //Validaciones
        //creo el objeto
        const nuevaReceta = {
            titulo: titulo,
            descripcion: descripcion,
            imagen: imagen,
            categoria: categoria
        }

        try {
            // envio peticion del objeto a la API
            const respuesta = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(nuevaReceta)
            })

            if (respuesta.status === 201) {
                
                // Mensaje que todo salio bien
                Swal.fire(
                    'Receta creado!',
                    'La receta fue creada correctamente',
                    'success'
                )

                // Redirecciono a la pagina de administrar
                navegacion("/administrar")
            }

            console.log(respuesta)

        } catch (error) {
            console.log(error)
            //mensaje de error
        }
    }

    return (
        <section className='container'>
            <h1 className='display-4 mt-5'>Nueva receta</h1>
            <hr />

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="titulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control onChange={(e)=>{setTitulo(e.target.value)}} type="text" placeholder="Ej: Yogurt griego" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="descripcion">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control onChange={(e)=>{setDescripcion(e.target.value)}} type="text" as="textarea" placeholder="Pasos a seguir de la receta"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="imagen">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control onChange={(e)=>{setImagen(e.target.value)}} type="text" placeholder="URL de la imagen" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="categoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control onChange={(e)=>{setCategoria(e.target.value)}} type="text" placeholder="Dulce, salado, etc" />
                </Form.Group>

                <Button className='ms-auto mb-1' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </section>
    );
};

export default CrearReceta;