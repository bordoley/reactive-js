import { RoutableComponentProps, Router } from "@reactive-js/react-router";
import { create as locationResourceCreate } from "@reactive-js/react-router-dom-location-resource";
import { scheduler } from "@reactive-js/react-scheduler";
import { registerDefaultScheduler } from "@reactive-js/scheduler";
import { ComponentType, default as React, useEffect } from "react";
import { render } from "react-dom";

registerDefaultScheduler(scheduler);

const NotFound = ({ uriUpdater }: RoutableComponentProps) => {
  const goToRoute1 = () =>
    uriUpdater(state => ({
      ...state,
      path: "/route1",
    }));

  const goToRoute2 = () =>
    uriUpdater(state => ({
      ...state,
      path: "/route2",
    }));

  return (
    <div>
      {"Not Found"}
      <button onClick={goToRoute1}>Go to route1</button>
      <button onClick={goToRoute2}>Go to route2</button>
    </div>
  );
};

const Component1 = (props: RoutableComponentProps) => (
  <div>{props.uri.path}</div>
);

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
