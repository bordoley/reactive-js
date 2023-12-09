import { EventSourceLike, SinkLike_notify } from "../../../../events.js";
import * as EventSource from "../../../../events/EventSource.js";
import { Function1, bindMethod, pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";

export type EventTarget = {
  addEventListener(
    eventName: string,
    listener: (ev: unknown) => void,
    options: unknown,
  ): void;
  removeEventListener(eventName: string, listener: (ev: unknown) => void): void;
};

const Element_eventSource: (
  eventName: string,
  options?: { passive?: boolean; capture?: boolean },
) => Function1<EventTarget, EventSourceLike> =
  (eventName: string, options?: { passive?: boolean; capture?: boolean }) =>
  (target: EventTarget) =>
    EventSource.create(listener => {
      const eventHandler = bindMethod(listener, SinkLike_notify);

      const addEventListenerOptions = {
        capture: options?.capture ?? false,
        passive: options?.capture ?? true,
      };

      target.addEventListener(eventName, eventHandler, addEventListenerOptions);

      pipe(
        listener,
        Disposable.onDisposed(_ => {
          target.removeEventListener(eventName, eventHandler);
        }),
      );
    });

export default Element_eventSource;
