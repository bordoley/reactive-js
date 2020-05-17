import { dispose, addDisposableOrTeardown } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { createDelegatingObserver } from "./observer.js";
const createMergeObserver = (delegate, count, ctx) => pipe(delegate, createDelegatingObserver, addDisposableOrTeardown(error => {
    ctx.completedCount++;
    if (isSome(error) || ctx.completedCount >= count) {
        dispose(delegate, error);
    }
}));
class MergeObservable {
    constructor(observables) {
        this.observables = observables;
        this.isSynchronous = false;
    }
    observe(observer) {
        const observables = this.observables;
        const count = observables.length;
        const ctx = { completedCount: 0 };
        for (const observable of observables) {
            const mergeObserver = createMergeObserver(observer, count, ctx);
            observable.observe(mergeObserver);
        }
    }
}
export function merge(...observables) {
    return new MergeObservable(observables);
}
export const mergeWith = (snd) => fst => merge(fst, snd);
