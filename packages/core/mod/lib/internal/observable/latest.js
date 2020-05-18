import { dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none } from "../../option.js";
import { everySatisfy, map } from "../../readonlyArray.js";
import { createScheduledObservable, observe } from "./observable.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
class LatestObserver extends AbstractDelegatingObserver {
    constructor(delegate, ctx, mode) {
        super(delegate);
        this.ctx = ctx;
        this.mode = mode;
        this.ready = false;
        this.latest = none;
        addOnDisposedWithError(this, delegate);
        addOnDisposedWithoutErrorTeardown(this, () => {
            const ctx = this.ctx;
            ctx.completedCount++;
            if (ctx.completedCount === ctx.observers.length) {
                dispose(delegate);
            }
        });
    }
    notify(next) {
        assertObserverState(this);
        const ctx = this.ctx;
        this.latest = next;
        if (!this.ready) {
            ctx.readyCount++;
            this.ready = true;
        }
        const observers = ctx.observers;
        if (ctx.readyCount === observers.length) {
            const result = pipe(observers, map(observer => observer.latest));
            this.delegate.notify(result);
            if (this.mode === 2) {
                for (const sub of observers) {
                    sub.ready = false;
                    sub.latest = none;
                }
                ctx.readyCount = 0;
            }
        }
    }
}
export const latest = (observables, mode) => {
    const factory = (observer) => () => {
        const observers = [];
        const ctx = {
            completedCount: 0,
            observers,
            readyCount: 0,
        };
        for (const observable of observables) {
            const innerObserver = new LatestObserver(observer, ctx, mode);
            observers.push(innerObserver);
            observe(observable, innerObserver);
        }
    };
    return createScheduledObservable(factory, pipe(observables, everySatisfy(obs => obs.isSynchronous)));
};
