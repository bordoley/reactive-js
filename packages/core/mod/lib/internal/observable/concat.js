import { dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, } from "../../disposable.js";
import { observe } from "./observable.js";
import { createDelegatingObserver } from "./observer.js";
import { everySatisfy } from "../../readonlyArray.js";
import { pipe } from "../../functions.js";
const createConcatObserver = (delegate, observables, next) => {
    const observer = createDelegatingObserver(delegate);
    addOnDisposedWithError(observer, delegate);
    addOnDisposedWithoutErrorTeardown(observer, () => {
        if (next < observables.length) {
            const concatObserver = createConcatObserver(delegate, observables, next + 1);
            observe(observables[next], concatObserver);
        }
        else {
            dispose(delegate);
        }
    });
    return observer;
};
class ConcatObservable {
    constructor(observables) {
        this.observables = observables;
        this.isSynchronous = pipe(observables, everySatisfy(obs => obs.isSynchronous));
    }
    observe(observer) {
        const observables = this.observables;
        if (observables.length > 0) {
            const concatObserver = createConcatObserver(observer, observables, 1);
            observe(observables[0], concatObserver);
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
