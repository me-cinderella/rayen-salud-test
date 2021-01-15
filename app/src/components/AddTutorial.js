import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { dateFormatter } from 'utils/Formatters';
import { Col, Row, Container, Form, Button } from "react-bootstrap";

function AddTutorial(props) {

    const [submitStatus, setSubmitStatus] = useState(null);
    const [data, setData] = useState({fecha: dateFormatter('current')});

    const handleInputChange = () => event => {
        data[event.target.id] = event.target.value;
        setData(data);
    }

    const handleSubmit = () => {
        fetch('https://rayentutorialtestapp.azurewebsites.net/createtutorial', {
            method: 'POST',
            body: JSON.stringify(data)
          })
          .then((response) => {
            setData({fecha: dateFormatter('current')});
            setSubmitStatus('formulario enviado');
          })
          .catch(() => setSubmitStatus('ha ocurrido un error'));
    }

    return (
        <Container>
            <Row className="m-5">
                <Col xs={8}>
                    <h1>Agregar tutorial</h1>
                    <Form>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                value={data.nombre}
                                onChange={handleInputChange()}
                            />
                        </Form.Group>

                        <Form.Group controlId="materia">
                            <Form.Label>Materia</Form.Label>
                            <Form.Control 
                                value={data.materia}
                                onChange={handleInputChange()}
                            />
                        </Form.Group>

                        <Form.Group controlId="profesor">
                            <Form.Label>Profesor</Form.Label>
                            <Form.Control 
                                value={data.profesor}
                                onChange={handleInputChange()}
                            />
                        </Form.Group>

                        <Form.Group controlId="fecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control 
                                readOnly
                                value={data.fecha}
                            />
                        </Form.Group>

                        <Button className="mt-2 mr-2" variant="primary" onClick={() => handleSubmit()}>
                            Agregar
                        </Button>
                        <Link to='/'>
                            <Button className="mt-2" variant="danger">Cancelar</Button>
                        </Link>

                        {submitStatus &&
                            <p className="mt-2">{submitStatus}</p>
                        }
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddTutorial;