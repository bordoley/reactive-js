import { disposed, dispose, addOnDisposedWithError, addOnDisposedWithErrorTeardown, addOnDisposedWithoutErrorTeardown, addDisposableDisposeParentOnChildError, } from "../../disposable.js";
import { compose, pipe } from "../../functions.js";
import { lift } from "./lift.js";
import { map } from "./map.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
class SwitchObserver extends AbstractDelegatingObserver {
    constructor(delegate) {
        super(delegate);
        this.inner = disposed;
        this.onNotify = (next) => {
            this.delegate.notify(next);
        };
        addOnDisposedWithError(this, delegate);
        addOnDisposedWithErrorTeardown(this, () => {
            if (this.inner.isDisposed) {
                dispose(delegate);
            }
        });
    }
    notify(next) {
        assertObserverState(this);
        dispose(this.inner);
        const inner = pipe(next, onNotify(this.onNotify), subscribe(this.delegate));
        addDisposableDisposeParentOnChildError(this.delegate, inner);
        addOnDisposedWithoutErrorTeardown(inner, () => {
            if (this.isDisposed) {
                dispose(this.delegate);
            }
        });
        this.inner = inner;
    }
}
const operator = (observer) => new SwitchObserver(observer);
operator.isSynchronous = false;
const switchAllInstance = lift(operator);
export const switchAll = () => switchAllInstance;
export const switchMap = (mapper) => compose(map(mapper), switchAll());
