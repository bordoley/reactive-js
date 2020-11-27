import { addTeardown, dispose } from "../disposable";
import { Function1, pipe } from "../functions";
import { ObservableLike, createObservable } from "../observable";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: Function1<Event, T>,
): ObservableLike<T> =>
  createObservable(dispatcher => {
    const listener = (event: Event) => {
      try {
        const result = selector(event);
        dispatcher.dispatch(result);
      } catch (cause) {
        pipe(dispatcher, dispose({ cause }));
      }
    };

    target.addEventListener(eventName, listener, { passive: true });
    addTeardown(dispatcher, () => {
      target.removeEventListener(eventName, listener);
    });
  });
