import { add } from "../disposable.js";
import { pipe, returns } from "../functions.js";
import { using, takeWhile, keepType, map as mapObs, onNotify, subscribe, createObservable, dispatch, reduce, } from "../observable.js";
import { stream, createStreamable } from "../streamable.js";
const isNext = (ev) => ev.type === 1;
class IOSinkAccumulatorImpl {
    constructor(reducer, _acc) {
        this.reducer = reducer;
        this._acc = _acc;
    }
    get acc() {
        return this._acc;
    }
    stream(scheduler, replayCount) {
        const op = (events) => using(scheduler => pipe(events, takeWhile(isNext), keepType(isNext), mapObs(ev => ev.data), reduce(this.reducer, returns(this.acc)), onNotify(acc => {
            this._acc = acc;
        }), subscribe(scheduler)), eventsSubscription => createObservable(dispatcher => {
            dispatch(dispatcher, 2);
            dispatch(dispatcher, 1);
            add(eventsSubscription, dispatcher);
        }));
        return stream(createStreamable(op), scheduler, replayCount);
    }
}
export const createIOSinkAccumulator = (reducer, initialValue) => new IOSinkAccumulatorImpl(reducer, initialValue());
