import { memo } from "react";

import Modals from "./components/Modals";
import RouteWrapper from "./components/Router/RouteWrapper";
import { createRoomId } from "./helpers/createRoomId";

function App() {
  const id = createRoomId();
  console.log(id);

  return (
    <main className="bg-dark">
      <Modals />
      <RouteWrapper />
    </main>
  );
}

export default memo(App);
