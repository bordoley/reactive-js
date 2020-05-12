import { dispose, add } from "../../disposable.js";
import { isSome } from "../../option.js";
import { AbstractDelegatingSubscriber } from "./subscriber.js";
class ConcatSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, observables, next) {
        super(delegate);
        this.observables = observables;
        this.next = next;
        add(this, error => {
            const observables = this.observables;
            const next = this.next;
            if (isSome(error)) {
                dispose(delegate, error);
            }
            else if (next < observables.length) {
                const concatSubscriber = new ConcatSubscriber(delegate, observables, next + 1);
                observables[next].subscribe(concatSubscriber);
            }
            else {
                dispose(delegate);
            }
        });
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
class ConcatObservable {
    constructor(observables) {
        this.observables = observables;
        this.isSynchronous = observables.every(obs => obs.isSynchronous);
    }
    subscribe(subscriber) {
        const observables = this.observables;
        if (observables.length > 0) {
            const concatSubscriber = new ConcatSubscriber(subscriber, observables, 1);
            observables[0].subscribe(concatSubscriber);
        }
        else {
            dispose(subscriber);
        }
    }
}
export function concat(...observables) {
    return new ConcatObservable(observables);
}
export const concatWith = (snd) => first => concat(first, snd);
