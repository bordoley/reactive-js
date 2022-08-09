import React from "react";
import ReactDOMClient from "react-dom/client";
import { generateObservable } from "@reactive-js/core/rx";
import {
  async,
  __await,
  __do,
  __memo,
  __observe,
  __state,
  __stream,
} from "@reactive-js/core/effects";
import { toFlowable } from "@reactive-js/core/rx/ObservableLike";
import { FlowMode } from "@reactive-js/core/streaming";
import {
  createComponent,
  createReactNormalPriorityScheduler,
  useObservable,
} from "@reactive-js/core/integrations/react";
import {
  replaceWindowLocation,
  windowLocation,
  WindowLocationURI,
} from "@reactive-js/core/integrations/web";
import { increment, pipe, returns, Updater } from "@reactive-js/core/functions";
import { DispatcherLike } from "@reactive-js/core/scheduling";
import {
  dispatch,
  dispatchTo,
} from "@reactive-js/core/scheduling/DispatcherLike";
import { stream } from "@reactive-js/core/streaming/StreamableLike";

const normalPriorityScheduler = createReactNormalPriorityScheduler();

// History must be globally unique to an application
const historyStream = pipe(
  windowLocation,
  stream(normalPriorityScheduler, {
    replay: 1,
  }),
);

const counterFlowable = pipe(
  generateObservable(increment, returns(0), { delay: 100 }),
  toFlowable(),
);

const createActions = (
  stateDispatcher: DispatcherLike<Updater<FlowMode>>,
  counterDispatcher: DispatcherLike<FlowMode>,
) => ({
  onValueChanged: (value: number) =>
    pipe(
      historyStream,
      replaceWindowLocation((uri: WindowLocationURI) => ({
        ...uri,
        query: `v=${value}`,
      })),
    ),
  toggleStateMode: () =>
    pipe(
      (mode: FlowMode) => (mode === "pause" ? "resume" : "pause"),
      dispatchTo(stateDispatcher),
    ),
  setCounterMode: (mode: FlowMode) => pipe(counterDispatcher, dispatch(mode)),
});

const initialFlowModeState = () => "pause" as FlowMode;

const StreamPauseResume = createComponent(() =>
  async(() => {
    const counter = __stream(counterFlowable);
    const state = __state(initialFlowModeState);

    const { onValueChanged, toggleStateMode, setCounterMode } = __memo(
      createActions,
      state,
      counter,
    );

    const mode = __await(state);
    __do(setCounterMode, mode);

    const value = __observe(counter) ?? 0;
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

  pipe(
    historyStream,
    dispatch((uri: WindowLocationURI) => ({
      ...uri,
      path,
    })),
  );
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
