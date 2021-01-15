import React, { useState, useEffect } from 'react';
import { dateFormatterMonthName } from 'utils/Formatters';
import { Row, Col, Container } from "react-bootstrap";

function TutorialsList() {

    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://rayentutorialtestapp.azurewebsites.net/tutorials')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch(() =>  setError('fetch failed'));
    }, []) 

    const tutorialsList = data.map( item  => {
        return (
            <Col xs={8} key={item.id} className="border-bottom p-2">
                <a href={`/tutorial/${item.id}`}>
                    <Row className="tutorial-card align-items-center">
                        <Col md={6} xs={12}>
                            <h5>{item.nombre}</h5>
                            <h6>{item.profesor}</h6>
                        </Col>
                        <Col md={6} xs={12}>
                            <p className="align-top">{dateFormatterMonthName(item.fecha)}</p>
                        </Col>
                    </Row>
                </a>
            </Col>
        )
    });
    
    return (
        <Container>
        <Row className="text-center mt-5 mb-5">
            <h1>Tutoriales</h1>
        </Row>
        <Row className="align-center">
            { tutorialsList ? tutorialsList : <p>{error}</p> }
        </Row>
        </Container>
    );
}

export default TutorialsList;