import { createObservable, ObservableLike } from "@reactive-js/observable";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: (ev: Event) => T,
): ObservableLike<T> =>
  createObservable(subscriber => {
    const listener = (event: Event) => {
      try {
        const result = selector(event);
        subscriber.dispatch(result);
      } catch (cause) {
        subscriber.dispose({ cause });
      }
    };

    target.addEventListener(eventName, listener, { passive: true });
    subscriber.add(() => {
      target.removeEventListener(eventName, listener);
    });
  });
