import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const NavButtons: React.FC = () => {
  const joinToRoomHandler = () => {};

  const createRoomHandler = () => {};

  return (
    <Row className="mt-5">
      <Col className="d-flex jc-center ">
        <Button
          onClick={joinToRoomHandler}
          variant="outline-light"
          className="mx-2"
          size="lg">
          Join to the room
        </Button>
        <Button
          onClick={createRoomHandler}
          variant="outline-light"
          className="mx-2"
          size="lg">
          Create new Room
        </Button>
      </Col>
    </Row>
  );
};

export default NavButtons;
