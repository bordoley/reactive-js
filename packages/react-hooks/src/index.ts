import { useMemo, useEffect, useState, useCallback } from "react";
import {
  connect,
  observe,
  Observable,
  ObservableLike,
  ObservableResourceLike,
} from "@reactive-js/rx-core";

import { scheduler } from "@reactive-js/react-scheduler";
import { DisposableLike, Disposable } from "@reactive-js/disposables";

import { AsyncIteratorLike } from "@reactive-js/ix-core";

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

const makeObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<T | undefined>>,
  updateError: React.Dispatch<React.SetStateAction<Error | undefined>>,
) =>
  Observable.lift(
    observable,
    observe({
      next: (data: T) => updateState(_ => data),
      complete: (error?: Error) => updateError(_ => error),
    }),
  );

export const useObservable = <T>(
  factory: () => ObservableLike<T>,
  deps: readonly any[] | undefined,
): T | undefined => {
  const [state, updateState] = useState<T | undefined>(undefined);
  const [error, updateError] = useState<Error | undefined>(undefined);

  const observable = useMemo(factory, deps);

  useDisposable(
    () =>
      connect(makeObservable(observable, updateState, updateError), scheduler),
    [updateState, updateError, scheduler],
  );

  if (error !== undefined) {
    throw error;
  }

  return state;
};

export const useObservableResource = <T>(
  factory: () => ObservableResourceLike<T>,
  deps: readonly any[] | undefined,
): T | undefined => {
  const observableResource = useMemo(factory, deps);
  useDispose(observableResource);
  return useObservable(() => observableResource, [observableResource]);
};

export const useAsyncIterator = <TReq, T>(
  factory: () => AsyncIteratorLike<TReq, T>,
  deps: readonly any[] | undefined,
): [T | undefined, (req: TReq) => void] => {
  const iterator = useMemo(factory, deps);
  useDispose(iterator);
  const dispatch = useCallback(req => iterator.dispatch(req), [iterator]);
  const value = useObservable(() => iterator, [iterator]);
  return [value, dispatch];
};
