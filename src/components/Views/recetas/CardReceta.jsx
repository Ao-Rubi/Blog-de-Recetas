import React from 'react';
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./truncate.css"

const CardReceta = ({receta}) => {
    const {imagen, titulo, descripcion, _id} = {...receta}

    return (
        <Col xs={12} md={4} lg={3} className="mb-3">
            <Card>
                <Card.Img variant="top" src={imagen} />

                <Card.Body>

                    <Card.Title>{titulo}</Card.Title>

                    <Card.Text className='truncate'>
                        {descripcion}
                    </Card.Text>

                    <div className='d-flex align-items-center'>
                        <Link to={`/detalles/${_id}`} className="btn btn-danger">Ver Receta</Link>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardReceta;