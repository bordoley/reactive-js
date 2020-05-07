import { isSome } from "../../option.js";
import { createScheduledObservable } from "./observable.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class CombineLatestSubscriber extends AbstractDelegatingSubscriber {
    constructor(ctx, index) {
        super(ctx.subscriber);
        this.ctx = ctx;
        this.index = index;
        this.ready = false;
        this.add(error => {
            const ctx = this.ctx;
            ctx.completedCount++;
            if (isSome(error) || ctx.completedCount === ctx.totalCount) {
                this.delegate.dispose(error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const ctx = this.ctx;
        const latest = ctx.latest;
        latest[this.index] = next;
        if (!this.ready) {
            ctx.readyCount++;
            this.ready = true;
        }
        if (ctx.readyCount === ctx.totalCount) {
            const result = ctx.selector(...latest);
            this.delegate.notify(result);
        }
    }
}
export function combineLatest(observables, selector) {
    const factory = (subscriber) => {
        return () => {
            const totalCount = observables.length;
            const ctx = {
                completedCount: 0,
                latest: new Array(totalCount),
                readyCount: 0,
                selector,
                subscriber,
                totalCount,
            };
            for (let index = 0; index < totalCount; index++) {
                const innerSubscriber = new CombineLatestSubscriber(ctx, index);
                observables[index].subscribe(innerSubscriber);
            }
        };
    };
    return createScheduledObservable(factory, observables.every(obs => obs.isSynchronous));
}
