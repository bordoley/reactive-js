import * as EventSource from "../../../../events/EventSource.js";
import {
  EventListenerLike_notify,
  EventSourceLike,
} from "../../../../events.js";
import { Function1, error, pipe } from "../../../../functions.js";
import * as DisposableContainer from "../../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../../utils.js";

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
      const eventHandler = (ev: unknown) => {
        try {
          listener[EventListenerLike_notify](ev);
        } catch (e) {
          listener[DisposableLike_dispose](error(e));
        }
      };

      const addEventListenerOptions = {
        capture: options?.capture ?? false,
        passive: options?.capture ?? true,
      };

      target.addEventListener(eventName, eventHandler, addEventListenerOptions);

      pipe(
        listener,
        DisposableContainer.onDisposed(_ => {
          target.removeEventListener(eventName, eventHandler);
        }),
      );
    });

export default Element_eventSource;
