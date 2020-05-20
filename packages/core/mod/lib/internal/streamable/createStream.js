import { AbstractDisposable, addDisposable } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { createSubject, publish, dispatch, observe, } from "../../observable.js";
class StreamImpl extends AbstractDisposable {
    constructor(op, scheduler, replayCount) {
        super();
        this.isSynchronous = false;
        const subject = createSubject();
        const observable = pipe(subject, op, publish(scheduler, replayCount));
        addDisposable(observable, this);
        addDisposable(this, subject);
        this.dispatcher = subject;
        this.observable = observable;
    }
    get observerCount() {
        return this.observable.observerCount;
    }
    dispatch(req) {
        dispatch(this.dispatcher, req);
    }
    observe(observer) {
        observe(this.observable, observer);
    }
}
export const createStream = (op, scheduler, replayCount) => new StreamImpl(op, scheduler, replayCount);
