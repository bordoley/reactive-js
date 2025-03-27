/// <reference types="./Element.addEventHandler.d.ts" />

import { error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
const Element_addEventHandler = (eventName, eventHandler, options) => target => {
    const disposable = Disposable.create();
    const addEventListenerOptions = {
        capture: options?.capture ?? false,
        passive: options?.passive ?? true,
    };
    const safeEventHandler = (ev) => {
        try {
            eventHandler(ev);
        }
        catch (e) {
            disposable[DisposableLike_dispose](error(e));
        }
    };
    target.addEventListener(eventName, safeEventHandler, addEventListenerOptions);
    pipe(disposable, DisposableContainer.onDisposed(_ => {
        target.removeEventListener(eventName, eventHandler);
    }));
    return disposable;
};
export default Element_addEventHandler;
