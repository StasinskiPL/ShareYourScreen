import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Loading from "../Ui/Loading";

const Room = lazy(() => import("../Room/Room"));

const RouteWrapper: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/:id" render={() => <Room />} />
      </Switch>
    </Suspense>
  );
};

export default RouteWrapper;
