import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
class OnNotifyObserver extends AbstractDelegatingObserver {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
        add(this, delegate);
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
