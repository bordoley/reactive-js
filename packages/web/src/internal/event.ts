import { createObservable, ObservableLike } from "@reactive-js/rx";
import { createDisposable } from "@reactive-js/disposable";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: (ev: Event) => T,
): ObservableLike<T> =>
  createObservable(notify => {
    const disposable = createDisposable();
    
    const listener = (event: Event) => {
      try {
        const result = selector(event);
        notify(result);
      } catch (cause) {
        disposable.dispose({ cause });
      }
    };

    target.addEventListener(eventName, listener, { passive: true });
    disposable.add(
      () => {
        target.removeEventListener(eventName, listener);
      }
    );

    return disposable;
  });
