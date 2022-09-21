import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditarReceta = () => {
    
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [imagen, setImagen] = useState("")
    const [categoria, setCategoria] = useState("")

    return (
        <section className='container'>
            <h1 className='display-4 mt-5'>Editar receta de: (titulo)</h1>
            <hr />

            <Form >
                <Form.Group className="mb-3" controlId="titulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control onChange={(e)=>{setTitulo(e.target.value)}} type="text" placeholder="Ej: Yogurt griego" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="descripcion">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control onChange={(e)=>{setDescripcion(e.target.value)}} type="number" as="textarea" placeholder="Pasos a seguir de la receta"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="imagen">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control onChange={(e)=>{setImagen(e.target.value)}} type="text" placeholder="URL de la imagen" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="categoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control onChange={(e)=>{setCategoria(e.target.value)}} type="number" placeholder="Dulce, salado, etc" />
                </Form.Group>

                <Button className='ms-auto' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </section>
    );
};

export default EditarReceta;