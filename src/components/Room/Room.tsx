import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aside from "./Aside/Aside";
import Display from "./Display/Display";

const Room: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Display />
        </Col>
        <Col lg={4}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default Room;
