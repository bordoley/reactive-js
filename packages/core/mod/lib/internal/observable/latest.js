import { dispose, add } from "../../disposable.js";
import { isSome, none } from "../../option.js";
import { createScheduledObservable } from "./observable.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class LatestSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, ctx, mode) {
        super(delegate);
        this.ctx = ctx;
        this.mode = mode;
        this.ready = false;
        this.latest = none;
        add(this, error => {
            const ctx = this.ctx;
            ctx.completedCount++;
            if (isSome(error) || ctx.completedCount === ctx.subscribers.length) {
                dispose(this.delegate, error);
            }
        });
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        const ctx = this.ctx;
        this.latest = next;
        if (!this.ready) {
            ctx.readyCount++;
            this.ready = true;
        }
        const subscribers = ctx.subscribers;
        if (ctx.readyCount === subscribers.length) {
            const latest = subscribers.map(sub => sub.latest);
            const result = ctx.selector(...latest);
            this.delegate.notify(result);
            if (this.mode === 2) {
                for (const sub of subscribers) {
                    sub.ready = false;
                    sub.latest = none;
                }
                ctx.readyCount = 0;
            }
        }
    }
}
export const latest = (observables, mode, selector) => {
    const factory = (subscriber) => () => {
        const subscribers = [];
        const ctx = {
            completedCount: 0,
            subscribers,
            readyCount: 0,
            selector,
        };
        for (const observable of observables) {
            const innerSubscriber = new LatestSubscriber(subscriber, ctx, mode);
            subscribers.push(innerSubscriber);
            observable.subscribe(innerSubscriber);
        }
    };
    return createScheduledObservable(factory, observables.every(obs => obs.isSynchronous));
};
