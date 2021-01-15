import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { dateFormatter } from 'utils/Formatters';
import { Button, Form, Row, Col, Container } from "react-bootstrap";

function TutorialDetail(props) {

    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [updatedData, setUpdatedData] = useState({});
    const [disabled, disableFields] = useState(true);
    const [submitStatus, setSubmitStatus] = useState(null);
    
    useEffect(() => {
        const id = props.match.params.id;
        fetch(`https://rayentutorialtestapp.azurewebsites.net/tutorials/${id}`)
        .then((response) => response.json())
        .then((data) => {
          let tutorial = data;
          tutorial.fecha = dateFormatter(data.fecha)
          setData(tutorial);
          setUpdatedData(tutorial);
        })
        .catch((e) => {
          setError('fetch failed');
        });
    }, []) 

    const handleInputChange = () => event => {
        let fieldName = event.target.id;
        let fleldVal = event.target.value;
        setUpdatedData({...updatedData, [fieldName]: fleldVal});
    }

    function handleSubmit() {
        const id = props.match.params.id;
        fetch(`https://rayentutorialtestapp.azurewebsites.net/updatetutorial/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedData)
          })
          .then((response) => {
            disableFields(true);
            setData(updatedData);
            setSubmitStatus('tutorial actualizado!');
          })
          .catch(() => setSubmitStatus('ha ocurrido un error'));
    }

    function handleCancel() {
        disableFields(true);
        setUpdatedData(data);
    }

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
                <Col xs={8} key={data.id}>
                    <Row className="mb-2 align-items-right">
                        <Col>
                            <Button variant="primary" className="mt-2 mr-2" onClick={() => disableFields(false)}>
                                Editar
                            </Button>
                            <Link to="/">
                                <Button variant="primary" className="mt-2">
                                    volver al home
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="tutorial-card align-items-center">
                        <Col md={6} xs={12}>
                            <Form>
                                <Form.Group controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control 
                                        readOnly={disabled}
                                        value={updatedData.nombre}
                                        onChange={handleInputChange()} 
                                    />
                                </Form.Group>

                                <Form.Group controlId="materia">
                                    <Form.Label>Materia</Form.Label>
                                    <Form.Control 
                                        readOnly={disabled}
                                        value={updatedData.materia}
                                        onChange={handleInputChange()}
                                    />
                                </Form.Group>

                                <Form.Group controlId="profesor">
                                    <Form.Label>Profesor</Form.Label>
                                    <Form.Control 
                                        readOnly={disabled}
                                        value={updatedData.profesor}
                                        onChange={handleInputChange()}
                                    />
                                </Form.Group>

                                <Form.Group controlId="fecha">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control 
                                        readOnly
                                        value={updatedData.fecha}
                                    />
                                </Form.Group>

                                <Button className="mt-2 mr-2" variant="primary" onClick={() => handleSubmit()}>
                                    Guardar Cambios
                                </Button>
                                <Button className="mt-2" variant="danger" onClick={() => handleCancel()}>
                                    Cancelar
                                </Button>

                                {submitStatus &&
                                    <p className="mt-2">{submitStatus}</p>
                                }
                            </Form>
                        </Col>
                    </Row>
                </Col>
            }
            </Row>
        </Container>
    );
}

export default TutorialDetail;