import {
  Notifications,
  Observable,
  ObservableLike,
} from "@reactive-js/rx-core";

import { Disposable } from "@reactive-js/disposables";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: (ev: Event) => T,
): ObservableLike<T> =>
  Observable.create(subscriber => {
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
