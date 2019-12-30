import { StateUpdaterLike } from "@reactive-js/ix";
import { useObservable } from "@reactive-js/react";
import {
  RoutableComponentProps,
  Router,
  useRoutableState,
} from "@reactive-js/react-router";
import { idlePriority, normalPriority } from "@reactive-js/react-scheduler";
import { generate, onNext } from "@reactive-js/rx";
import { locationAsyncIterable, LocationLike } from "@reactive-js/web";
import React, { ComponentType, useCallback, useMemo } from "react";
import { default as ReactDOM } from "react-dom";
import { pipe } from "@reactive-js/pipe";

const makeCallbacks = (
  uriUpdater: (updater: StateUpdaterLike<LocationLike>) => void,
) => {
  const liftUpdater = (updater: StateUpdaterLike<LocationLike>) => () =>
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

const obs = generate(
  x => x + 1,
  () => 0,
);
const Component1 = (props: RoutableComponentProps) => {
  const value = useObservable(obs, idlePriority);

  return (
    <>
      <div>{props.uri.path}</div>
      <div>{value}</div>
    </>
  );
};

const StatefulComponent = (props: RoutableComponentProps) => {
  const [state, dispatch] = useRoutableState(
    props,
    decodeURIComponent,
    encodeURIComponent,
  );

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = ev.target;
      dispatch(_ => value);
    },
    [dispatch],
  );

  // FIXME: In the real world, maintain cursor position:
  // http://dimafeldman.com/js/maintain-cursor-position-after-changing-an-input-value-programatically/
  return (
    <div>
      <input type="text" onChange={onChange} value={state}></input>
    </div>
  );
};

const routes: readonly [string, ComponentType<RoutableComponentProps>][] = [
  ["/route1", Component1],
  ["/route2", Component1],
  ["/route3", StatefulComponent],
];

const locationStore = locationAsyncIterable.getIXAsyncIterator(
  normalPriority,
  1,
);
pipe(locationStore, onNext(console.log));

(ReactDOM as any)
  .createRoot(document.getElementById("root"))
  .render(
    <Router
      locationStore={locationStore}
      notFound={NotFound}
      routes={routes}
    />,
  );
