import { add } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { notifySkipFirst } from "../notifyMixins.js";
class SkipFirstObserver extends AbstractDelegatingObserver {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
        add(this, delegate);
    }
    notify(next) {
        assertObserverState(this);
        notifySkipFirst(this, next);
    }
}
export const skipFirst = (count = 1) => {
    const operator = (observer) => new SkipFirstObserver(observer, count);
    operator.isSynchronous = false;
    return observable => count > 0 ? pipe(observable, lift(operator)) : observable;
};
