import { add, dispose } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { empty } from "./empty.js";
import { fromArray } from "./fromArray.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
class TakeLastObserver extends AbstractDelegatingObserver {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.last = [];
        const last = this.last;
        add(delegate, () => {
            last.length = 0;
        });
        add(this, error => {
            if (isSome(error)) {
                dispose(delegate, error);
            }
            else {
                fromArray()(last).observe(delegate);
            }
        });
    }
    notify(next) {
        assertObserverState(this);
        const last = this.last;
        last.push(next);
        if (last.length > this.maxCount) {
            last.shift();
        }
    }
}
export const takeLast = (count = 1) => {
    const operator = (observer) => new TakeLastObserver(observer, count);
    operator.isSynchronous = false;
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
