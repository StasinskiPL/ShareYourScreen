import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useUiContext } from "../../../context/UIContext/UiContextManager";
import { isCorrectRoomId } from "../../../helpers/isCorrectRoomId";
import { useHistory } from "react-router-dom";

const JoinRoom = () => {
  const { isOpenJoinToRoomModal, setOpenJoinToRoomModal } = useUiContext();
  const [roomIdInput, setRoomIdInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleClose = () => setOpenJoinToRoomModal(false);

  const joinRoomHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);
    if (!isCorrectRoomId(roomIdInput)) {
      setErrorMessage(`Your room id don't match te pattern 111-111-111`);
      setIsError(true);
    } else {
      // check if room exist
      setOpenJoinToRoomModal(false);
      history.push(`/room/${roomIdInput}`);
    }
    setRoomIdInput("");
  };

  return (
    //   remember to add animation before production
    <Modal
      animation={false}
      show={isOpenJoinToRoomModal}
      className="modal"
      onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Join to room</Modal.Title>
      </Modal.Header>
      <Form onSubmit={(e) => joinRoomHandler(e)}>
        <Modal.Body className="py-5">
          {isError && <Alert variant="danger">{errorMessage}</Alert>}
          <Form.Group>
            <Form.Label className="h5">Room ID:</Form.Label>
            <Form.Control
              value={roomIdInput}
              onChange={(e) => setRoomIdInput(e.target.value)}
              placeholder="111-111-111"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Join
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default JoinRoom;
