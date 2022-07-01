/// <reference types="./stream.d.ts" />
import { add, addTo } from './disposable.mjs';
import { newInstance, pipe } from './functions.mjs';
import { DisposableObservable, Subject, publish, observerCount, replay } from './observable.mjs';
import { sinkInto } from './source.mjs';

class StreamImpl extends DisposableObservable {
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
        return observerCount(this.observable);
    }
    get replay() {
        return replay(this.observable);
    }
    dispatch(req) {
        this.subject.publish(req);
    }
    sink(observer) {
        pipe(this.observable, sinkInto(observer));
    }
}
class AbstractDelegatingStream extends DisposableObservable {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    get observerCount() {
        return observerCount(this.delegate);
    }
    get replay() {
        return replay(this.delegate);
    }
    get scheduler() {
        return this.delegate.scheduler;
    }
}
const createStream = (op, scheduler, options) => newInstance(StreamImpl, op, scheduler, options);

export { AbstractDelegatingStream, createStream };
