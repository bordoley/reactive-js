import {
  dispose,
  Exception,
  addTeardown,
} from "@reactive-js/core/lib/disposable";
import {
  SideEffect1,
  pipe,
  compose,
  defer,
  returns,
} from "@reactive-js/core/lib/functions";
import {
  dispatch as dispatchToStream,
  ObservableLike,
  onNotify,
  StreamLike,
  subscribe,
  subscribeOn,
  throttle,
  never,
} from "@reactive-js/core/lib/observable";
import { none, Option, isSome } from "@reactive-js/core/lib/option";
import { SchedulerLike } from "@reactive-js/core/lib/scheduler";
import {
  StreamableLike,
  stream as streamableStream,
} from "@reactive-js/core/lib/streamable";
import { useCallback, useEffect, useRef, useState } from "react";
import { normalPriority } from "./scheduler";

const subscribeObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<Option<T>>>,
  updateError: React.Dispatch<React.SetStateAction<Option<Exception>>>,
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
  { scheduler } = { scheduler: normalPriority} ,
): Option<T> => {
  const [state, updateState] = useState<Option<T>>(none);
  const [error, updateError] = useState<Option<Exception>>(none);

  useEffect(() => {
    const subscription = subscribeObservable(
      observable,
      updateState,
      updateError,
      scheduler,
    );
    return defer(subscription, dispose);
  }, [observable, updateState, updateError, scheduler]);

  if (isSome(error)) {
    const { cause } = error;
    throw cause;
  }

  return state;
};

export const useStreamable = <TReq, T>(
  streamable: StreamableLike<TReq, T>,
  config: {
    scheduler?: SchedulerLike;
    replay?: number;
    stateScheduler?: SchedulerLike;
  } = {},
): [Option<T>, SideEffect1<TReq>] => {
  const scheduler = config.scheduler ?? normalPriority;
  const stateScheduler = config.stateScheduler ?? scheduler;
  const replay = config.replay ?? 0;

  const [stream, updateStream] = useState<Option<StreamLike<TReq, T>>>(none);
  const streamRef = useRef<Option<StreamLike<TReq, T>>>(none);

  useEffect(() => {
    const stream = streamableStream(streamable, scheduler, { replay });
    streamRef.current = stream;

    pipe(stream, returns, updateStream);
 
    return () => {
      dispose(stream);
    };
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

  const value = useObservable(stream ?? never<T>(), { scheduler: stateScheduler });
  return [value, dispatch];
};
