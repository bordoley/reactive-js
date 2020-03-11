import {
  AsyncEnumeratorLike,
  AsyncEnumerableLike,
  empty,
} from "@reactive-js/async-enumerable";
import { pipe } from "@reactive-js/pipe";
import { normalPriority } from "@reactive-js/react-scheduler";
import {
  ObservableLike,
  observe,
  ObserverLike,
  subscribe,
  subscribeOn,
  throttle,
} from "@reactive-js/observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import { useCallback, useEffect, useState } from "react";
import { DisposableLike, ErrorLike } from "@reactive-js/disposable";

class UseObservableObserver<T> implements ObserverLike<T> {
  constructor(
    private readonly updateState: React.Dispatch<
      React.SetStateAction<T | undefined>
    >,
    private readonly updateError: React.Dispatch<
      React.SetStateAction<ErrorLike | undefined>
    >,
  ) {}

  onDispose(error?: ErrorLike) {
    this.updateError(_ => error);
  }

  onNotify(next: T) {
    this.updateState(_ => next);
  }
}

const subscribeObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<T | undefined>>,
  updateError: React.Dispatch<React.SetStateAction<ErrorLike | undefined>>,
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
): T | undefined => {
  const [state, updateState] = useState<T | undefined>(undefined);
  const [error, updateError] = useState<ErrorLike | undefined>(undefined);

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

  if (error !== undefined) {
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
): [T | undefined, (req: TReq) => void] => {
  const notify = useCallback(req => enumerator.dispatch(req), [enumerator]);
  const value = useObservable(enumerator, scheduler);
  return [value, notify];
};

const useResource = <T extends DisposableLike>(
  factory: () => T,
  defaultResource: T,
): T => {
  const [resource, updateResource] = useState(defaultResource);

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
): AsyncEnumeratorLike<TReq, T> => {
  const scheduler = config.scheduler || normalPriority;
  const emptyEnumerator = empty<TReq, T>().enumerateAsync(scheduler);
  const replay = config.replay || 0;

  const factory = useCallback(
    () => enumerable.enumerateAsync(scheduler, replay),
    [enumerable, scheduler, replay],
  );

  return useResource<AsyncEnumeratorLike<TReq, T>>(factory, emptyEnumerator);
};
