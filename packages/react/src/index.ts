import { DisposableLike } from "@reactive-js/disposable";
import {
  AsyncIteratorLike,
  AsyncIteratorResourceLike,
} from "@reactive-js/ix-core";
import { normalPriority } from "@reactive-js/react-scheduler";
import {
  ErrorLike,
  ObservableLike,
  ObservableResourceLike,
} from "@reactive-js/rx-core";
import {
  connect,
  observe,
  pipe,
  throttleTime,
} from "@reactive-js/rx-observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useResource = <T extends DisposableLike>(
  factory: () => T,
  deps: readonly any[] | undefined,
): T => {
  const resource = useMemo(factory, deps);
  useEffect(
    () => () => {
      resource.dispose();
    },
    [resource],
  );
  return resource;
};

const connectObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<T | undefined>>,
  updateError: React.Dispatch<React.SetStateAction<ErrorLike | undefined>>,
  scheduler: SchedulerLike,
) =>
  connect(
    pipe(
      observable,
      throttleTime(16),
      observe({
        next: (data: T) => updateState(_ => data),
        complete: (error?: ErrorLike) => updateError(_ => error),
      }),
    ),
    scheduler,
  );

export const useObservable = <T>(
  factory: () => ObservableLike<T>,
  deps: readonly any[] | undefined,
  scheduler: SchedulerLike = normalPriority,
): T | undefined => {
  const [state, updateState] = useState<T | undefined>(undefined);
  const [error, updateError] = useState<ErrorLike | undefined>(undefined);

  const observable = useMemo(factory, deps);

  useResource(
    () => connectObservable(observable, updateState, updateError, scheduler),
    [observable, updateState, updateError, scheduler],
  );

  if (error !== undefined) {
    const { cause } = error;
    throw cause;
  }

  return state;
};

export const useObservableResource = <T>(
  factory: () => ObservableResourceLike<T>,
  deps: readonly any[] | undefined,
  scheduler?: SchedulerLike,
): T | undefined => {
  const observableResource = useResource(factory, deps);
  return useObservable(
    () => observableResource,
    [observableResource],
    scheduler,
  );
};

export const useAsyncIterator = <TReq, T>(
  factory: () => AsyncIteratorLike<TReq, T>,
  deps: readonly any[] | undefined,
  scheduler?: SchedulerLike,
): [T | undefined, (req: TReq) => void] => {
  const iterator = useMemo(factory, deps);
  const dispatch = useCallback(req => iterator.dispatch(req), [iterator]);
  const value = useObservable(() => iterator, [iterator], scheduler);
  return [value, dispatch];
};

export const useAsyncIteratorResource = <TReq, T>(
  factory: () => AsyncIteratorResourceLike<TReq, T>,
  deps: readonly any[] | undefined,
  scheduler?: SchedulerLike,
): [T | undefined, (req: TReq) => void] => {
  const iterator = useResource(factory, deps);
  const dispatch = useCallback(req => iterator.dispatch(req), [iterator]);
  const value = useObservable(() => iterator, [iterator], scheduler);
  return [value, dispatch];
};
