import { DisposableLike } from "@reactive-js/disposable";
import {
  AsyncIteratorLike,
  AsyncIteratorResourceLike,
} from "@reactive-js/ix-core";
import { normalPriority } from "@reactive-js/react-scheduler";
import { ObservableLike, ObservableResourceLike } from "@reactive-js/rx-core";
import { connect, observe, pipe, throttleTime } from "@reactive-js/rx-observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import { useCallback, useEffect, useMemo, useState } from "react";

const useDispose = (disposable: DisposableLike) => {
  useEffect(
    () => () => {
      disposable.dispose();
    },
    [disposable],
  );
};

export const useDisposable = <T extends DisposableLike>(
  factory: () => T,
  deps: readonly any[] | undefined,
): T => {
  const resource = useMemo(factory, deps);
  useDispose(resource);
  return resource;
};

const connectObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<T | undefined>>,
  updateError: React.Dispatch<React.SetStateAction<Error | undefined>>,
  scheduler: SchedulerLike,
) =>
  connect(
    pipe(
      observable,
      throttleTime(16),
      observe({
        next: (data: T) => updateState(_ => data),
        complete: (error?: Error) => updateError(_ => error),
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
  const [error, updateError] = useState<Error | undefined>(undefined);

  const observable = useMemo(factory, deps);

  useDisposable(
    () => connectObservable(observable, updateState, updateError, scheduler),
    [observable, updateState, updateError, scheduler],
  );

  if (error !== undefined) {
    throw error;
  }

  return state;
};

export const useObservableResource = <T>(
  factory: () => ObservableResourceLike<T>,
  deps: readonly any[] | undefined,
  scheduler?: SchedulerLike,
): T | undefined => {
  const observableResource = useMemo(factory, deps);
  useDispose(observableResource);
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
  const iterator = useMemo(factory, deps);
  useDispose(iterator);
  const dispatch = useCallback(req => iterator.dispatch(req), [iterator]);
  const value = useObservable(() => iterator, [iterator], scheduler);
  return [value, dispatch];
};
