import { addDisposable, AbstractDisposable, addDisposableDisposeParentOnChildError } from "../disposable.js";
import { pipe } from "../functions.js";
import { using, takeWhile, keepType, map as mapObs, onNotify, subscribe, createObservable, dispatch, reduce, createSubject, dispatchTo, } from "../observable.js";
import { stream, createStreamable } from "../streamable.js";
const isNotify = (ev) => ev.type === 1;
class IOSinkAccumulatorImpl extends AbstractDisposable {
    constructor(reducer, initialValue, replay) {
        super();
        this.isSynchronous = false;
        const subject = createSubject(replay);
        addDisposableDisposeParentOnChildError(this, subject);
        const op = (events) => using(scheduler => pipe(events, takeWhile(isNotify), keepType(isNotify), mapObs(ev => ev.data), reduce(reducer, initialValue), onNotify(dispatchTo(subject)), subscribe(scheduler)), eventsSubscription => createObservable(dispatcher => {
            dispatch(dispatcher, 2);
            dispatch(dispatcher, 1);
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
    stream(scheduler, replayCount) {
        const result = stream(this.streamable, scheduler, replayCount);
        addDisposableDisposeParentOnChildError(this, result);
        return result;
    }
}
export const createIOSinkAccumulator = (reducer, initialValue, replay = 0) => new IOSinkAccumulatorImpl(reducer, initialValue, replay);
