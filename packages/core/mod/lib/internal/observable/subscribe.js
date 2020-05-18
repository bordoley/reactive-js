import { AbstractObserver, assertObserverState } from "./observer.js";
import { observe } from "./observable.js";
class DefaultObserver extends AbstractObserver {
    notify(_) {
        assertObserverState(this);
    }
}
export const subscribe = (scheduler) => (observable) => {
    const observer = new DefaultObserver(scheduler);
    observe(observable, observer);
    return observer;
};
