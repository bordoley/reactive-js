import { add } from "../../disposable.js";
import { strictEquality } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { notifyDistinctUntilChanged } from "../notifyMixins.js";
class DistinctUntilChangedObserver extends AbstractDelegatingObserver {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.hasValue = false;
        add(this, delegate);
    }
    notify(next) {
        assertObserverState(this);
        notifyDistinctUntilChanged(this, next);
    }
}
export const distinctUntilChanged = (equality = strictEquality) => {
    const operator = (observer) => new DistinctUntilChangedObserver(observer, equality);
    operator.isSynchronous = true;
    return lift(operator);
};
