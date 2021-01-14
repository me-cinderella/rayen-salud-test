import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Container } from "react-bootstrap";

function Home(props) {

    const tutorialsList = props.tutorials.map( item  => {
        return (
            <Col xs={8} key={item.id} className="border-bottom p-2">
                <a href={`/tutorial/${item.id}`} onClick={null}>
                    <Row className="tutorial-card align-items-center">
                        <Col md={6} xs={12}>
                            <h5>{item.nombre}</h5>
                            <h6>{item.profesor}</h6>
                        </Col>
                        <Col md={6} xs={12}>
                            <p className="align-top">{item.fecha}</p>
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
            { tutorialsList }
        </Row>
        </Container>
    );
}


function mapStateToProps(state, props) {
    return {
        tutorials: state.fetch.tutorials
    };
}

export default connect(mapStateToProps, null)(Home);