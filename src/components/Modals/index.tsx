import CreateRoomModal from "./CreateRoom/CreateRoom";
import JoinRoom from "./JoinRoom/JoinRoom";

const ModalsWrapper: React.FC = () => {
  return (
    <>
      <CreateRoomModal />
      <JoinRoom />
    </>
  );
};

export default ModalsWrapper;
