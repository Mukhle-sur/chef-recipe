import React from "react";
import { Container, Row, Col, Image, Alert } from "react-bootstrap";
import errorImg from "../../assets/404-page.jpg";

const Error = () => {
  return (
    <Container>
      <Row className="flex-column">
        <Col xs={12} md={6} className="text-center mx-auto">
          <Image src={errorImg} fluid />
        </Col>
        <Col xs={12} md={6} className="mx-auto text-center">
          <Alert variant="danger">
            <h1>404</h1>
            <p>The page you're looking for doesn't exist.</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
