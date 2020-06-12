import { useCallback, useEffect, useState } from "react";
import {
  unstable_IdlePriority,
  unstable_ImmediatePriority,
  unstable_LowPriority,
  unstable_NormalPriority,
  unstable_cancelCallback,
  unstable_now,
  unstable_scheduleCallback,
  unstable_shouldYield,
  unstable_UserBlockingPriority,
} from "scheduler";
import {
  Error,
  addTeardown,
  addDisposable,
  createDisposable,
  dispose,
} from "./disposable";
import { SideEffect1, pipe, compose, defer, returns } from "./functions";
import { ObservableLike, onNotify, StreamLike, subscribe } from "./observable";
import { none, Option, isSome } from "./option";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  toSchedulerWithPriority,
  run,
} from "./scheduler";
import {
  onNotify as onNotifyStream,
  StreamableLike,
  stream as streamableStream,
} from "./streamable";

/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable The `ObservableLike` to subscribe to.
 * @param scheduler An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 */
export const useObservable = <T>(
  observable: ObservableLike<T>,
  options: { readonly scheduler?: SchedulerLike } = {},
): Option<T> => {
  const { scheduler = normalPriority } = options;

  const [state, updateState] = useState<Option<T>>(none);
  const [error, updateError] = useState<Option<Error>>(none);

  useEffect(() => {
    const subscription = pipe(
      observable,
      onNotify(compose(returns, updateState)),
      subscribe(scheduler),
    );

    addTeardown(subscription, compose(returns, updateError));

    return defer(subscription, dispose());
  }, [observable, updateState, updateError, scheduler]);

  if (isSome(error)) {
    const { cause } = error;
    throw cause;
  }

  return state;
};

export const useStreamable = <TReq, T>(
  streamable: StreamableLike<TReq, T>,
  options: {
    readonly scheduler?: SchedulerLike;
  } = {},
): [Option<T>, SideEffect1<TReq>] => {
  const { scheduler = normalPriority } = options;

  const [stream, setStream] = useState<Option<StreamLike<TReq, T>>>(none);
  const [state, updateState] = useState<Option<T>>(none);
  const [error, updateError] = useState<Option<Error>>(none);

  const dispatch = useCallback(
    req => {
      if (isSome(stream)) {
        stream.dispatch(req);
      }
    },
    [stream],
  );

  useEffect(() => {
    const stream = pipe(
      streamable,
      onNotifyStream(compose(returns, updateState)),
      streamableStream(scheduler),
    );

    addTeardown(stream, compose(returns, updateError));
    setStream(stream);

    return defer(stream, dispose());
  }, [streamable, scheduler, setStream]);

  if (isSome(error)) {
    const { cause } = error;
    throw cause;
  }

  return [state, dispatch];
};

const priorityScheduler = {
  inContinuation: false,

  get now(): number {
    return unstable_now();
  },

  get shouldYield(): boolean {
    return priorityScheduler.inContinuation && unstable_shouldYield();
  },

  schedule(
    continuation: SchedulerContinuationLike,
    {
      priority,
      delay = 0,
    }: {
      priority: number;
      delay?: number;
    },
  ) {
    const callback = () => {
      pipe(callbackNodeDisposable, dispose());

      priorityScheduler.inContinuation = true;
      run(continuation);
      priorityScheduler.inContinuation = false;
    };

    const callbackNode = unstable_scheduleCallback(
      priority,
      callback,
      delay > 0 ? { delay } : none,
    );

    const callbackNodeDisposable = createDisposable(
      defer(callbackNode, unstable_cancelCallback),
    );

    addDisposable(continuation, callbackNodeDisposable);
  },
};

/** Scheduler that schedules work on React's internal priority scheduler with idle priority. */
export const idlePriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_IdlePriority),
);

/** Scheduler that schedules work on React's internal priority scheduler with immediate priority. */
export const immediatePriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_ImmediatePriority),
);

/** Scheduler that schedules work on React's internal priority scheduler with normal priority. */
export const normalPriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_NormalPriority),
);

/** Scheduler that schedules work on React's internal priority scheduler with low priority. */
export const lowPriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_LowPriority),
);

/** Scheduler that schedules work on React's internal priority scheduler with user blocking priority. */
export const userBlockingPriority: SchedulerLike = pipe(
  priorityScheduler,
  toSchedulerWithPriority(unstable_UserBlockingPriority),
);
