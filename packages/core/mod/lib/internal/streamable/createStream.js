import { add, AbstractDisposable, addDisposableOrTeardown, } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { createSubject, publish, dispatch, } from "../../observable.js";
class StreamImpl extends AbstractDisposable {
    constructor(op, scheduler, replayCount) {
        super();
        this.isSynchronous = false;
        const subject = createSubject();
        const observable = pipe(subject, op, publish(scheduler, replayCount), addDisposableOrTeardown(this));
        add(this, subject);
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
        this.observable.observe(observer);
    }
}
export const createStream = (op, scheduler, replayCount) => new StreamImpl(op, scheduler, replayCount);
