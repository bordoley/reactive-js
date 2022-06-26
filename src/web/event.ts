import { onDisposed } from "../disposable";
import { Function1, pipe } from "../functions";
import { ObservableLike, createObservable } from "../observable";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: Function1<Event, T>,
): ObservableLike<T> =>
  createObservable(observer => {
    const dispatcher = pipe(
      observer.dispatcher,
      onDisposed(_ => {
        target.removeEventListener(eventName, listener);
      }),
    );

    const listener = (event: Event) => {
      const result = selector(event);
      dispatcher.dispatch(result);
    };

    target.addEventListener(eventName, listener, { passive: true });
  });
