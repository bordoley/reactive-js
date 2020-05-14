import { add, dispose } from "../../disposable.js";
import { isSome } from "../../option.js";
import { AbstractDelegatingObserver } from "./observer.js";
class MergeObserver extends AbstractDelegatingObserver {
    constructor(delegate, ctx) {
        super(delegate);
        this.ctx = ctx;
        add(this, error => {
            const ctx = this.ctx;
            ctx.completedCount++;
            if (isSome(error) || ctx.completedCount >= ctx.count) {
                dispose(delegate, error);
            }
        });
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
class MergeObservable {
    constructor(observables) {
        this.observables = observables;
        this.isSynchronous = false;
    }
    observe(observer) {
        const observables = this.observables;
        const ctx = { count: observables.length, completedCount: 0 };
        for (const observable of observables) {
            const mergeObserver = new MergeObserver(observer, ctx);
            observable.observe(mergeObserver);
        }
    }
}
export function merge(...observables) {
    return new MergeObservable(observables);
}
export const mergeWith = (snd) => fst => merge(fst, snd);
