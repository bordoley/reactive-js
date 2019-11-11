import { useMemo, useEffect, useState } from "react";
import {
  observe,
  Notification,
  Notifications,
  Observable,
  ObservableLike
} from "@rx-min/rx-core";

export const useObservable = <T>(
  observable: ObservableLike<T>
): T | undefined => {
  const [state, updateState] = useState<T | undefined>(undefined);
  const [error, updateError] = useState<Error | undefined>(undefined);

  const subscription = useMemo(
    () =>
      Observable.connect(
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
                  } else {
                    updateState(_ => undefined);
                  }
                  break;
              }
            }
          })
        )
      ),
    [observable, updateState, updateError]
  );

  useEffect(
    () => () => {
      subscription.dispose();
    },
    [subscription]
  );

  if (error !== undefined) {
    throw error;
  }

  return state;
};
