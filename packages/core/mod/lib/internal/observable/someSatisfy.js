import { add, dispose } from "../../disposable.js";
import { strictEquality, isEqualTo, } from "../../functions.js";
import { isNone } from "../../option.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState, } from "./observer.js";
class SomeSatisfyObserver extends AbstractDelegatingObserver {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        add(this, error => {
            if (isNone(error)) {
                fromValue()(false).observe(delegate);
            }
            else {
                dispose(delegate, error);
            }
        });
    }
    notify(next) {
        assertObserverState(this);
        const passesPredicate = this.predicate(next);
        if (passesPredicate) {
            const delegate = this.delegate;
            delegate.notify(true);
            dispose(delegate);
        }
    }
}
export const someSatisfy = (predicate) => {
    const operator = (observer) => new SomeSatisfyObserver(observer, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const contains = (value, equality = strictEquality) => someSatisfy(isEqualTo(value, equality));
