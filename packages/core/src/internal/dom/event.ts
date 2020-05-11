import { createObservable, ObservableLike, dispatch } from "../../observable";
import { dispose } from "../../disposable";
import { Operator } from "../../functions";

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
    dispatcher.add(() => {
      target.removeEventListener(eventName, listener);
    });
  });
