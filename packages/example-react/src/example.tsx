import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  __await,
  __do,
  __memo,
  __observe,
  __state,
  __stream,
} from "@reactive-js/core/rx/Observable";
import * as Observable from "@reactive-js/core/rx/Observable";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import {
  createComponent,
  useObservable,
} from "@reactive-js/core/integrations/react";
import { createSchedulerWithNormalPriority } from "@reactive-js/core/integrations/scheduler";
import {
  windowLocation,
  WindowLocationURI,
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_goBack,
} from "@reactive-js/core/integrations/web";
import { Updater, increment, pipe, returns } from "@reactive-js/core/functions";
import { DispatcherLike } from "@reactive-js/core/rx";
import { QueueableLike_push } from "@reactive-js/core/util";
import {
  FlowableStreamLike,
  FlowableState,
  FlowableState_paused,
  FlowableState_running,
  StreamableLike_stream,
} from "@reactive-js/core/streaming";

const normalPriorityScheduler = createSchedulerWithNormalPriority();

// History must be globally unique to an application
const historyStream = windowLocation[StreamableLike_stream](
  normalPriorityScheduler,
  {
    replay: 1,
  },
);

const counterFlowable = pipe(
  Runnable.generate(increment, returns(0), { delay: 100 }),
  Runnable.toFlowable(),
);

const createActions = (
  stateDispatcher: DispatcherLike<FlowableState | Updater<FlowableState>>,
  counterDispatcher: FlowableStreamLike,
) => ({
  onValueChanged: (value: number) => {
    historyStream[QueueableLike_push](
      (uri: WindowLocationURI) => ({
        ...uri,
        query: `v=${value}`,
      }),
      { replace: true },
    );
  },
  toggleStateMode: () =>
    stateDispatcher[QueueableLike_push]((mode: FlowableState) =>
      mode === FlowableState_paused
        ? FlowableState_running
        : FlowableState_paused,
    ),
  setCounterMode: (mode: FlowableState) =>
    counterDispatcher[QueueableLike_push](mode),
});

const initialFlowModeState = (): FlowableState => FlowableState_paused;

const StreamPauseResume = createComponent(() =>
  Observable.async(() => {
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

    const label = mode === FlowableState_running ? "PAUSE" : "RESUME";

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

  historyStream[QueueableLike_push]((uri: WindowLocationURI) => ({
    ...uri,
    path,
  }));
};

const onGoBack = () => {
  historyStream[WindowLocationStreamLike_goBack]();
};

const Root = () => {
  const uri = useObservable(historyStream);

  const canGoBack = historyStream[WindowLocationStreamLike_canGoBack];

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onChange}
          value={String(uri?.path ?? "")}
        ></input>
        <button onClick={onGoBack} disabled={!canGoBack}>
          Back
        </button>
      </div>
      <StreamPauseResume />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<Root />);
