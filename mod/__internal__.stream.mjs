/// <reference types="./__internal__.stream.d.ts" />
import { getDelegate } from './__internal__.liftable.mjs';
import { getScheduler } from './dispatcher.mjs';
import { add, addTo } from './disposable.mjs';
import { newInstance, pipe } from './functions.mjs';
import { AbstractDisposableObservable, Subject, publish, getObserverCount, getReplay } from './observable.mjs';
import { sinkInto } from './reactive.mjs';

class StreamImpl extends AbstractDisposableObservable {
    constructor(op, scheduler, options) {
        super();
        this.scheduler = scheduler;
        const subject = newInstance(Subject);
        const observable = pipe(subject, op, publish(scheduler, options));
        this.subject = subject;
        this.observable = observable;
        return pipe(this, add(subject), addTo(this.observable));
    }
    get observerCount() {
        return getObserverCount(this.observable);
    }
    get replay() {
        return getReplay(this.observable);
    }
    dispatch(req) {
        this.subject.publish(req);
    }
    sink(observer) {
        pipe(this.observable, sinkInto(observer));
    }
}
class AbstractDelegatingStream extends AbstractDisposableObservable {
    constructor(delegate) {
        super();
        this.delegate = delegate;
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
