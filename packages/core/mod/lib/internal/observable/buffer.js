import { createSerialDisposable, disposed, dispose, addDisposableDisposeParentOnChildError, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none } from "../../option.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { never } from "./never.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { observeWith } from "./observable.js";
class BufferObserver extends AbstractDelegatingObserver {
    constructor(delegate, durationFunction, maxBufferSize) {
        super(delegate);
        this.durationFunction = durationFunction;
        this.maxBufferSize = maxBufferSize;
        this.durationSubscription = createSerialDisposable();
        this.buffer = [];
        this.onNotify = () => {
            this.durationSubscription.inner = disposed;
            const buffer = this.buffer;
            this.buffer = [];
            this.delegate.notify(buffer);
        };
        addDisposableDisposeParentOnChildError(this, this.durationSubscription);
        addOnDisposedWithError(this, delegate);
        addOnDisposedWithoutErrorTeardown(this, () => {
            const buffer = this.buffer;
            this.buffer = [];
            if (buffer.length > 0) {
                pipe(buffer, fromValue(), observeWith(delegate));
            }
            else {
                dispose(delegate);
            }
        });
    }
    notify(next) {
        assertObserverState(this);
        const buffer = this.buffer;
        buffer.push(next);
        if (buffer.length === this.maxBufferSize) {
            this.onNotify();
        }
        else if (this.durationSubscription.inner.isDisposed) {
            this.durationSubscription.inner = pipe(this.durationFunction(next), onNotify(this.onNotify), subscribe(this.delegate));
        }
    }
}
export function buffer(options = {}) {
    var _a, _b;
    const delay = (_a = options.duration) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
    const durationFunction = delay === Number.MAX_SAFE_INTEGER
        ? never
        : typeof delay === "number"
            ? (_) => fromValue({ delay })(none)
            : delay;
    const maxBufferSize = (_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
    const operator = (observer) => new BufferObserver(observer, durationFunction, maxBufferSize);
    operator.isSynchronous = delay === Number.MAX_SAFE_INTEGER;
    return lift(operator);
}
