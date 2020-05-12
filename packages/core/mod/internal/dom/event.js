import { dispose } from "../../disposable.js";
import { createObservable, dispatch } from "../../observable.js";
export const fromEvent = (target, eventName, selector) => createObservable(dispatcher => {
    const listener = (event) => {
        try {
            const result = selector(event);
            dispatch(dispatcher, result);
        }
        catch (cause) {
            dispose(dispatcher, { cause });
        }
    };
    target.addEventListener(eventName, listener, { passive: true });
    dispatcher.add(() => {
        target.removeEventListener(eventName, listener);
    });
});
