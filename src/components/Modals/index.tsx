import CreateRoomModal from "./CreateRoom/CreateRoom";
import JoinRoom from "./JoinRoom/JoinRoom";
import SetNick from "./SetNick/SetNick";

const ModalsWrapper: React.FC = () => {
  return (
    <>
      <CreateRoomModal />
      <JoinRoom />
      <SetNick />
    </>
  );
};

export default ModalsWrapper;
