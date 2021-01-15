import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TutorialsList from 'components/TutorialsList';

function Home() {

    const [error, setError] = useState('');
    const [search, setSearchValue] = useState('');
    const [data, setData] = useState([]);
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        fetch('https://rayentutorialtestapp.azurewebsites.net/tutorials')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch(() =>  setError('fetch failed'));
    }, []) 

    const handleDelete = () => {
        fetch('https://rayentutorialtestapp.azurewebsites.net/deletetutorials', {
            method: 'DELETE',
        })
        .then((response) => {
            setData({});
            setSubmitStatus('Eliminado exitosamente');
        })
        .catch(() => setSubmitStatus('ha ocurrido un error'));
    }

    const handleSearch = () => event => {
        let searched = event.target.value;
        setSearchValue(searched);
        const newdata = data.filter(item => item.nombre.indexOf(searched) === -1);
        setData(newdata);
    }
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={8}>
                    <Col xs={6}>
                        <Form.Group controlId="search">
                            <Form.Label>Buscar</Form.Label>
                            <Form.Control 
                                value={search}
                                onChange={handleSearch()} 
                            />
                        </Form.Group>
                    </Col>
                    <TutorialsList data={[{"nombre":"Curso 1", "materia": "Materia 1", "profesor": "profesor1", "fecha": new Date()}]} error={error} />
                </Col>
            </Row>
            <Row className="justify-content-md-center m-5">
                <Col offset={6} xs={6}>
                    <Link to='/agregar'>
                        <Button type="button" className="btn btn-default mr-2" aria-label="Left Align">
                            +
                        </Button>
                    </Link>
                    <Button 
                        className="btn btn-default" 
                        aria-label="Left Align"
                        onClick={() => handleDelete()}
                    >
                        Borrar todos
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;