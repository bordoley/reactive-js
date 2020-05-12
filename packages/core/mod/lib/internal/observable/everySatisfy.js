import { dispose, add } from "../../disposable.js";
import { compose, negate } from "../../functions.js";
import { isNone } from "../../option.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class EverySatisfySubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        add(this, error => {
            if (isNone(error)) {
                fromValue()(true).subscribe(delegate);
            }
            else {
                dispose(delegate, error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const failedPredicate = !this.predicate(next);
        if (failedPredicate) {
            const delegate = this.delegate;
            delegate.notify(false);
            dispose(delegate);
        }
    }
}
export const everySatisfy = (predicate) => {
    const operator = (subscriber) => new EverySatisfySubscriber(subscriber, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const noneSatisfy = (predicate) => everySatisfy(compose(predicate, negate));
