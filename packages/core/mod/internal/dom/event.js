import { createObservable } from "../../observable.js";
export const fromEvent = (target, eventName, selector) => createObservable(subscriber => {
    const listener = (event) => {
        try {
            const result = selector(event);
            subscriber.dispatch(result);
        }
        catch (cause) {
            subscriber.dispose({ cause });
        }
    };
    target.addEventListener(eventName, listener, { passive: true });
    subscriber.add(() => {
        target.removeEventListener(eventName, listener);
    });
});
