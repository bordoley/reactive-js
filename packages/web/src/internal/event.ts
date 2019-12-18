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
        observer.onNext(result);
      } catch (cause) {
        observer.onComplete({ cause });
      }
    };

    target.addEventListener(eventName, listener, { passive: true });

    return () => {
      target.removeEventListener(eventName, listener);
    };
  });
