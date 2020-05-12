import { add, disposed, dispose, addDisposableOrTeardown, } from "../../disposable.js";
import { compose, pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { lift } from "./lift.js";
import { map } from "./map.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class SwitchSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate) {
        super(delegate);
        this.inner = disposed;
        this.onNotify = (next) => {
            this.delegate.notify(next);
        };
        add(this, error => {
            if (this.inner.isDisposed || isSome(error)) {
                dispose(this.delegate, error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        dispose(this.inner);
        const inner = pipe(next, onNotify(this.onNotify), subscribe(this.delegate), addDisposableOrTeardown(e => {
            if (isSome(e) || this.isDisposed) {
                dispose(this.delegate, e);
            }
        }));
        add(this.delegate, inner);
        this.inner = inner;
    }
}
const operator = (subscriber) => new SwitchSubscriber(subscriber);
operator.isSynchronous = false;
const switchAllInstance = lift(operator);
export const switchAll = () => switchAllInstance;
export const switchMap = (mapper) => compose(map(mapper), switchAll());
