import {
  historyStateStore,
  createEventSource,
  historyHashStateStore,
} from "@reactive-js/core/lib/dom";
import { fromObservable, FlowMode } from "@reactive-js/core/lib/flowable";
import {
  pipe,
  returns,
  increment,
  Updater,
} from "@reactive-js/core/lib/functions";
import {
  generate,
  throttle,
  onNotify,
  subscribe,
} from "@reactive-js/core/lib/observable";
import { onNotify as onNotifyStream } from "@reactive-js/core/lib/streamable";
import { useObservable, useStreamable } from "@reactive-js/react/lib/hooks";
import {
  RoutableComponentProps,
  Router,
  RelativeURI,
} from "@reactive-js/react/lib/router";
import { idlePriority, normalPriority } from "@reactive-js/react/lib/scheduler";
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { default as ReactDOM } from "react-dom";

const makeCallbacks = (uriUpdater: (updater: Updater<RelativeURI>) => void) => {
  const liftUpdater = (updater: Updater<RelativeURI>) => () =>
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

const StatefulComponent = (_props: RoutableComponentProps) => {
  const [state = "", dispatch] = useStreamable(historyHashStateStore);

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
  const stream = useMemo(() => pipe(obs, throttle(15), fromObservable()), []);
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
  const displayValue = value ?? 0;

  return (
    <>
      <div>{displayValue}</div>
      <button onClick={onClick}>{label}</button>
    </>
  );
};

const routes = {
  "/route1": Component1,
  "/route2": Component1,
  "/route3": StatefulComponent,
  "/stream": StreamPauseResume,
};

const loggedHistoryStateStore = pipe(
  historyStateStore,
  onNotifyStream(console.log),
);

(ReactDOM as any)
  .createRoot(document.getElementById("root"))
  .render(
    <Router
      stateStore={loggedHistoryStateStore}
      notFound={NotFound}
      routes={routes}
    />,
  );

pipe(
  createEventSource("http://localhost:8080/events", {
    events: ["error", "message", "test"],
  }),
  onNotify(console.log),
  subscribe(normalPriority),
);
