import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { notifyKeepType } from "../notifyMixins.js";
class KeepTypeObserver extends AbstractDelegatingObserver {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        add(this, delegate);
    }
    notify(next) {
        assertObserverState(this);
        notifyKeepType(this, next);
    }
}
export const keepType = (predicate) => {
    const operator = (observer) => new KeepTypeObserver(observer, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const keep = (predicate) => keepType(predicate);
