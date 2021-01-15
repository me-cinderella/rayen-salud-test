import React, { useState, useEffect } from 'react';
import { dateFormatterMonthName } from 'utils/Formatters';
import { Button, Row, Col, Container } from "react-bootstrap";

function TutorialsList(props) {

    const [data, setData] = useState([]);
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        setData(props.data);
    }, []) 


    const handleDelete = id => event => {
        event.preventDefault();
        fetch(`https://rayentutorialtestapp.azurewebsites.net/deletetutorial/${id}`, {
            method: 'DELETE',
        })
        .then((response) => {
            const newdata = data.filter(item => item.id !== id);
            setData(newdata);
            setSubmitStatus('Eliminado exitosamente');
        })
        .catch(() => setSubmitStatus('ha ocurrido un error'));
    }

    console.log(data);

    const tutorialsList = data.map( item  => {
        return (
            <Col xs={8} key={item.id} className="border-bottom p-2">
                <a href={`/tutorial/${item.id}`}>
                    <Row className="tutorial-card align-items-center">
                        <Col md={5} xs={12}>
                            <h5>{item.nombre}</h5>
                            <h6>{item.profesor}</h6>
                        </Col>
                        <Col md={5} xs={12}>
                            <p className="align-top">{dateFormatterMonthName(item.fecha)}</p>
                        </Col>
                        <Col md={2} xs={12}>
                            <Button 
                                className="btn btn-default" 
                                aria-label="Left Align"
                                onClick={handleDelete(item.id)}
                            >
                                eliminar
                            </Button>
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
            { tutorialsList ? tutorialsList : <p>{props.error}</p> }
        </Row>
        </Container>
    );
}

export default TutorialsList;