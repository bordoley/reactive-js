import { dispose, add } from "../../disposable.js";
import { isSome } from "../../option.js";
import { AbstractDelegatingObserver } from "./observer.js";
class ConcatObserver extends AbstractDelegatingObserver {
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
                const concatObserver = new ConcatObserver(delegate, observables, next + 1);
                observables[next].observe(concatObserver);
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
    observe(observer) {
        const observables = this.observables;
        if (observables.length > 0) {
            const concatObserver = new ConcatObserver(observer, observables, 1);
            observables[0].observe(concatObserver);
        }
        else {
            dispose(observer);
        }
    }
}
export function concat(...observables) {
    return new ConcatObservable(observables);
}
export const concatWith = (snd) => first => concat(first, snd);
