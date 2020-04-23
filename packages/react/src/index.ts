import { useCallback, useEffect, useRef, useState } from "react";
import {
  AsyncEnumeratorLike,
  AsyncEnumerableLike,
} from "@reactive-js/async-enumerable";
import { Exception } from "@reactive-js/disposable";
import {
  ObservableLike,
  observe,
  ObserverLike,
  subscribe,
  subscribeOn,
  throttle,
  never,
} from "@reactive-js/observable";
import { none, Option, isSome } from "@reactive-js/option";
import { pipe } from "@reactive-js/pipe";
import { normalPriority } from "@reactive-js/react-scheduler";
import { SchedulerLike } from "@reactive-js/scheduler";

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

export const useAsyncEnumerable = <TReq, T>(
  enumerable: AsyncEnumerableLike<TReq, T>,
  config: {
    scheduler?: SchedulerLike;
    replay?: number;
    stateScheduler?: SchedulerLike;
  } = {},
): [Option<T>, (req: TReq) => void] => {
  const scheduler = config.scheduler ?? normalPriority;
  const stateScheduler = config.stateScheduler ?? scheduler;
  const replay = config.replay ?? 0;

  const [enumerator, updateEnumerator] = useState<
    Option<AsyncEnumeratorLike<TReq, T>>
  >(none);
  const enumeratorRef = useRef<Option<AsyncEnumeratorLike<TReq, T>>>(none);

  useEffect(() => {
    const enumerator = enumerable.enumerateAsync(scheduler, replay);
    enumeratorRef.current = enumerator;

    updateEnumerator(_ => enumerator);

    return () => {
      enumeratorRef.current = undefined;
      enumerator.dispose();
    };
  }, [enumerable, scheduler, replay, updateEnumerator]);

  const notify = useCallback(
    req => {
      const enumerator = enumeratorRef.current;
      if (isSome(enumerator)) {
        enumerator.dispatch(req);
      }
    },
    [enumeratorRef],
  );

  const value = useObservable(enumerator ?? never<T>(), stateScheduler);
  return [value, notify];
};
