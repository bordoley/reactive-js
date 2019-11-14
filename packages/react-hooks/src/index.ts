import { useMemo, useEffect, useState, useCallback } from "react";
import {
  connect,
  lift,
  observe,
  Notification,
  Notifications,
  ObservableLike,
  ObservableResourceLike,
  SchedulerLike,
} from "@rx-min/rx-core";

import { normalPriority } from "@rx-min/react-scheduler";
import { DisposableLike } from "@rx-min/disposables";

import { AsyncIteratorLike } from "@rx-min/ix-core";

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

const makeObservable = <T>(
  observable: ObservableLike<T>,
  updateState: React.Dispatch<React.SetStateAction<T | undefined>>,
  updateError: React.Dispatch<React.SetStateAction<Error | undefined>>,
) =>
  lift(
    observable,
    observe({
      notify: (event: Notification, data: T | Error | void) => {
        switch (event) {
          case Notifications.next:
            updateState(_ => data as T);
            break;
          case Notifications.complete:
            if (data != undefined) {
              updateError(_ => data as Error | undefined);
            }
            break;
        }
      },
    }),
  );

export const useObservable = <T>(
  observable: ObservableLike<T>,
  scheduler: SchedulerLike = normalPriority,
): T | undefined => {
  const [state, updateState] = useState<T | undefined>(undefined);
  const [error, updateError] = useState<Error | undefined>(undefined);

  useResource(
    () =>
      connect(makeObservable(observable, updateState, updateError), scheduler),
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
  scheduler: SchedulerLike = normalPriority,
): T | undefined => {
  const resource = useResource(factory, deps);
  return useObservable(resource, scheduler);
};

export const useAsyncIterator = <TReq, T>(
  factory: () => AsyncIteratorLike<TReq, T>,
  deps: readonly any[] | undefined,
  scheduler: SchedulerLike = normalPriority,
): [T | undefined, (req: TReq) => void] => {
  const iterator = useResource(factory, deps);
  const dispatch = useCallback(req => iterator.dispatch(req), [iterator]);
  const value = useObservable(iterator, scheduler);

  return [value, dispatch];
};
