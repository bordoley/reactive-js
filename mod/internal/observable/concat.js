import { dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { everySatisfy } from "../../readonlyArray.js";
import { observe } from "./observable.js";
import { createDelegatingObserver } from "./observer.js";
const createConcatObserver = (delegate, observables, next) => {
    const observer = createDelegatingObserver(delegate);
    addOnDisposedWithError(observer, delegate);
    addOnDisposedWithoutErrorTeardown(observer, () => {
        if (next < observables.length) {
            const concatObserver = createConcatObserver(delegate, observables, next + 1);
            pipe(observables[next], observe(concatObserver));
        }
        else {
            pipe(delegate, dispose());
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
            pipe(observables[0], observe(concatObserver));
        }
        else {
            pipe(observer, dispose());
        }
    }
}
export function concat(...observables) {
    return new ConcatObservable(observables);
}
export const concatWith = (snd) => first => concat(first, snd);
