import { useRoomContext } from "../../../context/RoomContext/RoomContextManager";
import Controllers from "./Controllers";
import Stream from "./Stream";
import StreamPlaceholder from "./StreamPlaceholder";

const Display: React.FC = () => {
  const { isActiveStream } = useRoomContext();
  return (
    <div className="video-wrapper">
      {isActiveStream ? <Stream /> : <StreamPlaceholder />}
      <Controllers />
    </div>
  );
};

export default Display;
