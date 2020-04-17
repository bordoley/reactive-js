import { useCallback, useEffect, useState } from "react";
import {
  AsyncEnumeratorLike,
  AsyncEnumerableLike,
} from "@reactive-js/async-enumerable";

import { DisposableLike, Exception } from "@reactive-js/disposable";
import {
  ObservableLike,
  observe,
  ObserverLike,
  subscribe,
  subscribeOn,
  throttle,
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

/**
 *
 * @param enumerator
 * @param scheduler
 */
export const useAsyncEnumerator = <TReq, T>(
  enumerator: AsyncEnumeratorLike<TReq, T>,
  scheduler?: SchedulerLike,
): [Option<T>, (req: TReq) => void] => {
  const notify = useCallback(req => enumerator.dispatch(req), [enumerator]);
  const value = useObservable(enumerator, scheduler);
  return [value, notify];
};

const useResource = <T extends DisposableLike>(factory: () => T): Option<T> => {
  const [resource, updateResource] = useState<Option<T>>(none);

  useEffect(() => {
    const resource = factory();
    updateResource(_ => resource);

    return () => {
      resource.dispose();
    };
  }, [factory, updateResource]);

  return resource;
};

/**
 *
 * @param enumerable
 * @param config
 */
export const useAsyncEnumerable = <TReq, T>(
  enumerable: AsyncEnumerableLike<TReq, T>,
  config: {
    scheduler?: SchedulerLike;
    replay?: number;
  } = {},
): Option<AsyncEnumeratorLike<TReq, T>> => {
  const scheduler = config.scheduler || normalPriority;
  const replay = config.replay || 0;

  const factory = useCallback(
    () => enumerable.enumerateAsync(scheduler, replay),
    [enumerable, scheduler, replay],
  );

  return useResource<AsyncEnumeratorLike<TReq, T>>(factory);
};
