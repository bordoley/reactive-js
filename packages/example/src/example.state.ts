import { pipe, returns, increment, Updater } from "@reactive-js/core/functions";
import {
  __effect,
  __memo,
  __observe,
  async,
  empty,
  generate,
  ObservableLike,
  StreamLike,
} from "@reactive-js/core/observable";
import { FlowMode, fromObservable } from "@reactive-js/core/flowable";
import { __stream } from "@reactive-js/core/streamable";
import { createStateStore } from "@reactive-js/core/stateStore";
import { Option } from "@reactive-js/core/option";
import { SchedulerLike } from "@reactive-js/core/scheduler";

const stateStore = createStateStore(() => ({
  mode: FlowMode.Pause,
}));

const setCounterModeFromStateEffect = (
  counter: Option<StreamLike<FlowMode, number>>,
  mode: FlowMode,
) => {
  counter?.dispatch(mode);
};

const createOnClick = (
  state: Option<
    StreamLike<
      Updater<{
        mode: FlowMode;
      }>,
      {
        mode: FlowMode;
      }
    >
  >,
) => () => {
  state?.dispatch(({ mode }) => ({
    mode: mode === FlowMode.Pause ? FlowMode.Resume : FlowMode.Pause,
  }));
};

export const appState = (
  scheduler: SchedulerLike,
): ObservableLike<{
  mode: FlowMode;
  value: number;
  onClick: () => void;
}> => {
  const counterFlowable = pipe(
    generate(increment, returns(0)),
    fromObservable({ scheduler }),
  );

  return async(() => {
    const counter = __stream(counterFlowable);
    const state = __stream(stateStore);

    const onClick = __memo(createOnClick, state);

    const value = __observe(counter) ?? 0;
    const { mode } = __observe(state) ?? {
      mode: FlowMode.Pause,
    };

    __effect(setCounterModeFromStateEffect, counter, mode);

    return {
      mode,
      onClick,
      value,
    };
  });
};
