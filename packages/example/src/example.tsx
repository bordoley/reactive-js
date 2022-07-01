import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  __observe,
  observable,
  generate,
  __do,
  __memo,
} from "@reactive-js/core/observable";
import { flow, FlowMode } from "@reactive-js/core/flowable";
import { __state, __stream } from "@reactive-js/core/streamable";
import {
  createComponent,
  createReactIdlePriorityScheduler,
  createReactNormalPriorityScheduler,
  useObservable,
} from "@reactive-js/core/react";
import { windowLocation, WindowLocationURI } from "@reactive-js/core/web";
import { increment, pipe, returns, Updater } from "@reactive-js/core/functions";
import { DispatcherLike } from "@reactive-js/core/dispatcher";

const normalPriorityScheduler = createReactNormalPriorityScheduler();

// History must be globally unique to an application
const historyStream = windowLocation.stream(normalPriorityScheduler, {
  replay: 1,
});

const counterFlowable = pipe(generate(increment, returns(0)), flow());

const createActions = (
  stateDispatcher: DispatcherLike<Updater<FlowMode>>,
  counterDispatcher: DispatcherLike<FlowMode>,
) => ({
  onValueChanged: (value: number) => {
    historyStream.dispatch(
      (uri: WindowLocationURI) => ({
        ...uri,
        query: `v=${value}`,
      }),
      { replace: true },
    );
  },
  toggleStateMode: () =>
    stateDispatcher.dispatch(mode => (mode === "pause" ? "resume" : "pause")),
  setCounterMode: (mode: FlowMode) => counterDispatcher.dispatch(mode),
});

const initialFlowModeState = () => "pause" as FlowMode;
const idlePriorityScheduler = createReactIdlePriorityScheduler();

const StreamPauseResume = createComponent(() =>
  observable(() => {
    const counter = __stream(counterFlowable, {
      scheduler: idlePriorityScheduler,
    });
    const state = __state(initialFlowModeState);

    const { onValueChanged, toggleStateMode, setCounterMode } = __memo(
      createActions,
      state,
      counter,
    );

    const value = __observe(counter) ?? 0;
    const mode = __observe(state) ?? "pause";

    __do(setCounterMode, mode);
    __do(onValueChanged, value);

    const label = mode === "resume" ? "PAUSE" : "RESUME";

    return (
      <>
        <div>{value}</div>
        <button onClick={toggleStateMode}>{label}</button>
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
