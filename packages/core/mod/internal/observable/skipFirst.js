import { pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class SkipFirstSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
        this.add(delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        if (!this.isDisposed) {
            this.count++;
            if (this.count > this.skipCount) {
                this.delegate.notify(next);
            }
        }
    }
}
export const skipFirst = (count = 1) => {
    const operator = (subscriber) => new SkipFirstSubscriber(subscriber, count);
    operator.isSynchronous = false;
    return observable => count > 0 ? pipe(observable, lift(operator)) : observable;
};
