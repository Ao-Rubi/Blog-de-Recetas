import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardReceta from './recetas/CardReceta';

const Home = () => {
    const URL = process.env.REACT_APP_API_SERVER;

    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        consultarAPI()
    },[])

    const consultarAPI =async () => {
        //peticion get
        try {
            const resultado = await fetch(URL);
            const listaRecetas = await resultado.json();
            
            setRecetas(listaRecetas);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mt-2'>
            <Container>
                <Row>
                    {
                        recetas.map((receta) =>{return <CardReceta key={receta._id} receta={receta}></CardReceta>})
                    }
                </Row>
            </Container>
            
        </div>
    );
};

export default Home;