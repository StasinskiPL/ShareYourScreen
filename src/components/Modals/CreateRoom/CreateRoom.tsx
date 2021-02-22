import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useRoomContext } from "../../../context/RoomContext/RoomContextManager";
import { useUiContext } from "../../../context/UIContext/UiContextManager";
import { useUserContext } from "../../../context/UserContext/UserContextManager";
import { createRoomId } from "../../../helpers/createRoomId";

const CreateRoom = () => {
  const { isOpenCreateRoomModal, setOpenCreateRoomModal } = useUiContext();
  const { socket } = useRoomContext();
  const { userId, userNick } = useUserContext();
  const history = useHistory();

  const handleClose = () => setOpenCreateRoomModal(false);

  const createRoomHandler = () => {
    setOpenCreateRoomModal(false);

    const id = createRoomId();

    socket?.emit("createroom", { roomid: id, user: { userId, userNick } });

    history.push(`/room/${id}`);
  };

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
      <Modal.Body className="py-5">{/* text and configuration */}</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={createRoomHandler}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRoom;
