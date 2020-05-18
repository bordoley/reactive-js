import { dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown } from "../../disposable.js";
import { createDelegatingObserver } from "./observer.js";
const createMergeObserver = (delegate, count, ctx) => {
    const observer = createDelegatingObserver(delegate);
    addOnDisposedWithError(observer, delegate);
    addOnDisposedWithoutErrorTeardown(observer, () => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            dispose(delegate);
        }
    });
    return observer;
};
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
