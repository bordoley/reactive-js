import { createRouter, find } from "@reactive-js/core/experimental/router";
import { fromObservable, FlowMode } from "@reactive-js/core/flowable";
import {
  pipe,
  returns,
  increment,
  SideEffect1,
  Updater,
} from "@reactive-js/core/functions";
import { generate, throttle } from "@reactive-js/core/observable";
import {
  idlePriority,
  useObservable,
  useStreamable,
} from "@reactive-js/core/react";
import {
  createEventSource,
  fetch,
  historyStateStore,
} from "@reactive-js/core/web";
import {
  empty as emptyURI,
  decodeAndGetHash,
  encodeAndSetHash,
  RelativeURI
} from "@reactive-js/core/relativeURI";
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { default as ReactDOM } from "react-dom";

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

const StreamPauseResume = () => {
  const stream = useMemo(
    () =>
      pipe(
        generate(increment, returns<number>(0)),
        throttle(15),
        fromObservable(),
      ),
    [],
  );
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

const Root = () => {
  const [uri = emptyURI, dispatch] = useStreamable(historyStateStore);
  const [Component, params] = find(router, uri.pathname) ?? [NotFound, {}];

  return <Component params={params} dispatch={dispatch} uri={uri} />;
};

(ReactDOM as any).createRoot(document.getElementById("root")).render(<Root />);
