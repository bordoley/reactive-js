import { connect, lift } from "@reactive-js/rx-observable";
import { generate } from "@reactive-js/rx-observables";
import { onNext } from "@reactive-js/rx-operators";
import { registerDefaultScheduler } from "@reactive-js/scheduler";
import React from "react";
import ReactDOM from "react-dom";
import { scheduler } from "@reactive-js/react-scheduler";
import { create as routerCreate } from "@reactive-js/react-router-dom";
import { RoutableComponentProps } from "@reactive-js/react-router";

registerDefaultScheduler(scheduler);

import { useEffect } from "react";

const Router = routerCreate();
const NotFound = ({uriUpdater}: RoutableComponentProps) => {
  useEffect(
    () => {
      uriUpdater(state => ({
        ...state,
        path: "/route1",
      }));
    },
    [uriUpdater],
  );
  return <div>{"Not Found"}</div>;
};

const Component1 = (props: RoutableComponentProps) => <div>{"Component1"}</div>;

const element = (
  <Router notFoundComponent={NotFound} routes={[[
    "/route1", Component1]]} />
);

ReactDOM.render(element, document.getElementById("root") as HTMLElement);


connect(
  lift(
    generate(x => x + 1, 0, 3000),
    onNext(console.log),
  ),
);

