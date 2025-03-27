import { Function1, SideEffect1, error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";
import { DOMEventTarget, EventKeysOf, EventMapOf } from "../../../web.js";
import type * as Element from "../../Element.js";

const Element_addEventHandler: Element.Signature["addEventHandler"] =
  <
    TEventTarget extends DOMEventTarget,
    TEventName extends EventKeysOf<TEventTarget>,
  >(
    eventName: TEventName,
    eventHandler: SideEffect1<EventMapOf<TEventTarget>[TEventName]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike> =>
  target => {
    const disposable = Disposable.create();

    const addEventListenerOptions = {
      capture: options?.capture ?? false,
      passive: options?.passive ?? true,
    };

    const safeEventHandler = (ev: EventMapOf<TEventTarget>[TEventName]) => {
      try {
        eventHandler(ev);
      } catch (e) {
        disposable[DisposableLike_dispose](error(e));
      }
    };
    target.addEventListener(
      eventName,
      safeEventHandler,
      addEventListenerOptions,
    );

    pipe(
      disposable,
      DisposableContainer.onDisposed(_ => {
        target.removeEventListener(eventName, eventHandler);
      }),
    );

    return disposable;
  };

export default Element_addEventHandler;
