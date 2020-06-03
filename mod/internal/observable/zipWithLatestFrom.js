import { dispose, addOnDisposedWithoutErrorTeardown, addDisposableDisposeParentOnChildError, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { AbstractObserver, assertObserverState } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
const notifyDelegate = (observer) => {
    if (observer.queue.length > 0 && observer.hasLatest) {
        observer.hasLatest = false;
        const next = observer.queue.shift();
        const result = observer.selector(next, observer.otherLatest);
        observer.delegate.notify(result);
    }
};
const onOtherNotify = (self) => (otherLatest) => {
    self.hasLatest = true;
    self.otherLatest = otherLatest;
    notifyDelegate(self);
    if (self.isDisposed && self.queue.length === 0) {
        pipe(self.delegate, dispose());
    }
};
class ZipWithLatestFromObserver extends AbstractObserver {
    constructor(delegate, other, selector) {
        super(delegate);
        this.selector = selector;
        this.hasLatest = false;
        this.queue = [];
        this.selector = selector;
        const otherSubscription = pipe(other, onNotify(onOtherNotify(this)), subscribe(delegate));
        const disposeDelegate = () => {
            if (this.isDisposed && otherSubscription.isDisposed) {
                pipe(delegate, dispose());
            }
        };
        addDisposableDisposeParentOnChildError(delegate, this);
        addDisposableDisposeParentOnChildError(delegate, otherSubscription);
        addOnDisposedWithoutErrorTeardown(this, disposeDelegate);
        addOnDisposedWithoutErrorTeardown(otherSubscription, disposeDelegate);
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
