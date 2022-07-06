/// <reference types="./__internal__.stream.d.ts" />
import { Disposable, add, addTo } from './disposable.mjs';
import { newInstance, pipe, raise } from './functions.mjs';
import { Subject, multicast, getObserverCount, getReplay, publish } from './observable.mjs';
import { sinkInto } from './reactiveContainer.mjs';

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
    get TLiftableContainerState() {
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
const createStream = (op, scheduler, options) => newInstance(StreamImpl, op, scheduler, options);

export { createStream };
