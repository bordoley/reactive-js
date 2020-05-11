import { isSome } from "../../option.js";
import { AbstractDelegatingSubscriber } from "./subscriber.js";
import { dispose } from "../../disposable.js";
class MergeSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, ctx) {
        super(delegate);
        this.ctx = ctx;
        this.add(error => {
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
    subscribe(subscriber) {
        const observables = this.observables;
        const ctx = { count: observables.length, completedCount: 0 };
        for (const observable of observables) {
            const mergeSubscriber = new MergeSubscriber(subscriber, ctx);
            observable.subscribe(mergeSubscriber);
        }
    }
}
export function merge(...observables) {
    return new MergeObservable(observables);
}
export const mergeWith = (snd) => fst => merge(fst, snd);
