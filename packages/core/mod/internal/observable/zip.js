import { AbstractDisposable } from "../../disposable.js";
import { none, isSome, isNone } from "../../option.js";
import { alwaysTrue } from "../../functions.js";
import { AbstractProducer } from "./producer.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class EnumeratorSubscriber extends AbstractDisposable {
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
            const result = continuation.run(alwaysTrue);
            this.inContinuation = false;
            if (!continuation.isDisposed && result <= 0) {
                continuations.push(continuation);
            }
            else {
                continuation.dispose();
            }
            const error = this.error;
            if (isSome(error)) {
                const { cause } = error;
                throw cause;
            }
        }
        return this.hasCurrent;
    }
    notify(next) {
        assertSubscriberNotifyInContinuation(this);
        this.current = next;
        this.hasCurrent = true;
    }
    schedule(continuation, delay = 0) {
        this.add(continuation);
        if (!continuation.isDisposed && delay === 0) {
            this.continuations.push(continuation);
        }
        else {
            continuation.dispose();
        }
    }
}
const subscribeInteractive = (obs) => {
    const subscriber = new EnumeratorSubscriber();
    obs.subscribe(subscriber);
    return subscriber;
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
const getCurrent = (enumerator) => {
    return enumerator.current;
};
class ZipSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, enumerators, selector) {
        super(delegate);
        this.enumerators = enumerators;
        this.selector = selector;
        this.buffer = [];
        this.hasCurrent = false;
        delegate.add(() => {
            this.hasCurrent = false;
            this.current = none;
            this.buffer.length = 0;
        });
        this.add(error => {
            if (isSome(error) || (this.buffer.length === 0 && !this.hasCurrent)) {
                delegate.dispose(error);
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
        assertSubscriberNotifyInContinuation(this);
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
                const next = this.selector(...enumerators.map(getCurrent));
                const shouldCompleteResult = shouldComplete(enumerators);
                this.delegate.notify(next);
                if (shouldCompleteResult) {
                    this.hasCurrent = false;
                    this.current = none;
                    this.buffer.length = 0;
                    this.dispose();
                }
            }
        }
    }
}
class ZipProducer extends AbstractProducer {
    constructor(subscriber, enumerators, selector) {
        super(subscriber);
        this.enumerators = enumerators;
        this.selector = selector;
        this.hasCurrent = false;
    }
    produce(shouldYield) {
        const enumerators = this.enumerators;
        const selector = this.selector;
        if (isSome(shouldYield)) {
            let isDisposed = this.isDisposed;
            let shouldEmitNext = shouldEmit(enumerators);
            while (shouldEmitNext && !isDisposed) {
                const next = selector(...enumerators.map(getCurrent));
                this.notify(next);
                isDisposed = this.isDisposed;
                for (const buffer of enumerators) {
                    buffer.move();
                }
                shouldEmitNext = shouldEmit(enumerators);
                if (shouldEmitNext && !isDisposed && shouldYield()) {
                    return 0;
                }
            }
        }
        else {
            while (shouldEmit(enumerators) && !this.isDisposed) {
                const next = selector(...enumerators.map(getCurrent));
                for (const enumerator of enumerators) {
                    enumerator.move();
                }
                this.notify(next);
            }
        }
        return -1;
    }
}
class ZipObservable {
    constructor(observables, selector) {
        this.observables = observables;
        this.selector = selector;
        this.isSynchronous = observables.every(obs => obs.isSynchronous);
    }
    subscribe(subscriber) {
        const observables = this.observables;
        const count = observables.length;
        if (this.isSynchronous) {
            const enumerators = observables.map(obs => subscribeInteractive(obs));
            for (const enumerator of enumerators) {
                enumerator.move();
            }
            subscriber.schedule(new ZipProducer(subscriber, enumerators, this.selector));
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
                    const innerSubscriber = new ZipSubscriber(subscriber, enumerators, this.selector);
                    observable.subscribe(innerSubscriber);
                    enumerators.push(innerSubscriber);
                }
            }
        }
    }
}
export function zip(observables, selector) {
    return new ZipObservable(observables, selector);
}
