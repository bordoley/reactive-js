import { StateUpdater } from "@reactive-js/ix-async-iterator-resource";
import { useObservable } from "@reactive-js/react";
import { RoutableComponentProps, Router } from "@reactive-js/react-router";
import { normalPriority } from "@reactive-js/react-scheduler";
import { generate, connect, pipe, map, fromArray, exhaust, onNext } from "@reactive-js/rx-observable";
import { createLocationStore, Location, createSchedulerWithPriority } from "@reactive-js/web";
import { ComponentType, default as React, useMemo } from "react";
import { render } from "react-dom";

const makeCallbacks = (
  uriUpdater: (updater: StateUpdater<Location>) => void,
) => {
  const liftUpdater = (updater: StateUpdater<Location>) => () =>
    uriUpdater(updater);
  const goToPath = (path: string) => liftUpdater(state => ({ ...state, path }));

  const goToRoute1 = goToPath("/route1");
  const goToRoute2 = goToPath("/route2");

  return { goToRoute1, goToRoute2 };
};

const NotFound = ({ uriUpdater }: RoutableComponentProps) => {
  const { goToRoute1, goToRoute2 } = useMemo(() => makeCallbacks(uriUpdater), [
    uriUpdater,
  ]);

  return (
    <div>
      {"Not Found"}
      <button onClick={goToRoute1}>Go to route1</button>
      <button onClick={goToRoute2}>Go to route2</button>
    </div>
  );
};

const src = generate(x => x + 1, 0);

const Component1 = (props: RoutableComponentProps) => {
  const value = useObservable(() => src, []);

  return (
    <>
      <div>{props.uri.path}</div>
      <div>{value}</div>
    </>
  );
};

const routes: readonly [string, ComponentType<RoutableComponentProps>][] = [
  ["/route1", Component1],
  ["/route2", Component1],
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


const scheduler = createSchedulerWithPriority(500);

const subscription = connect(
  pipe(
    generate(x => x + 1, 0),
    map(x => fromArray([x, x, x, x])),
    exhaust(),
    onNext(console.log),
  ),
  scheduler,
);
