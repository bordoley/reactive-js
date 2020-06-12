import { AbstractDisposable, addDisposable } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { createSubject, publish, observe, } from "../../observable.js";
class StreamImpl extends AbstractDisposable {
    constructor(op, scheduler, options) {
        super();
        this.isSynchronous = false;
        const subject = createSubject();
        const observable = pipe(subject, op, publish(scheduler, options));
        addDisposable(observable, this);
        addDisposable(this, subject);
        this.dispatcher = subject;
        this.observable = observable;
    }
    get observerCount() {
        return this.observable.observerCount;
    }
    dispatch(req) {
        this.dispatcher.dispatch(req);
    }
    observe(observer) {
        pipe(this.observable, observe(observer));
    }
}
export const createStream = (op, scheduler, options) => new StreamImpl(op, scheduler, options);
