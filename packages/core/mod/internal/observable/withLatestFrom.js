import { dispose } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { lift } from "./lift.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class WithLatestFromSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, other, selector) {
        super(delegate);
        this.selector = selector;
        this.hasLatest = false;
        this.onNotify = (next) => {
            this.hasLatest = true;
            this.otherLatest = next;
        };
        this.selector = selector;
        const otherSubscription = pipe(other, onNotify(this.onNotify), subscribe(this)).add(e => {
            if (isSome(e) || !this.hasLatest) {
                dispose(this, e);
            }
        });
        this.add(otherSubscription).add(delegate);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        if (!this.isDisposed && this.hasLatest) {
            const result = this.selector(next, this.otherLatest);
            this.delegate.notify(result);
        }
    }
}
export const withLatestFrom = (other, selector) => {
    const operator = (subscriber) => new WithLatestFromSubscriber(subscriber, other, selector);
    operator.isSynchronous = false;
    return lift(operator);
};
