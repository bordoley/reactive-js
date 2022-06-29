/// <reference types="./asyncEnumerator.d.ts" />
import { dispatch } from './dispatcher.mjs';
import { add, addTo } from './disposable.mjs';
import { pipe } from './functions.mjs';
import { AbstractDisposableLiftable } from './liftable.mjs';
import { createSubject, publish, observerCount, replay } from './observable.mjs';
import { sinkInto } from './source.mjs';

class AsyncEnumerator extends AbstractDisposableLiftable {
    constructor(
    //FIXME: Needs to tag ObservableOperator so only operators that are unary
    // maybe provided as an argument.
    op, scheduler, replay) {
        super();
        this.op = op;
        this.scheduler = scheduler;
        const subject = createSubject();
        const observable = pipe(subject, op, publish(scheduler, { replay }));
        this.dispatcher = subject;
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
        pipe(this.dispatcher, dispatch(req));
    }
    sink(observer) {
        pipe(this.observable, sinkInto(observer));
    }
}

export { AsyncEnumerator };
