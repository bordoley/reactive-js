import { RoutableComponentProps } from "@reactive-js/react-router";
import { create as routerCreate } from "@reactive-js/react-router-dom";
import { scheduler } from "@reactive-js/react-scheduler";
import { connect, pipe } from "@reactive-js/rx-observable";
import { generate, onNext } from "@reactive-js/rx-observables";
import { registerDefaultScheduler } from "@reactive-js/scheduler";
import { default as React, useEffect } from "react";
import ReactDOM from "react-dom";

registerDefaultScheduler(scheduler);

const Router = routerCreate();
const NotFound = ({ uriUpdater }: RoutableComponentProps) => {
  useEffect(() => {
    uriUpdater(state => ({
      ...state,
      path: "/route1",
    }));
  }, [uriUpdater]);
  return <div>{"Not Found"}</div>;
};

const Component1 = (props: RoutableComponentProps) => <div>{"Component1"}</div>;

const element = (
  <Router notFoundComponent={NotFound} routes={[["/route1", Component1]]} />
);

ReactDOM.render(element, document.getElementById("root") as HTMLElement);

connect(
  pipe(
    generate(x => x + 1, 0, 3000),
    onNext(console.log),
  ),
);
