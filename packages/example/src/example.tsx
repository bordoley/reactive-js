import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  __observe,
  observable,
  generate,
  __do,
  __memo,
  StreamLike,
} from "@reactive-js/core/observable";
import {
  __state,
  flow,
  FlowMode,
  StateStreamLike,
  __stream,
} from "@reactive-js/core/streamable";
import {
  createComponent,
  createReactIdlePriorityScheduler,
  createReactNormalPriorityScheduler,
  useObservable,
} from "@reactive-js/core/react";
import { windowLocation, WindowLocationURI } from "@reactive-js/core/web";
import { increment, pipe, returns } from "@reactive-js/core/functions";

const idlePriorityScheduler = createReactIdlePriorityScheduler();
const normalPriorityScheduler = createReactNormalPriorityScheduler();

// History must be globally unique to an application
const historyStream = windowLocation.stream(normalPriorityScheduler);

const onValueChanged = (value: number) => {
  historyStream.dispatch(
    (uri: WindowLocationURI) => ({
      ...uri,
      query: `v=${value}`,
    }),
    { replace: true },
  );
};

const setCounterMode = (
  counter: StreamLike<FlowMode, number>,
  mode: FlowMode,
) => {
  counter.dispatch(mode);
};

const counterFlowable = pipe(
  generate(increment, returns(0)),
  flow({ scheduler: idlePriorityScheduler }),
);

const createOnClick = (state: StateStreamLike<FlowMode>) => () => {
  state.dispatch(mode => (mode === "pause" ? "resume" : "pause"));
};

const initialFlowModeState = () => "pause" as FlowMode;

const StreamPauseResume = createComponent(() =>
  observable(() => {
    const counter = __stream(counterFlowable);
    const state = __state(initialFlowModeState);

    const value = __observe(counter) ?? 0;
    const mode = __observe(state) ?? "pause";

    __do(setCounterMode, counter, mode);
    __do(onValueChanged, value);

    const onClick = __memo(createOnClick, state);
    const label = mode === "resume" ? "PAUSE" : "RESUME";

    return (
      <>
        <div>{value}</div>
        <button onClick={onClick}>{label}</button>
      </>
    );
  }),
);

const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
  const { value: path } = ev.target;

  historyStream.dispatch((uri: WindowLocationURI) => ({
    ...uri,
    path,
  }));
};

const goBack = () => {
  historyStream.goBack();
};

const Root = () => {
  const uri = useObservable(historyStream);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onChange}
          value={String(uri?.path ?? "")}
        ></input>
        <button onClick={goBack}>Back</button>
      </div>
      <StreamPauseResume />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<Root />);
