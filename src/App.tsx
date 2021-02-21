import { memo } from "react";

import Modals from "./components/Modals";
import RouteWrapper from "./components/Router/RouteWrapper";

function App() {
  return (
    <main className="bg-dark">
      <Modals />
      <RouteWrapper />
    </main>
  );
}

export default memo(App);
