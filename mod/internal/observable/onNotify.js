import { lift } from "./lift.js";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState, } from "./observer.js";
class OnNotifyObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
    }
    notify(next) {
        assertObserverState(this);
        this.onNotify(next);
        this.delegate.notify(next);
    }
}
export function onNotify(onNotify) {
    const operator = (observer) => new OnNotifyObserver(observer, onNotify);
    operator.isSynchronous = true;
    return lift(operator);
}
