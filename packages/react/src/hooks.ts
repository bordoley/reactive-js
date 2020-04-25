import { useCallback, useEffect, useRef, useState } from "react";
import {
  StreamLike,
  StreamableLike,
} from "@reactive-js/core/dist/js/streamable";
import { Exception } from "@reactive-js/core/dist/js/disposable";
import {
  ObservableLike,
  observe,
  ObserverLike,
  subscribe,
  subscribeOn,
  throttle,
  never,
} from "@reactive-js/core/dist/js/observable";
import { none, Option, isSome } from "@reactive-js/core/dist/js/option";
import { pipe } from "@reactive-js/core/dist/js/pipe";
import { normalPriority } from "./scheduler";
import { SchedulerLike } from "@reactive-js/core/dist/js/scheduler";

class UseObservableObserver<T> implements ObserverLike<T> {
  constructor(
    private readonly updateState: React.Dispatch<
      React.SetStateAction<Option<T>>
    >,
    private readonly updateError: React.Dispatch<
      React.SetStateAction<Option<Exception>>
    >,
  ) {}

  onDispose(error?: Exception) {
    this.updateError(_ => error);
  }

  onNotify(next: T) {
    this.updateState(_ => next);
  }
}

const subscribeObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<Option<T>>>,
  updateError: React.Dispatch<React.SetStateAction<Option<Exception>>>,
  scheduler: SchedulerLike,
) =>
  pipe(
    observable,
    throttle(8),
    subscribeOn(scheduler),
    observe(new UseObservableObserver(updateState, updateError)),
    subscribe(normalPriority),
  );

/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable The `ObservableLike` to subscribe to.
 * @param scheduler An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 */
export const useObservable = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike = normalPriority,
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
    return () => {
      subscription.dispose();
    };
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
): [Option<T>, (req: TReq) => void] => {
  const scheduler = config.scheduler ?? normalPriority;
  const stateScheduler = config.stateScheduler ?? scheduler;
  const replay = config.replay ?? 0;

  const [stream, updateEnumerator] = useState<Option<StreamLike<TReq, T>>>(
    none,
  );
  const streamRef = useRef<Option<StreamLike<TReq, T>>>(none);

  useEffect(() => {
    const stream = streamable.stream(scheduler, replay);
    streamRef.current = stream;

    updateEnumerator(_ => stream);

    return () => {
      streamRef.current = undefined;
      stream.dispose();
    };
  }, [streamable, scheduler, replay, updateEnumerator]);

  const notify = useCallback(
    req => {
      const stream = streamRef.current;
      if (isSome(stream)) {
        stream.dispatch(req);
      }
    },
    [streamRef],
  );

  const value = useObservable(stream ?? never<T>(), stateScheduler);
  return [value, notify];
};
