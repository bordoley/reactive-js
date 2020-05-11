import { createObservable } from "../../observable.js";
import { dispose } from "../../disposable.js";
export const fromEvent = (target, eventName, selector) => createObservable(dispatcher => {
    const listener = (event) => {
        try {
            const result = selector(event);
            dispatcher.dispatch(result);
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
