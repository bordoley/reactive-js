import { StateUpdater } from "@reactive-js/ix-async-iterator-resource";
import { useObservable } from "@reactive-js/react";
import {
  createRoutableStateComponent,
  RoutableComponentProps,
  RoutableStateComponentProps,
  Router,
} from "@reactive-js/react-router";
import { normalPriority } from "@reactive-js/react-scheduler";
import { generate } from "@reactive-js/rx-observable";
import { createLocationStore, Location } from "@reactive-js/web";
import { ComponentType, default as React, useCallback, useMemo } from "react";
import { render } from "react-dom";

const makeCallbacks = (
  uriUpdater: (updater: StateUpdater<Location>) => void,
) => {
  const liftUpdater = (updater: StateUpdater<Location>) => () =>
    uriUpdater(updater);
  const goToPath = (path: string) => liftUpdater(state => ({ ...state, path }));

  const goToRoute1 = goToPath("/route1");
  const goToRoute2 = goToPath("/route2");
  const goToRoute3 = goToPath("/route3");

  return { goToRoute1, goToRoute2, goToRoute3 };
};

const NotFound = ({ uriUpdater }: RoutableComponentProps) => {
  const { goToRoute1, goToRoute2, goToRoute3 } = useMemo(
    () => makeCallbacks(uriUpdater),
    [uriUpdater],
  );

  return (
    <div>
      {"Not Found"}
      <button onClick={goToRoute1}>Go to route1</button>
      <button onClick={goToRoute2}>Go to route2</button>
      <button onClick={goToRoute3}>Go to route3</button>
    </div>
  );
};

const Component1 = (props: RoutableComponentProps) => {
  const value = useObservable(() => generate(x => x + 1, 0), []);

  return (
    <>
      <div>{props.uri.path}</div>
      <div>{value}</div>
    </>
  );
};

const StatefulComponent = (props: RoutableStateComponentProps<string>) => {
  const { dispatch, goTo, referer, state, uri } = props;

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = ev.target;
      dispatch(_ => value)
    },
    [dispatch],
  );

  return (
    <div>
      <input type="text" onChange={onChange} value={state}></input>
    </div>
  );
};

const routes: readonly [string, ComponentType<RoutableComponentProps>][] = [
  ["/route1", Component1],
  ["/route2", Component1],
  [
    "/route3",
    createRoutableStateComponent(StatefulComponent, decodeURIComponent, encodeURIComponent),
  ],
];

const locationStoreFactory = () => createLocationStore(normalPriority);

render(
  <Router
    locationStoreFactory={locationStoreFactory}
    notFound={NotFound}
    routes={routes}
  />,
  document.getElementById("root") as HTMLElement,
);
