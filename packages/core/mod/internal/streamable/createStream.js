import { AbstractDisposable } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { createSubject, publish, dispatch, } from "../../observable.js";
class StreamImpl extends AbstractDisposable {
    constructor(op, scheduler, replayCount) {
        super();
        this.isSynchronous = false;
        const subject = createSubject();
        const observable = pipe(subject, op, publish(scheduler, replayCount)).add(this);
        this.add(subject);
        this.dispatcher = subject;
        this.observable = observable;
    }
    get subscriberCount() {
        return this.observable.subscriberCount;
    }
    dispatch(req) {
        dispatch(this.dispatcher, req);
    }
    subscribe(subscriber) {
        this.observable.subscribe(subscriber);
    }
}
export const createStream = (op, scheduler, replayCount) => new StreamImpl(op, scheduler, replayCount);
