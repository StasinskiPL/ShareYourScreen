import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";

import { useUiContext } from "../../../context/UIContext/UiContextManager";
import { useUserContext } from "../../../context/UserContext/UserContextManager";
import { setUserNick as setUserNickLocally } from "../../../helpers/userNick";

const SetNick: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [isError, setIsError] = useState(false);

  const { isOpenSetNickModal, setOpenSetNickModal } = useUiContext();
  const { setUserNick } = useUserContext();

  const createNickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);

    if (userInput && userInput.trim() !== "" && userInput.length > 3) {
      setUserNick(userInput);
      setUserNickLocally(userInput);
      setUserInput("");
      setOpenSetNickModal(false);
    } else {
      setIsError(true);
    }
  };

  return (
    //   remember to add animation before production
    <Modal
      animation={false}
      show={isOpenSetNickModal}
      className="modal"
      backdrop="static">
      <Modal.Header>
        <Modal.Title>Set Nick</Modal.Title>
      </Modal.Header>
      <Form onSubmit={createNickHandler}>
        <Modal.Body className="py-5">
          {isError && <Alert variant="danger">Your Nick is too short</Alert>}
          <Form.Group>
            <Form.Label className="h5">Nick:</Form.Label>
            <Form.Control
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default SetNick;
