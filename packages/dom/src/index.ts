import { Observable, ObservableLike } from "@reactive-js/rx-core";

import { Disposable } from "@reactive-js/disposables";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: (ev: Event) => T,
  priority?: number,
): ObservableLike<T> =>
  Observable.create(
    observer => {
      const listener = (event: Event) => {
        try {
          const result = selector(event);
          observer.next(result);
        } catch (error) {
          observer.complete(error);
        }
      };

      target.addEventListener(eventName, listener, { passive: true });

      return Disposable.create(() => {
        target.removeEventListener(eventName, listener);
      });
    },
    undefined,
    priority,
  );
