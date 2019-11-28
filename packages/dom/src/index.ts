import { create, ObservableLike } from "@reactive-js/rx-observable";
import { SchedulerOptions } from "@reactive-js/scheduler";

export const fromEvent = <T>(
  target: EventTarget,
  eventName: string,
  selector: (ev: Event) => T,
  options?: SchedulerOptions,
): ObservableLike<T> =>
  create(observer => {
    const listener = (event: Event) => {
      try {
        const result = selector(event);
        observer.next(result);
      } catch (error) {
        observer.complete(error);
      }
    };

    target.addEventListener(eventName, listener, { passive: true });

    return () => {
      target.removeEventListener(eventName, listener);
    };
  }, options);
