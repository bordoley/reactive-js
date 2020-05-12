import { dispose } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { empty } from "./empty.js";
import { fromArray } from "./fromArray.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class TakeLastSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.last = [];
        const last = this.last;
        delegate.add(() => {
            last.length = 0;
        });
        this.add(error => {
            if (isSome(error)) {
                dispose(delegate, error);
            }
            else {
                fromArray()(last).subscribe(delegate);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        if (!this.isDisposed) {
            const last = this.last;
            last.push(next);
            if (last.length > this.maxCount) {
                last.shift();
            }
        }
    }
}
export const takeLast = (count = 1) => {
    const operator = (subscriber) => new TakeLastSubscriber(subscriber, count);
    operator.isSynchronous = false;
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
