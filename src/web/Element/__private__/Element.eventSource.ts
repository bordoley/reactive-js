import * as Broadcaster from "../../../computations/Broadcaster.js";
import { error, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike_dispose,
  ListenerLike,
  ListenerLike_notify,
} from "../../../utils.js";
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
      (listener: ListenerLike<EventMapOf<TEventTarget>[TEventName]>) => {
        const eventHandler = (ev: EventMapOf<TEventTarget>[TEventName]) => {
          try {
            listener[ListenerLike_notify](ev);
          } catch (e) {
            listener[DisposableLike_dispose](error(e));
          }
        };

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
