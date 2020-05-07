import { pipe } from "../../functions.js";
import { empty } from "./empty.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class TakeFirstSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
        this.add(delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        if (!this.isDisposed) {
            this.count++;
            this.delegate.notify(next);
            if (this.count >= this.maxCount) {
                this.dispose();
            }
        }
    }
}
export const takeFirst = (count = 1) => {
    const operator = (subscriber) => new TakeFirstSubscriber(subscriber, count);
    operator.isSynchronous = true;
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
