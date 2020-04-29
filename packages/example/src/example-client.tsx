import { onNotify as onNotifyStream } from "@reactive-js/core/dist/js/streamable";
import {
  fromObservable,
  FlowMode,
  FlowEventType,
} from "@reactive-js/core/dist/js/flowable";
import {
  toStateStore,
  StateUpdater,
} from "@reactive-js/core/dist/js/stateStore";
import {
  HttpClientRequestStatusType,
  createHttpRequest,
  HttpMethod,
} from "@reactive-js/core/dist/js/http";
import { sendHttpRequest } from "@reactive-js/web/dist/js/http";
import { useObservable, useStreamable } from "@reactive-js/react/dist/js/hooks";
import {
  RoutableComponentProps,
  Router,
  useRoutableState,
} from "@reactive-js/react/dist/js/router";
import {
  idlePriority,
  normalPriority,
} from "@reactive-js/react/dist/js/scheduler";
import {
  generate,
  onNotify,
  subscribe,
  ofValue,
  concatMap,
  using,
  throttle,
} from "@reactive-js/core/dist/js/observable";
import {
  history,
  Location,
  createEventSource,
} from "@reactive-js/web/dist/js/dom";
import React, {
  ComponentType,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { default as ReactDOM } from "react-dom";
import { isSome, none } from "@reactive-js/core/dist/js/option";
import { WebRequestBody } from "@reactive-js/web/dist/js/http";
import {
  pipe,
  compose,
  returns,
  increment,
} from "@reactive-js/core/dist/js/functions";

const makeCallbacks = (
  uriUpdater: (updater: StateUpdater<Location>) => void,
) => {
  const liftUpdater = (updater: StateUpdater<Location>) => () =>
    uriUpdater(updater);

  const goToPath = (pathname: string) =>
    liftUpdater(state => ({ ...state, pathname }));

  const goToRoute1 = goToPath("/route1");
  const goToRoute2 = goToPath("/route2");
  const goToRoute3 = goToPath("/route3");
  const stream = goToPath("/stream");

  return { goToRoute1, goToRoute2, goToRoute3, stream };
};

const NotFound = ({ uriUpdater }: RoutableComponentProps) => {
  const { goToRoute1, goToRoute2, goToRoute3, stream } = useMemo(
    returns(makeCallbacks(uriUpdater)),
    [uriUpdater],
  );

  return (
    <div>
      {"Not Found"}
      <button onClick={goToRoute1}>Go to route1</button>
      <button onClick={goToRoute2}>Go to route2</button>
      <button onClick={goToRoute3}>Go to route3</button>
      <button onClick={stream}>Go to stream</button>
    </div>
  );
};

const obs = generate(increment, returns<number>(0));
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
    s => (s.length > 0 ? "#" + encodeURIComponent(s) : ""),
  );

  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = ev.target;
      dispatch(returns(value));
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

const StreamPauseResume = (_props: RoutableComponentProps) => {
  const stream = useMemo(() => pipe(obs, throttle(15), fromObservable), []);
  const [value, setMode] = useStreamable(stream, {
    scheduler: idlePriority,
  });
  const [{ mode }, updateMode] = useState({ mode: FlowMode.Pause });

  const onClick = useCallback(
    () =>
      updateMode(({ mode }) => {
        const newMode =
          mode === FlowMode.Pause ? FlowMode.Resume : FlowMode.Pause;
        return { mode: newMode };
      }),
    [updateMode],
  );

  useEffect(() => setMode(mode), [mode, setMode]);

  const label = mode === FlowMode.Pause ? "RESUME" : "PAUSE";

  const displayValue =
    isSome(value) && value.type === FlowEventType.Next ? value.data : 0;

  return (
    <>
      <div>{displayValue}</div>
      <button onClick={onClick}>{label}</button>
    </>
  );
};

const routes: readonly [string, ComponentType<RoutableComponentProps>][] = [
  ["/route1", Component1],
  ["/route2", Component1],
  ["/route3", StatefulComponent],
  ["/stream", StreamPauseResume],
];

const emptyLocation = {
  hash: "",
  pathname: "",
  search: "",
};

const location = pipe(
  history,
  toStateStore(returns(emptyLocation)),
  onNotifyStream<Location>(console.log),
);

(ReactDOM as any)
  .createRoot(document.getElementById("root"))
  .render(<Router location={location} notFound={NotFound} routes={routes} />);

const request = createHttpRequest<WebRequestBody>({
  method: HttpMethod.GET,
  uri: "http://localhost:8080/files/packages/example/dist/rollup/bundle.js",
  body: none,
});

pipe(
  sendHttpRequest(request),
  concatMap(status =>
    status.type === HttpClientRequestStatusType.HeadersReceived
      ? using(returns(status.response.body), body => body.text)
      : ofValue(JSON.stringify(status)),
  ),
  onNotify(console.log),
  subscribe(normalPriority),
).add(_ => console.log("dispose"));

pipe(
  createEventSource("http://localhost:8080/events", {
    events: ["error", "message", "test"],
  }),
  onNotify(console.log),
  subscribe(normalPriority),
).add(console.log);
