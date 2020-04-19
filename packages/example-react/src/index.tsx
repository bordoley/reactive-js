import {
  toStateStore,
  StateUpdater,
  lift,
} from "@reactive-js/async-enumerable";
import { createHttpRequest, HttpMethod, HttpContent } from "@reactive-js/http";
import { sendHttpRequest } from "@reactive-js/http-web";
import { useObservable } from "@reactive-js/react";
import {
  RoutableComponentProps,
  Router,
  useRoutableState,
} from "@reactive-js/react-router";
import { idlePriority, normalPriority } from "@reactive-js/react-scheduler";
import { generate, onNotify, subscribe } from "@reactive-js/observable";
import { history, Location, createEventSource } from "@reactive-js/web";
import React, { ComponentType, useCallback, useMemo } from "react";
import { default as ReactDOM } from "react-dom";
import { pipe, compose } from "@reactive-js/pipe";

const makeCallbacks = (
  uriUpdater: (updater: StateUpdater<Location>) => void,
) => {
  const liftUpdater = (updater: StateUpdater<Location>) => () =>
    uriUpdater(updater);
  const goToPath = (pathname: string) => liftUpdater(state => ({ ...state, pathname }));

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
      <div>{props.uri.pathname}</div>
      <div>{value}</div>
    </>
  );
};

const chopLeadingChar = (str: string) =>
  str.length > 0 ? str.substring(1) : "";

const StatefulComponent = (props: RoutableComponentProps) => {
  const [state, dispatch] = useRoutableState(
    props,
    compose(chopLeadingChar, decodeURIComponent),
    s => s.length > 0 ? "#" + encodeURIComponent(s) : "",
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

const emptyLocation = {
  hash: "",
  pathname: "",
  search: "",
};

const location = pipe(
  history,
  toStateStore(() => emptyLocation),
  lift(onNotify<Location>(console.log)),
);

(ReactDOM as any)
  .createRoot(document.getElementById("root"))
  .render(<Router location={location} notFound={NotFound} routes={routes} />);

const request = createHttpRequest<HttpContent<any>>(
  HttpMethod.GET,
  "http://localhost:8080/files/packages/example-react/index.json",
);

pipe(
  sendHttpRequest(request),
  onNotify(console.log),
  subscribe(normalPriority),
);

pipe(
  createEventSource("http://localhost:8080/events", {
    events: ["error", "message", "test"],
  }),
  onNotify(console.log),
  subscribe(normalPriority),
);
