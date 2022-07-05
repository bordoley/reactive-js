/// <reference types="./__internal__.stream.d.ts" />
import { getDelegate } from './__internal__.liftable.mjs';
import { getScheduler } from './dispatcher.mjs';
import { Disposable, add, addTo } from './disposable.mjs';
import { newInstance, pipe, raise } from './functions.mjs';
import { Subject, multicast, getObserverCount, getReplay, publish } from './observable.mjs';
import { sinkInto } from './reactive.mjs';

class StreamImpl extends Disposable {
    constructor(op, scheduler, options) {
        super();
        this.scheduler = scheduler;
        const subject = newInstance(Subject);
        const observable = pipe(subject, op, multicast(scheduler, options));
        this.subject = subject;
        this.observable = observable;
        return pipe(this, add(subject), addTo(this.observable));
    }
    get T() {
        return raise();
    }
    get TContainerOf() {
        return this;
    }
    get TLiftableState() {
        return raise();
    }
    get observerCount() {
        return getObserverCount(this.observable);
    }
    get replay() {
        return getReplay(this.observable);
    }
    dispatch(req) {
        pipe(this.subject, publish(req));
    }
    sink(observer) {
        pipe(this.observable, sinkInto(observer));
    }
}
class AbstractDelegatingStream extends Disposable {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    get T() {
        return raise();
    }
    get TContainerOf() {
        return raise();
    }
    get TLiftableState() {
        return raise();
    }
    get observerCount() {
        return pipe(this, getDelegate, getObserverCount);
    }
    get replay() {
        return pipe(this, getDelegate, getReplay);
    }
    get scheduler() {
        return pipe(this, getDelegate, getScheduler);
    }
}
const createStream = (op, scheduler, options) => newInstance(StreamImpl, op, scheduler, options);

export { AbstractDelegatingStream, createStream };
