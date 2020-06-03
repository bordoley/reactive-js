import { useCallback, useEffect, useRef, useState } from "react";
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
import {
  dispatch as dispatchToStream,
  ObservableLike,
  onNotify,
  StreamLike,
  subscribe,
  subscribeOn,
  throttle,
  never,
} from "./observable";
import { none, Option, isSome } from "./option";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  toSchedulerWithPriority,
  run,
} from "./scheduler";
import { StreamableLike, stream as streamableStream } from "./streamable";

const subscribeObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<Option<T>>>,
  updateError: React.Dispatch<React.SetStateAction<Option<Error>>>,
  scheduler: SchedulerLike,
) => {
  const subscription = pipe(
    observable,
    throttle(8),
    subscribeOn(scheduler),
    onNotify(compose(returns, updateState)),
    subscribe(normalPriority),
  );

  addTeardown(subscription, compose(returns, updateError));
  return subscription;
};

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
    const subscription = subscribeObservable(
      observable,
      updateState,
      updateError,
      scheduler,
    );
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
    readonly replay?: number;
    readonly stateScheduler?: SchedulerLike;
  } = {},
): [Option<T>, SideEffect1<TReq>] => {
  const { replay = 0, scheduler = normalPriority } = options;
  const stateScheduler = options.stateScheduler ?? scheduler;

  const [stream, updateStream] = useState<Option<StreamLike<TReq, T>>>(none);
  const streamRef = useRef<Option<StreamLike<TReq, T>>>(none);

  useEffect(() => {
    const stream = pipe(streamable, streamableStream(scheduler, options));
    streamRef.current = stream;

    pipe(stream, returns, updateStream);

    return defer(stream, dispose());
  }, [streamable, scheduler, replay, updateStream]);

  const dispatch = useCallback(
    req => {
      const stream = streamRef.current;
      if (isSome(stream)) {
        dispatchToStream(stream, req);
      }
    },
    [streamRef],
  );

  const value = useObservable(stream ?? never<T>(), {
    scheduler: stateScheduler,
  });
  return [value, dispatch];
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
