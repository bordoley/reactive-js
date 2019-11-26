import { RoutableComponentProps, Router } from "@reactive-js/react-router";
import { create as locationResourceCreate } from "@reactive-js/react-router-dom";
import { scheduler } from "@reactive-js/react-scheduler";
import { registerDefaultScheduler } from "@reactive-js/scheduler";
import { ComponentType, default as React, useEffect } from "react";
import { render } from "react-dom";

registerDefaultScheduler(scheduler);

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

const routes: readonly [string, ComponentType<RoutableComponentProps>][] = [
  ["/route1", Component1],
];

render(
  <Router
    locationResourceFactory={locationResourceCreate}
    notFound={NotFound}
    routes={routes}
  />,
  document.getElementById("root") as HTMLElement,
);
