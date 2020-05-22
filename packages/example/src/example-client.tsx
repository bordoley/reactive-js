import { fromObservable, FlowMode } from "@reactive-js/core/lib/flowable";
import {
  pipe,
  returns,
  increment,
  defer,
  SideEffect1,
  Updater,
} from "@reactive-js/core/lib/functions";
import { createRouter, find } from "@reactive-js/core/lib/internal/router";
import {
  generate,
  throttle,
  onNotify,
  subscribe,
} from "@reactive-js/core/lib/observable";
import {
  createEventSource,
  fetch,
  historyPathStateStore,
  historyHashStateStore,
} from "@reactive-js/core/lib/web";
import { idlePriority, normalPriority, useObservable, useStreamable } from "@reactive-js/core/lib/react";
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { default as ReactDOM } from "react-dom";

const TextInputURIState = (_props: {
  readonly params: { readonly [key: string]: string };
  readonly dispatch: SideEffect1<Updater<string>>;
}) => {
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

const StreamPauseResume = (_: {
  readonly params: { readonly [key: string]: string };
  readonly dispatch: SideEffect1<Updater<string>>;
}) => {
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

const NotFound = ({
  dispatch,
}: {
  readonly params: { readonly [key: string]: string };
  readonly dispatch: SideEffect1<Updater<string>>;
}) => {
  const goToStream = useCallback(() => dispatch(returns("/stream")), [
    dispatch,
  ]);

  const goToTextInput = useCallback(() => dispatch(returns("/text")), [
    dispatch,
  ]);

  const httpRequest = useMemo(
    defer(
      { uri: "http://localhost:8080/files/packages/example/build/bundle.js" },
      fetch(response => response.text()),
    ),
    [],
  );
  const someData = useObservable(httpRequest);

  return (
    <div>
      <div>{"Not Found"}</div>
      <div>
        <button onClick={goToStream}>Stream Example</button>
        <button onClick={goToTextInput}>Text Input Example</button>
      </div>
      <div>{someData ?? ""}</div>
    </div>
  );
};

const router = createRouter({
  "/stream": StreamPauseResume,
  "/text": TextInputURIState,
});

const Root = () => {
  const [path = "", dispatch] = useStreamable(historyPathStateStore);
  const [Component, params] = find(router, path) ?? [NotFound, {}];

  return <Component params={params} dispatch={dispatch} />;
};

(ReactDOM as any).createRoot(document.getElementById("root")).render(<Root />);

pipe(
  createEventSource("http://localhost:8080/events", {
    events: ["error", "message", "test"],
  }),
  onNotify(console.log),
  subscribe(normalPriority),
);
