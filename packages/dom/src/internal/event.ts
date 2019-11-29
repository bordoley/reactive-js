import { ObservableLike } from "@reactive-js/rx-core";
import { createObservable } from "@reactive-js/rx-observable";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: (ev: Event) => T,
): ObservableLike<T> =>
  createObservable(observer => {
    const listener = (event: Event) => {
      try {
        const result = selector(event);
        observer.next(result);
      } catch (error) {
        observer.complete(error);
      }
    };

    target.addEventListener(eventName, listener, { passive: true });

    return () => {
      target.removeEventListener(eventName, listener);
    };
  });
