import { dispatch } from "../dispatcher";
import { onDisposed } from "../disposable";
import { Function1, pipe } from "../functions";
import { ObservableLike, createObservable } from "../observable";
import { dispatcher as getDispatcher } from "../observer";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: Function1<Event, T>,
): ObservableLike<T> =>
  createObservable(observer => {
    const dispatcher = pipe(
      observer,
      getDispatcher,
      onDisposed(_ => {
        target.removeEventListener(eventName, listener);
      }),
    );

    const listener = (event: Event) => {
      const result = selector(event);
      pipe(dispatcher, dispatch(result));
    };

    target.addEventListener(eventName, listener, { passive: true });
  });
