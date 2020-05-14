import { dispose, add } from "../../disposable.js";
import { isSome, none } from "../../option.js";
import { createScheduledObservable } from "./observable.js";
import { AbstractDelegatingObserver, assertObserverNotifyInContinuation, } from "./observer.js";
class LatestObserver extends AbstractDelegatingObserver {
    constructor(delegate, ctx, mode) {
        super(delegate);
        this.ctx = ctx;
        this.mode = mode;
        this.ready = false;
        this.latest = none;
        add(this, error => {
            const ctx = this.ctx;
            ctx.completedCount++;
            if (isSome(error) || ctx.completedCount === ctx.observers.length) {
                dispose(this.delegate, error);
            }
        });
    }
    notify(next) {
        assertObserverNotifyInContinuation(this);
        const ctx = this.ctx;
        this.latest = next;
        if (!this.ready) {
            ctx.readyCount++;
            this.ready = true;
        }
        const observers = ctx.observers;
        if (ctx.readyCount === observers.length) {
            const result = observers.map(sub => sub.latest);
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
            observable.observe(innerObserver);
        }
    };
    return createScheduledObservable(factory, observables.every(obs => obs.isSynchronous));
};
