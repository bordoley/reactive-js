import * as Broadcaster from "../../../computations/Broadcaster.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { EventListenerLike, EventListenerLike_notify } from "../../../utils.js";
import { DOMEventTarget, EventKeysOf, EventMapOf } from "../../../web.js";
import type * as Element from "../../Element.js";

const Element_eventSource: Element.Signature["eventSource"] =
  <
    TEventTarget extends DOMEventTarget,
    TEventName extends EventKeysOf<TEventTarget>,
  >(
    eventName: TEventName,
    options?: { passive?: boolean; capture?: boolean; autoDispose?: boolean },
  ) =>
  (target: TEventTarget) =>
    Broadcaster.create(
      (listener: EventListenerLike<EventMapOf<TEventTarget>[TEventName]>) => {
        const eventHandler = bindMethod(listener, EventListenerLike_notify);

        const addEventSinkOptions = {
          capture: options?.capture ?? false,
          passive: options?.passive ?? true,
        };

        target.addEventListener(eventName, eventHandler, addEventSinkOptions);

        pipe(
          listener,
          DisposableContainer.onDisposed(_ => {
            target.removeEventListener(eventName, eventHandler);
          }),
        );
      },
      options,
    );

export default Element_eventSource;
