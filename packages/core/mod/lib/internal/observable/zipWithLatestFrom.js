import { dispose, add, addDisposableOrTeardown } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { lift } from "./lift.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { AbstractObserver, assertObserverState, } from "./observer.js";
const notifyDelegate = (observer) => {
    if (observer.queue.length > 0 && observer.hasLatest) {
        observer.hasLatest = false;
        const next = observer.queue.shift();
        const result = observer.selector(next, observer.otherLatest);
        observer.delegate.notify(result);
    }
};
class ZipWithLatestFromObserver extends AbstractObserver {
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
                dispose(this.delegate);
            }
        };
        this.queue = [];
        this.selector = selector;
        const otherSubscription = pipe(other, onNotify(this.onNotify), subscribe(delegate), addDisposableOrTeardown(e => {
            if (isSome(e)) {
                dispose(delegate, e);
            }
            else if (this.isDisposed) {
                dispose(delegate);
            }
        }));
        add(this, e => {
            if (isSome(e)) {
                dispose(delegate, e);
            }
            else if (otherSubscription.isDisposed) {
                dispose(delegate);
            }
        });
        add(delegate, otherSubscription, this);
    }
    notify(next) {
        assertObserverState(this);
        this.queue.push(next);
        notifyDelegate(this);
    }
}
export const zipWithLatestFrom = (other, selector) => {
    const operator = (observer) => new ZipWithLatestFromObserver(observer, other, selector);
    operator.isSynchronous = false;
    return lift(operator);
};
