import { memo, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <main className="bg-dark">
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </main>
  );
}

export default memo(App);
