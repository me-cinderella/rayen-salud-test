import React, { useState, useEffect } from 'react';
import { dateFormatter } from 'utils/Formatters';
import { Row, Col, Container } from "react-bootstrap";

function TutorialDetail(props) {

    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const id = props.match.params.id;
        fetch(`https://rayentutorialtestapp.azurewebsites.net/tutorials/${id}`)
        .then((response) => response.json())
        .then((data) => {
          let tutorial = data;
          tutorial.fecha = dateFormatter(data.fecha)
          setData(tutorial);
        })
        .catch((e) => {
          setError('fetch failed');
        });
    }, []) 

    return (
        <Container>
            <Row className="text-center mt-5 mb-5">
                <h1>Detalle tutorial</h1>
            </Row>
            <Row className="align-center">
            {error? 
                <div>
                    <p>{error}</p>
                </div>
            :
                <Col xs={8} key={data.id} className="border-bottom p-2">
                    <Row className="tutorial-card align-items-center">
                        <Col md={6} xs={12}>
                            <p>Titulo: {data.nombre}</p>
                            <p>Profesor: {data.profesor}</p>
                            <p>Materia: {data.materia}</p>
                            <p>Fecha: {data.fecha}</p>
                        </Col>
                    </Row>
                </Col>
            }
            </Row>
        </Container>
    );
}

export default TutorialDetail;