/// <reference types="./Element.addEventHandler.d.ts" />

import { pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
const Element_addEventHandler = (eventName, eventHandler, options) => target => {
    const disposable = Disposable.create();
    const addEventListenerOptions = {
        capture: options?.capture ?? false,
        passive: options?.capture ?? true,
    };
    target.addEventListener(eventName, eventHandler, addEventListenerOptions);
    pipe(disposable, Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, eventHandler);
    }));
    return disposable;
};
export default Element_addEventHandler;
