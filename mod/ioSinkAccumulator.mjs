import { pipe } from './functions.mjs';
import { AbstractDisposable, addDisposableDisposeParentOnChildError, addDisposable } from './disposable.mjs';
import { createSubject, using, takeWhile, keepType, map, reduce, onNotify, subscribe, createObservable } from './observable.mjs';
import { dispatchTo } from './dispatcher.mjs';
import { createStreamable, stream } from './streamable.mjs';

const isNotify = (ev) => ev.type === 1 /* Notify */;
class IOSinkAccumulatorImpl extends AbstractDisposable {
    constructor(reducer, initialValue, options) {
        super();
        this.isSynchronous = false;
        const subject = createSubject(options);
        addDisposableDisposeParentOnChildError(this, subject);
        const op = (events) => using(scheduler => pipe(events, takeWhile(isNotify), keepType(isNotify), map(ev => ev.data), reduce(reducer, initialValue), onNotify(dispatchTo(subject)), subscribe(scheduler)), eventsSubscription => createObservable(dispatcher => {
            dispatcher.dispatch(2 /* Pause */);
            dispatcher.dispatch(1 /* Resume */);
            addDisposable(eventsSubscription, dispatcher);
        }));
        this.streamable = createStreamable(op);
        this.subject = subject;
    }
    get observerCount() {
        return this.subject.observerCount;
    }
    observe(observer) {
        this.subject.observe(observer);
    }
    stream(scheduler, options) {
        const result = pipe(this.streamable, stream(scheduler, options));
        addDisposableDisposeParentOnChildError(this, result);
        return result;
    }
}
/** @experimental */
const createIOSinkAccumulator = (reducer, initialValue, options) => new IOSinkAccumulatorImpl(reducer, initialValue, options);

export { createIOSinkAccumulator };
