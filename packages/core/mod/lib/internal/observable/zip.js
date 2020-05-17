import { AbstractDisposable, dispose, add, } from "../../disposable.js";
import { current } from "../../enumerable.js";
import { returns } from "../../functions.js";
import { none, isSome, isNone } from "../../option.js";
import { runContinuation } from "../../scheduler.js";
import { zipEnumerators } from "../enumerable/zip.js";
import { YieldError } from "../scheduler/interfaces.js";
import { fromEnumerator } from "./fromEnumerable.js";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.js";
import { using } from "./using.js";
class EnumeratorObserver extends AbstractDisposable {
    constructor() {
        super(...arguments);
        this.continuations = [];
        this.hasCurrent = false;
        this.inContinuation = false;
        this.now = 0;
    }
    move() {
        const continuations = this.continuations;
        this.hasCurrent = false;
        this.current = none;
        while (!this.hasCurrent) {
            const continuation = continuations.shift();
            if (isNone(continuation) || continuation.isDisposed) {
                break;
            }
            this.inContinuation = true;
            runContinuation(this, continuation);
            this.inContinuation = false;
            const error = this.error;
            if (isSome(error)) {
                const { cause } = error;
                throw cause;
            }
        }
        return this.hasCurrent;
    }
    notify(next) {
        assertObserverState(this);
        this.current = next;
        this.hasCurrent = true;
    }
    schedule(continuation, { delay } = { delay: 0 }) {
        add(this, continuation);
        if (!continuation.isDisposed && delay === 0) {
            this.continuations.push(continuation);
        }
        else {
            dispose(continuation);
        }
    }
    yield() {
        throw new YieldError(0);
    }
}
const subscribeInteractive = (obs) => {
    const observer = new EnumeratorObserver();
    obs.observe(observer);
    return observer;
};
const shouldEmit = (enumerators) => {
    for (const enumerator of enumerators) {
        if (!enumerator.hasCurrent) {
            return false;
        }
    }
    return true;
};
const shouldComplete = (enumerators) => {
    for (const enumerator of enumerators) {
        enumerator.move();
        if (enumerator.isDisposed && !enumerator.hasCurrent) {
            return true;
        }
    }
    return false;
};
class ZipObserver extends AbstractDelegatingObserver {
    constructor(delegate, enumerators) {
        super(delegate);
        this.enumerators = enumerators;
        this.buffer = [];
        this.hasCurrent = false;
        add(delegate, () => {
            this.hasCurrent = false;
            this.current = none;
            this.buffer.length = 0;
        });
        add(this, error => {
            if (isSome(error) || (this.buffer.length === 0 && !this.hasCurrent)) {
                dispose(delegate, error);
            }
        });
    }
    move() {
        const buffer = this.buffer;
        if (buffer.length > 0) {
            const next = buffer.shift();
            this.hasCurrent = true;
            this.current = next;
            return true;
        }
        else {
            this.hasCurrent = false;
            this.current = none;
            return false;
        }
    }
    notify(next) {
        assertObserverState(this);
        const enumerators = this.enumerators;
        if (!this.isDisposed) {
            if (this.hasCurrent) {
                this.buffer.push(next);
            }
            else {
                this.hasCurrent = true;
                this.current = next;
            }
            if (shouldEmit(enumerators)) {
                const next = enumerators.map(current);
                const shouldCompleteResult = shouldComplete(enumerators);
                this.delegate.notify(next);
                if (shouldCompleteResult) {
                    this.hasCurrent = false;
                    this.current = none;
                    this.buffer.length = 0;
                    dispose(this);
                }
            }
        }
    }
}
class ZipObservable {
    constructor(observables) {
        this.observables = observables;
        this.isSynchronous = observables.every(obs => obs.isSynchronous);
    }
    observe(observer) {
        const observables = this.observables;
        const count = observables.length;
        if (this.isSynchronous) {
            using(_ => this.observables.map(subscribeInteractive), (...enumerators) => fromEnumerator()(returns(zipEnumerators(enumerators)))).observe(observer);
        }
        else {
            const enumerators = [];
            for (let index = 0; index < count; index++) {
                const observable = observables[index];
                if (observable.isSynchronous) {
                    const enumerator = subscribeInteractive(observable);
                    enumerator.move();
                    enumerators.push(enumerator);
                }
                else {
                    const innerObserver = new ZipObserver(observer, enumerators);
                    observable.observe(innerObserver);
                    enumerators.push(innerObserver);
                }
            }
        }
    }
}
export function zip(...observables) {
    return new ZipObservable(observables);
}
export const zipWith = (snd) => fst => zip(fst, snd);
