import { createObservable, ObservableLike } from "@reactive-js/rx";

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
      } catch (cause) {
        observer.complete({ cause });
      }
    };

    target.addEventListener(eventName, listener, { passive: true });

    return () => {
      target.removeEventListener(eventName, listener);
    };
  });
