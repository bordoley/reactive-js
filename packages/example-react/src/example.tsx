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
} from "@reactive-js/core/integrations/web";
import * as WindowLocationStream from "@reactive-js/core/integrations/web/WindowLocationStream";
import {
  increment,
  pipe,
  pipeLazy,
  returns,
  Updater,
} from "@reactive-js/core/functions";
import {
  DispatcherLike,
  PauseableState,
  PauseableState_paused,
  PauseableState_running,
  PauseableLike,
} from "@reactive-js/core/scheduling";
import * as Queue from "@reactive-js/core/util/Queue";
import * as Streamable from "@reactive-js/core/streaming/Streamable";
import { QueueLike_push } from "@reactive-js/core/util";

const normalPriorityScheduler = createSchedulerWithNormalPriority();

// History must be globally unique to an application
const historyStream = pipe(
  windowLocation,
  Streamable.stream(normalPriorityScheduler, {
    replay: 1,
  }),
);

const counterFlowable = pipe(
  Runnable.generate(increment, returns(0), { delay: 100 }),
  Runnable.toFlowable(),
);

const createActions = (
  stateDispatcher: DispatcherLike<Updater<PauseableState>>,
  counterDispatcher: PauseableLike,
) => ({
  onValueChanged: (value: number) =>
    pipe(
      historyStream,
      WindowLocationStream.replace((uri: WindowLocationURI) => ({
        ...uri,
        query: `v=${value}`,
      })),
    ),
  toggleStateMode: () =>
    pipe(
      (mode: PauseableState) =>
        mode === PauseableState_paused
          ? PauseableState_running
          : PauseableState_paused,
      Queue.pushTo(stateDispatcher),
    ),
  setCounterMode: (mode: PauseableState) =>
    counterDispatcher[QueueLike_push](returns(mode)),
});

const initialFlowModeState = (): PauseableState => PauseableState_paused;

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

    const label = mode === PauseableState_running ? "PAUSE" : "RESUME";

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

  historyStream[QueueLike_push]((uri: WindowLocationURI) => ({
    ...uri,
    path,
  }));
};

const onGoBack = pipeLazy(historyStream, WindowLocationStream.goBack);

const Root = () => {
  const uri = useObservable(historyStream);

  const canGoBack = WindowLocationStream.canGoBack(historyStream);

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
