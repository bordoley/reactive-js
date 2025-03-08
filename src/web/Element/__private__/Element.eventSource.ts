import * as EventSource from "../../../computations/EventSource.js";
import { error, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import { DOMEventTarget, EventKeysOf, EventMapOf } from "../../../web.js";
import type * as Element from "../../Element.js";

const Element_eventSource: Element.Signature["eventSource"] =
  <
    TEventTarget extends DOMEventTarget,
    TEventName extends EventKeysOf<TEventTarget>,
  >(
    eventName: TEventName,
    options?: { passive?: boolean; capture?: boolean },
  ) =>
  (target: TEventTarget) =>
    EventSource.create(
      (listener: EventListenerLike<EventMapOf<TEventTarget>[TEventName]>) => {
        const eventHandler = (ev: EventMapOf<TEventTarget>[TEventName]) => {
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

        target.addEventListener(
          eventName,
          eventHandler,
          addEventListenerOptions,
        );

        pipe(
          listener,
          DisposableContainer.onDisposed(_ => {
            target.removeEventListener(eventName, eventHandler);
          }),
        );
      },
    );

export default Element_eventSource;
