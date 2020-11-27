import { createRouter, find } from "@reactive-js/core/router";
import {
  ignore,
  pipe,
  SideEffect1,
  Updater,
} from "@reactive-js/core/functions";
import { useObservable, idlePriority } from "@reactive-js/core/react";
import {
  empty as emptyURI,
  decodeAndGetHash,
  encodeAndSetHash,
  RelativeURI,
} from "@reactive-js/core/relativeURI";
import {
  createEventSource,
  fetch,
  historyStateStore,
} from "@reactive-js/core/web";
import React, { useCallback, useMemo } from "react";
import { default as ReactDOM } from "react-dom";
import { appState } from "./example.state";
import { isNone, map as mapOption } from "@reactive-js/core/option";
import { FlowMode } from "@reactive-js/core/flowable";
import { async, empty, __memo, __observe } from "@reactive-js/core/observable";
import { __stream } from "@reactive-js/core/streamable";
import { dispatchTo } from "@reactive-js/core/dispatcher";

const updateHash = (hash: string): Updater<RelativeURI> => uri =>
  encodeAndSetHash(uri, hash);

const TextInputURIState = ({
  dispatch,
  uri,
}: {
  readonly params: { readonly [key: string]: string };
  readonly dispatch: SideEffect1<Updater<RelativeURI>>;
  readonly uri: RelativeURI;
}) => {
  const onChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = ev.target;
      dispatch(updateHash(value));
    },
    [dispatch],
  );

  const state = decodeAndGetHash(uri);

  // FIXME: In the real world, maintain cursor position:
  // http://dimafeldman.com/js/maintain-cursor-position-after-changing-an-input-value-programatically/
  return (
    <div>
      <input type="text" onChange={onChange} value={state}></input>
    </div>
  );
};

const appStateOnScheduler = appState(idlePriority);
const StreamPauseResume = () => {
  const state = useObservable(appStateOnScheduler);
  if (isNone(state)) {
    return null;
  } else {
    const { onClick, value, mode } = state;

    const label = mode === FlowMode.Resume ? "PAUSE" : "RESUME";

    return (
      <>
        <div>{value}</div>
        <button onClick={onClick}>{label}</button>
      </>
    );
  }
};

const goToPath = (pathname: string): Updater<RelativeURI> => uri => ({
  ...uri,
  pathname,
});

const NotFound = ({
  dispatch,
}: {
  readonly params: { readonly [key: string]: string };
  readonly dispatch: SideEffect1<Updater<RelativeURI>>;
  readonly uri: RelativeURI;
}) => {
  const goToEvents = useCallback(() => dispatch(goToPath("/events")), [
    dispatch,
  ]);

  const goToFetch = useCallback(() => dispatch(goToPath("/fetch")), [dispatch]);

  const goToStream = useCallback(() => dispatch(goToPath("/stream")), [
    dispatch,
  ]);

  const goToTextInput = useCallback(() => dispatch(goToPath("/text")), [
    dispatch,
  ]);

  return (
    <div>
      <div>{"Not Found"}</div>
      <div>
        <button onClick={goToEvents}>Events Source Example</button>
        <button onClick={goToFetch}>Fetch Example</button>
        <button onClick={goToStream}>Stream Example</button>
        <button onClick={goToTextInput}>Text Input Example</button>
      </div>
    </div>
  );
};

const EventSourceExample = () => {
  const eventSource = useMemo(
    () =>
      createEventSource("http://localhost:8080/events", {
        events: ["error", "message", "test"],
      }),
    [],
  );

  const eventData = useObservable(eventSource);

  return (
    <div>
      <div>{JSON.stringify(eventData) ?? ""}</div>
    </div>
  );
};

const FetchExample = () => {
  const httpRequest = useMemo(
    () =>
      pipe(
        { uri: "http://localhost:8080/files/packages/example/build/bundle.js" },
        fetch(response => response.text()),
      ),
    [],
  );
  const someData = useObservable(httpRequest);

  return (
    <div>
      <div>{someData ?? ""}</div>
    </div>
  );
};

const router = createRouter({
  "/events": EventSourceExample,
  "/fetch": FetchExample,
  "/stream": StreamPauseResume,
  "/text": TextInputURIState,
});

const createDispatchFn = mapOption(dispatchTo);

const rootState = async(() => {
  const historyStream = __stream(historyStateStore);
  const dispatch = __memo(createDispatchFn, historyStream) ?? ignore;

  const uri = __observe(historyStream ?? empty<RelativeURI>()) ?? emptyURI;
  const [Component, params] = __memo(find, router, uri.pathname) ?? [
    NotFound,
    {},
  ];

  return <Component params={params} dispatch={dispatch} uri={uri} />;
});

const Root = () => useObservable(rootState) ?? null;

(ReactDOM as any).createRoot(document.getElementById("root")).render(<Root />);
