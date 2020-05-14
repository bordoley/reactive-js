import { AbstractObserver, assertObserverNotifyInContinuation, } from "./observer.js";
class DefaultObserver extends AbstractObserver {
    notify(_) {
        assertObserverNotifyInContinuation(this);
    }
}
export const subscribe = (scheduler) => (observable) => {
    const observer = new DefaultObserver(scheduler);
    observable.observe(observer);
    return observer;
};
