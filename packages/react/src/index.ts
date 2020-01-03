import {
  AsyncEnumeratorLike,
  AsyncEnumerableLike,
  disposedAsyncEnumerator,
  AsyncEnumeratorResourceLike,
} from "@reactive-js/ix";
import { pipe } from "@reactive-js/pipe";
import { normalPriority } from "@reactive-js/react-scheduler";
import {
  ErrorLike,
  ObservableLike,
  observe,
  ObserverLike,
  subscribe,
  subscribeOn,
  throttle,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { useCallback, useEffect, useState } from "react";
import { DisposableLike } from "@reactive-js/disposable";

class UseObservableObserver<T> implements ObserverLike<T> {
  constructor(
    private readonly updateState: React.Dispatch<
      React.SetStateAction<T | undefined>
    >,
    private readonly updateError: React.Dispatch<
      React.SetStateAction<ErrorLike | undefined>
    >,
  ) {}

  onComplete(error?: ErrorLike) {
    this.updateError(_ => error);
  }

  onNext(data: T) {
    this.updateState(_ => data);
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

export const useAsyncEnumerator = <TReq, T>(
  iterator: AsyncEnumeratorLike<TReq, T>,
  scheduler?: SchedulerLike,
): [T | undefined, (req: TReq) => void] => {
  const dispatch = useCallback(req => iterator.dispatch(req), [iterator]);
  const value = useObservable(iterator, scheduler);
  return [value, dispatch];
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

export const useAsyncEnumerable = <TReq, T>(
  iterable: AsyncEnumerableLike<TReq, T>,
  config: {
    scheduler?: SchedulerLike;
    replay?: number;
  } = {},
): AsyncEnumeratorResourceLike<TReq, T> => {
  const scheduler = config.scheduler || normalPriority;
  const replay = config.replay || 0;

  const factory = useCallback(
    () => iterable.enumerateAsync(scheduler, replay),
    [iterable, scheduler, replay],
  );

  return useResource<AsyncEnumeratorResourceLike<TReq, T>>(
    factory,
    disposedAsyncEnumerator,
  );
};
