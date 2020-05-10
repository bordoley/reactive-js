import { AbstractSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
import { pipe } from "../../functions.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { isSome } from "../../option.js";
import { lift } from "./lift.js";
const notifyDelegate = (subscriber) => {
    if (subscriber.queue.length > 0 && subscriber.hasLatest) {
        subscriber.hasLatest = false;
        const next = subscriber.queue.shift();
        const result = subscriber.selector(next, subscriber.otherLatest);
        subscriber.delegate.notify(result);
    }
};
class ZipWithLatestFromSubscriber extends AbstractSubscriber {
    constructor(delegate, other, selector) {
        super(delegate);
        this.delegate = delegate;
        this.selector = selector;
        this.hasLatest = false;
        this.onNotify = (otherLatest) => {
            this.hasLatest = true;
            this.otherLatest = otherLatest;
            notifyDelegate(this);
            if (this.isDisposed && this.queue.length === 0) {
                this.delegate.dispose();
            }
        };
        this.queue = [];
        this.selector = selector;
        const otherSubscription = pipe(other, onNotify(this.onNotify), subscribe(delegate)).add(e => {
            if (isSome(e)) {
                delegate.dispose(e);
            }
            else if (this.isDisposed) {
                delegate.dispose();
            }
        });
        this.add(e => {
            if (isSome(e)) {
                delegate.dispose(e);
            }
            else if (otherSubscription.isDisposed) {
                delegate.dispose();
            }
        });
        delegate.add(otherSubscription).add(this);
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        this.queue.push(next);
        notifyDelegate(this);
    }
}
export const zipWithLatestFrom = (other, selector) => {
    const operator = (subscriber) => new ZipWithLatestFromSubscriber(subscriber, other, selector);
    operator.isSynchronous = false;
    return lift(operator);
};
