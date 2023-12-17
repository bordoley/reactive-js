import { Function1, SideEffect1, pipe } from "../../../../functions.js";
import { DisposableLike } from "../../../../utils.js";
import * as Disposable from "../../../../utils/Disposable.js";
import type * as Element from "../../Element.js";

const Element_addEventHandler: Element.Signature["addEventHandler"] =
  (
    eventName: string,
    eventHandler: SideEffect1<unknown>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<EventTarget, DisposableLike> =>
  target => {
    const disposable = Disposable.create();

    const addEventListenerOptions = {
      capture: options?.capture ?? false,
      passive: options?.capture ?? true,
    };

    target.addEventListener(eventName, eventHandler, addEventListenerOptions);

    pipe(
      disposable,
      Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, eventHandler);
      }),
    );

    return disposable;
  };

export default Element_addEventHandler;
