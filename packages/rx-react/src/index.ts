import { useMemo, useEffect, useState } from "react";
import {
  observe,
  Notification,
  Notifications,
  Observable,
  ObservableLike,
  ObservableResourceLike,
  SchedulerLike,
} from "@rx-min/rx-core";

import { normalPriority } from "@rx-min/rx-scheduler";
import { DisposableLike } from "@rx-min/rx-disposables";

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
  Observable.lift(
    observable,
    observe({
      notify: (event: Notification, data: T | Error | undefined) => {
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
      Observable.connect(
        makeObservable(observable, updateState, updateError),
        scheduler,
      ),
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
