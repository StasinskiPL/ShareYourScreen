import { Button, Col, Row } from "react-bootstrap";
import { useUiContext } from "../../context/UIContext/UiContextManager";

const NavButtons: React.FC = () => {
  const { setOpenJoinToRoomModal, setOpenCreateRoomModal } = useUiContext();

  return (
    <Row className="mt-5">
      <Col className="d-flex jc-center">
        <Button
          onClick={() => setOpenJoinToRoomModal(true)}
          variant="outline-light"
          className="mx-2"
          size="lg">
          Join to the room
        </Button>
        <Button
          onClick={() => setOpenCreateRoomModal(true)}
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
