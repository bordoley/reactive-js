import { createSerialDisposable } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isNone, isSome, none } from "../../option.js";
import { lift } from "./lift.js";
import { never } from "./never.js";
import { fromValue } from "./fromValue.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class BufferSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, durationSelector, maxBufferSize) {
        super(delegate);
        this.durationSelector = durationSelector;
        this.maxBufferSize = maxBufferSize;
        this.durationSubscription = createSerialDisposable();
        this.buffer = [];
        this.onNotify = () => {
            this.durationSubscription.inner.dispose();
            const buffer = this.buffer;
            this.buffer = [];
            const delegate = this.delegate;
            try {
                delegate.notify(buffer);
            }
            catch (cause) {
                delegate.dispose({ cause });
            }
            if (this.isDisposed) {
                delegate.dispose();
            }
        };
        this.add(this.durationSubscription).add(error => {
            const buffer = this.buffer;
            this.buffer = [];
            if (isNone(error) && buffer.length > 0) {
                fromValue()(buffer).subscribe(delegate);
            }
            else {
                delegate.dispose(error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const buffer = this.buffer;
        const durationSubscription = this.durationSubscription;
        buffer.push(next);
        if (buffer.length === this.maxBufferSize) {
            this.onNotify();
        }
        else if (durationSubscription.inner.isDisposed) {
            durationSubscription.inner = pipe(this.durationSelector(next), onNotify(this.onNotify), subscribe(this.delegate)).add(e => {
                if (isSome(e)) {
                    this.dispose(e);
                }
            });
        }
    }
}
export function buffer(options = {}) {
    var _a, _b;
    const delay = (_a = options.duration) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
    const durationSelector = delay === Number.MAX_SAFE_INTEGER
        ? never
        : typeof delay === "number"
            ? (_) => fromValue({ delay })(none)
            : delay;
    const maxBufferSize = (_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
    const operator = (subscriber) => new BufferSubscriber(subscriber, durationSelector, maxBufferSize);
    operator.isSynchronous = delay === Number.MAX_SAFE_INTEGER;
    return lift(operator);
}
