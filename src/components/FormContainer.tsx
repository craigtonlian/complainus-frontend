import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface IFormContainer {
  children: React.ReactNode;
}

const FormContainer = ({ children }: IFormContainer) => {
  return (
    <Container className="py-3">
      <Row className="justify-content-md-center">
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
