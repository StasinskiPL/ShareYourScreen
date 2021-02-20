import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Loading from "../Ui/Loading";

const RouteWrapper: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};

export default RouteWrapper;
