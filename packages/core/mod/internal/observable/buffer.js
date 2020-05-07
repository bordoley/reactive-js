import { createSerialDisposable } from "../../disposable.js";
import { isNone, isSome, none } from "../../option.js";
import { pipe } from "../../functions.js";
import { ofValue } from "./ofValue.js";
import { lift } from "./lift.js";
import { never } from "./never.js";
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
                ofValue(buffer).subscribe(delegate);
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
    const duration = options.duration ?? Number.MAX_SAFE_INTEGER;
    const durationSelector = duration === Number.MAX_SAFE_INTEGER
        ? never
        : typeof duration === "number"
            ? (_) => ofValue(none, duration)
            : duration;
    const maxBufferSize = options.maxBufferSize ?? Number.MAX_SAFE_INTEGER;
    const operator = (subscriber) => new BufferSubscriber(subscriber, durationSelector, maxBufferSize);
    operator.isSynchronous = duration === Number.MAX_SAFE_INTEGER;
    return lift(operator);
}
