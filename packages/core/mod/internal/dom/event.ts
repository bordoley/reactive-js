import { createObservable, ObservableLike } from "../../observable.ts";
import { dispose } from "../../disposable.ts";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: (ev: Event) => T,
): ObservableLike<T> =>
  createObservable(dispatcher => {
    const listener = (event: Event) => {
      try {
        const result = selector(event);
        dispatcher.dispatch(result);
      } catch (cause) {
        dispose(dispatcher, { cause });
      }
    };

    target.addEventListener(eventName, listener, { passive: true });
    dispatcher.add(() => {
      target.removeEventListener(eventName, listener);
    });
  });
