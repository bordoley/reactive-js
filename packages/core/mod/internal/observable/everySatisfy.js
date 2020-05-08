import { isNone } from "../../option.js";
import { lift } from "./lift.js";
import { fromValue } from "./fromValue.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class EverySatisfySubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
        this.add(error => {
            if (isNone(error)) {
                fromValue()(true).subscribe(delegate);
            }
            else {
                delegate.dispose(error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const failedPredicate = !this.predicate(next);
        if (failedPredicate) {
            const delegate = this.delegate;
            delegate.notify(false);
            delegate.dispose();
        }
    }
}
export const everySatisfy = (predicate) => {
    const operator = (subscriber) => new EverySatisfySubscriber(subscriber, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
export const noneSatisfy = (predicate) => everySatisfy(next => !predicate(next));
