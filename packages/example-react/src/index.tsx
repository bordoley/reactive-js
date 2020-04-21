import {
  toStateStore,
  StateUpdater,
  lift,
  fromObservableStream,
  StreamEvent,
  StreamMode,
  AsyncEnumeratorLike,
  StreamEventType,
} from "@reactive-js/async-enumerable";
import { createHttpRequest, HttpMethod, HttpContent } from "@reactive-js/http";
import { sendHttpRequest, WebResponseBodyLike } from "@reactive-js/http-web";
import {
  useObservable,
  useAsyncEnumerable,
  useAsyncEnumerator,
} from "@reactive-js/react";
import {
  RoutableComponentProps,
  Router,
  useRoutableState,
} from "@reactive-js/react-router";
import { idlePriority, normalPriority } from "@reactive-js/react-scheduler";
import {
  generate,
  onNotify,
  subscribe,
  ofValue,
  concatMap,
  using,
  onError,
  onDispose,
} from "@reactive-js/observable";
import { history, Location, createEventSource } from "@reactive-js/web";
import React, {
  ComponentType,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { default as ReactDOM } from "react-dom";
import { pipe, compose } from "@reactive-js/pipe";
import { isSome } from "@reactive-js/option";
import { HttpClientRequestStatusType } from "@reactive-js/http-common";

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
    () => makeCallbacks(uriUpdater),
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
    s => (s.length > 0 ? "#" + encodeURIComponent(s) : ""),
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

const StreamPauseView = ({
  events,
}: {
  events: AsyncEnumeratorLike<StreamMode, StreamEvent<number>>;
}) => {
  const [value, setMode] = useAsyncEnumerator(events);
  const [{ mode }, updateMode] = useState({ mode: StreamMode.Pause });

  const onClick = useCallback(
    () =>
      updateMode(({ mode }) => {
        const newMode =
          mode === StreamMode.Pause ? StreamMode.Resume : StreamMode.Pause;
        return { mode: newMode };
      }),
    [updateMode],
  );

  useEffect(() => setMode(mode), [mode, setMode]);

  const label = mode === StreamMode.Pause ? "RESUME" : "PAUSE";

  const displayValue =
    isSome(value) && value.type === StreamEventType.Next ? value.data : 0;

  return (
    <>
      <div>{displayValue}</div>
      <button onClick={onClick}>{label}</button>
    </>
  );
};

const StreamPauseResume = (_props: RoutableComponentProps) => {
  const stream = useMemo(() => fromObservableStream(obs), []);
  const events = useAsyncEnumerable(stream, { scheduler: idlePriority });

  return isSome(events) ? <StreamPauseView events={events} /> : null;
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
  toStateStore(() => emptyLocation),
  lift(onNotify<Location>(console.log)),
);

(ReactDOM as any)
  .createRoot(document.getElementById("root"))
  .render(<Router location={location} notFound={NotFound} routes={routes} />);

const request = createHttpRequest<HttpContent<any>>(
  HttpMethod.GET,
  "http://localhost:8080/files/packages/example-react/dist/rollup/bundle.js",
);

pipe(
  sendHttpRequest(request),
  concatMap(status =>
    status.type === HttpClientRequestStatusType.HeaderReceived
      ? using(
          _ => status.response.content?.body as WebResponseBodyLike,
          _ => ofValue("done"),
        )
      : ofValue(JSON.stringify(status)),
  ),
  onNotify(console.log),
  onDispose(_ => console.log("dispose")),
  subscribe(normalPriority),
);

pipe(
  createEventSource("http://localhost:8080/events", {
    events: ["error", "message", "test"],
  }),
  onNotify(console.log),
  onError(console.log),
  subscribe(normalPriority),
);
