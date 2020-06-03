import { disposed, dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, addDisposableDisposeParentOnChildError, } from "../../disposable.js";
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
        addOnDisposedWithoutErrorTeardown(this, () => {
            if (this.inner.isDisposed) {
                pipe(delegate, dispose());
            }
        });
    }
    notify(next) {
        assertObserverState(this);
        pipe(this.inner, dispose());
        const inner = pipe(next, onNotify(this.onNotify), subscribe(this.delegate));
        addDisposableDisposeParentOnChildError(this.delegate, inner);
        addOnDisposedWithoutErrorTeardown(inner, () => {
            if (this.isDisposed) {
                pipe(this.delegate, dispose());
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
