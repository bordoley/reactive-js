import { Observable, ObservableLike } from "@reactive-js/rx-core";

import { Disposable } from "@reactive-js/disposables";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: (ev: Event) => T,
  priority?: number,
): ObservableLike<T> =>
  Observable.create(
    subscriber => {
      let innerSubscription = Disposable.disposed;

      const listener = (event: Event) => {
        try {
          const result = selector(event);
          subscriber.next(result);
        } catch (error) {
          subscriber.complete(error);
          subscriber.subscription.remove(innerSubscription);
        }
      };

      innerSubscription = Disposable.create(() => {
        target.removeEventListener(eventName, listener);
      });

      target.addEventListener(eventName, listener, { passive: true });
      subscriber.subscription.add(innerSubscription);
    },
    undefined,
    priority,
  );
