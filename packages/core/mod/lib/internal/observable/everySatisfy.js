import { dispose, add } from "../../disposable.js";
import { compose, negate } from "../../functions.js";
import { isNone } from "../../option.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState, } from "./observer.js";
class EverySatisfyObserver extends AbstractDelegatingObserver {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        add(this, error => {
            if (isNone(error)) {
                fromValue()(true).observe(delegate);
            }
            else {
                dispose(delegate, error);
            }
        });
    }
    notify(next) {
        assertObserverState(this);
        const failedPredicate = !this.predicate(next);
        if (failedPredicate) {
            const delegate = this.delegate;
            delegate.notify(false);
            dispose(delegate);
        }
    }
}
export const everySatisfy = (predicate) => {
    const operator = (observer) => new EverySatisfyObserver(observer, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const noneSatisfy = (predicate) => everySatisfy(compose(predicate, negate));
