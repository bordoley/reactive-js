import { AbstractObserver, assertObserverState, } from "./observer.js";
class DefaultObserver extends AbstractObserver {
    notify(_) {
        assertObserverState(this);
    }
}
export const subscribe = (scheduler) => (observable) => {
    const observer = new DefaultObserver(scheduler);
    observable.observe(observer);
    return observer;
};
