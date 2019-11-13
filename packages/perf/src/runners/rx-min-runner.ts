import {
  connect,
  lift,
  observe,
  Notification,
  Notifications,
  ObservableLike,
} from "@rx-min/rx-core";
import { VirtualTimeScheduler } from "@rx-min/rx-virtualtime-scheduler";

export const run = <T>(observable: ObservableLike<T>, deferred: any) => {
  const scheduler = VirtualTimeScheduler.create();
  connect(
    lift(
      observable,
      observe({
        notify: (notif: Notification, data: T | Error | void) => {
          switch (notif) {
            case Notifications.complete:
              if (data !== undefined) {
                deferred.resolve();
              } else {
                deferred.benchmark.emit({ type: "error", error: data });
                deferred.resolve(data);
              }
          }
        },
      }),
    ),
    scheduler,
  );
  scheduler.run();
};
