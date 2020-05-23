import { dispose, addTeardown } from "../../disposable.ts";
import { Function1 } from "../../functions.ts";
import { createObservable, ObservableLike, dispatch } from "../../observable.ts";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: Function1<Event, T>,
): ObservableLike<T> =>
  createObservable(dispatcher => {
    const listener = (event: Event) => {
      try {
        const result = selector(event);
        dispatch(dispatcher, result);
      } catch (cause) {
        dispose(dispatcher, { cause });
      }
    };

    target.addEventListener(eventName, listener, { passive: true });
    addTeardown(dispatcher, () => {
      target.removeEventListener(eventName, listener);
    });
  });
