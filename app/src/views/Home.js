import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import TutorialsList from 'components/TutorialsList';
import AddButton from 'components/AddButton';

function Home() {
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={8}>
                    <TutorialsList />
                </Col>
            </Row>
            <Row className="justify-content-md-center m-5">
                <Col offset={8} xs={2}>
                    <AddButton />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;