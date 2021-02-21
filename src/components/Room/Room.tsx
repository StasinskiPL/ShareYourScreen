import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aside from "./Aside/Aside";
import Display from "./Display/Display";

const Room: React.FC = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col xl={9}>
          <Display />
        </Col>
        <Col xl={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default Room;
