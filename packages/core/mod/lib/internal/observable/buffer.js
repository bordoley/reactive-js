import { disposed, disposeOnError, dispose, add, addDisposableOrTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isNone, none } from "../../option.js";
import { fromValue } from "./fromValue.js";
import { lift } from "./lift.js";
import { never } from "./never.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
class BufferObserver extends AbstractDelegatingObserver {
    constructor(delegate, durationFunction, maxBufferSize) {
        super(delegate);
        this.durationFunction = durationFunction;
        this.maxBufferSize = maxBufferSize;
        this.durationSubscription = disposed;
        this.buffer = [];
        this.onNotify = () => {
            dispose(this.durationSubscription);
            this.durationSubscription = disposed;
            const buffer = this.buffer;
            this.buffer = [];
            this.delegate.notify(buffer);
        };
        add(this, this.durationSubscription, error => {
            const buffer = this.buffer;
            this.buffer = [];
            if (isNone(error) && buffer.length > 0) {
                fromValue()(buffer).observe(delegate);
            }
            else {
                dispose(delegate, error);
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
        else if (this.durationSubscription.isDisposed) {
            this.durationSubscription = pipe(this.durationFunction(next), onNotify(this.onNotify), subscribe(this.delegate), addDisposableOrTeardown(disposeOnError(this)));
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
