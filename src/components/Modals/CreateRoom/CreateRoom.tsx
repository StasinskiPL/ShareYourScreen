import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useUiContext } from "../../../context/UIContext/UiContextManager";

const CreateRoom = () => {
  const { isOpenCreateRoomModal, setOpenCreateRoomModal } = useUiContext();

  const handleClose = () => setOpenCreateRoomModal(false);

  return (
    //   remember to add animation before production
    <Modal
      animation={false}
      show={isOpenCreateRoomModal}
      className="modal"
      size="lg"
      onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Room</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-5">
        Woohoo, you're reading this text in a modal!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRoom;
