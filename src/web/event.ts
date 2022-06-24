import { addTeardown } from "../disposable";
import { Function1 } from "../functions";
import { ObservableLike, createObservable } from "../observable";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: Function1<Event, T>,
): ObservableLike<T> =>
  createObservable(({ dispatcher }) => {
    const listener = (event: Event) => {
      const result = selector(event);
      dispatcher.dispatch(result);
    };

    target.addEventListener(eventName, listener, { passive: true });
    addTeardown(dispatcher, () => {
      target.removeEventListener(eventName, listener);
    });
  });
