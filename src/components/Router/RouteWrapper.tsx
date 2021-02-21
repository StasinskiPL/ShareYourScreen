import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Room from "../Room/Room";
import Loading from "../Ui/Loading";

const RouteWrapper: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/:id" component={Room} />
      </Switch>
    </Suspense>
  );
};

export default RouteWrapper;
