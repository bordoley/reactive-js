import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  __observe,
  observable,
  ObservableLike,
  generate,
  __do,
  __memo,
  StreamLike,
} from "@reactive-js/core/observable";
import {
  createStateStore,
  flow,
  FlowMode,
  StateStreamLike,
  __stream,
} from "@reactive-js/core/streamable";
import {
  createComponent,
  createReactIdlePriorityScheduler,
  useObservable,
} from "@reactive-js/core/react";
import {
  windowLocation,
  WindowLocationStreamLike,
  WindowLocationURI,
} from "@reactive-js/core/web";
import { SchedulerLike } from "@reactive-js/core/scheduler";
import { increment, pipe, returns } from "@reactive-js/core/functions";
import { isNone } from "@reactive-js/core/option";

const stateStore = createStateStore(() => "pause" as FlowMode);

const createOnClick = (state: StateStreamLike<FlowMode>) => () => {
  state.dispatch(mode => (mode === "pause" ? "resume" : "pause"));
};

const appState = (
  scheduler: SchedulerLike,
): ObservableLike<{
  mode: FlowMode;
  value: number;
  onClick: () => void;
}> => {
  const counterFlowable = pipe(
    generate(increment, returns(0)),
    flow({ scheduler }),
  );

  const setCounterMode = (
    counter: StreamLike<FlowMode, number>,
    mode: FlowMode,
  ) => {
    counter.dispatch(mode);
  };

  return observable(() => {
    const counter = __stream(counterFlowable);
    const state = __stream(stateStore);

    const onClick = __memo(createOnClick, state);

    const value = __observe(counter) ?? 0;
    const mode = __observe(state) ?? "pause";

    __do(setCounterMode, counter, mode);

    return {
      mode,
      onClick,
      value,
    };
  });
};

const idlePriorityScheduler = createReactIdlePriorityScheduler();
const appStateOnScheduler = appState(idlePriorityScheduler);

const StreamPauseResume = () => {
  const state = useObservable(appStateOnScheduler);
  if (isNone(state)) {
    return <div>starting</div>;
  } else {
    const { onClick, value, mode } = state;

    const label = mode === "resume" ? "PAUSE" : "RESUME";

    return (
      <>
        <div>{value}</div>
        <button onClick={onClick}>{label}</button>
      </>
    );
  }
};

const Root = createComponent(() =>
  observable(() => {
    const historyStream = __stream(windowLocation);

    const onChange = __memo(
      (historyStream: WindowLocationStreamLike) =>
        (ev: React.ChangeEvent<HTMLInputElement>) => {
          const { value: path } = ev.target;

          historyStream.dispatch((uri: WindowLocationURI) => ({
            ...uri,
            path,
          }));
        },
      historyStream,
    );

    const onClick = __memo(
      (historyStream: WindowLocationStreamLike) => () => {
        historyStream.goBack();
      },
      historyStream,
    );

    const uri = __observe(historyStream);

    return (
      <div>
        <div>
          <input
            type="text"
            onChange={onChange}
            value={String(uri?.path ?? "")}
          ></input>
          <button onClick={onClick}>Back</button>
        </div>
        <StreamPauseResume />
      </div>
    );
  }),
);

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<Root />);
