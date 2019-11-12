import { Notifications, ObservableLike } from "@rx-min/rx-core";

import { create } from "@rx-min/rx-observables";

import { Disposable } from "@rx-min/rx-disposables";

export const observableEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: (ev: Event) => T,
): ObservableLike<T> =>
  create(subscriber => {
    const listener = (event: Event) => {
      try {
        const result = selector(event);
        subscriber.notify(Notifications.next, result);
      } catch (error) {
        subscriber.notify(Notifications.complete, error);
      }
    };

    target.addEventListener(eventName, listener, { passive: true });

    subscriber.subscription.add(
      Disposable.create(() => {
        target.removeEventListener(eventName, listener);
      }),
    );
  });
