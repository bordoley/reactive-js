import { dispose, add, addDisposableOrTeardown } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { lift } from "./lift.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
class WithLatestFromObserver extends AbstractDelegatingObserver {
    constructor(delegate, other, selector) {
        super(delegate);
        this.selector = selector;
        this.hasLatest = false;
        this.onNotify = (next) => {
            this.hasLatest = true;
            this.otherLatest = next;
        };
        this.selector = selector;
        const otherSubscription = pipe(other, onNotify(this.onNotify), subscribe(this), addDisposableOrTeardown(e => {
            if (isSome(e) || !this.hasLatest) {
                dispose(this, e);
            }
        }));
        add(this, otherSubscription, delegate);
    }
    notify(next) {
        assertObserverState(this);
        if (!this.isDisposed && this.hasLatest) {
            const result = this.selector(next, this.otherLatest);
            this.delegate.notify(result);
        }
    }
}
export const withLatestFrom = (other, selector) => {
    const operator = (observer) => new WithLatestFromObserver(observer, other, selector);
    operator.isSynchronous = false;
    return lift(operator);
};
