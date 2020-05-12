import { dispose, add } from "../../disposable";
import { Operator } from "../../functions";
import { createObservable, ObservableLike, dispatch } from "../../observable";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: Operator<Event, T>,
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
