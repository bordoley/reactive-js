import * as EventSource from "../../../../events/EventSource.js";
import { EventListenerLike_notify } from "../../../../events.js";
import { error, pipe } from "../../../../functions.js";
import * as DisposableContainer from "../../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../../utils.js";
import type * as Element from "../../Element.js";

type EventTarget = {
  addEventListener(
    eventName: string,
    listener: (ev: unknown) => void,
    options: unknown,
  ): void;
  removeEventListener(eventName: string, listener: (ev: unknown) => void): void;
};

const Element_eventSource: Element.Signature["eventSource"] = ((
    eventName: string,
    options?: { passive?: boolean; capture?: boolean },
  ) =>
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
        passive: options?.passive ?? true,
      };

      target.addEventListener(eventName, eventHandler, addEventListenerOptions);

      pipe(
        listener,
        DisposableContainer.onDisposed(_ => {
          target.removeEventListener(eventName, eventHandler);
        }),
      );
    })) as Element.Signature["eventSource"];

export default Element_eventSource;
