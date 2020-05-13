import { dispose, add } from "../../disposable.ts";
import { Function } from "../../functions.ts";
import { createObservable, ObservableLike, dispatch } from "../../observable.ts";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: Function<Event, T>,
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
    add(dispatcher, () => {
      target.removeEventListener(eventName, listener);
    });
  });
