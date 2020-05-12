import { dispose } from "../../disposable.ts";
import { Operator } from "../../functions.ts";
import { createObservable, ObservableLike, dispatch } from "../../observable.ts";

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
