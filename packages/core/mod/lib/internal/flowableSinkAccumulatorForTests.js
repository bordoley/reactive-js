import { pipe, returns } from "../functions.js";
import { using, takeWhile, keepType, map as mapObs, onNotify, subscribe, createObservable, dispatch, } from "../observable.js";
import { add } from "../disposable.js";
import { stream, createStreamable } from "../streamable.js";
import { reduceOp } from "./observable/reduce.js";
const isNext = (ev) => ev.type === 1;
class FlowableSinkAccumulatorImpl {
    constructor(reducer, _acc) {
        this.reducer = reducer;
        this._acc = _acc;
    }
    get acc() {
        return this._acc;
    }
    stream(scheduler, replayCount) {
        const op = (events) => using(scheduler => pipe(events, takeWhile(isNext), keepType(isNext), mapObs(ev => ev.data), reduceOp(this.reducer, returns(this.acc)), onNotify(acc => {
            this._acc = acc;
        }), subscribe(scheduler)), eventsSubscription => createObservable(dispatcher => {
            dispatch(dispatcher, 2);
            dispatch(dispatcher, 1);
            add(eventsSubscription, dispatcher);
        }));
        return stream(createStreamable(op), scheduler, replayCount);
    }
}
export const createFlowableSinkAccumulator = (reducer, initialValue) => new FlowableSinkAccumulatorImpl(reducer, initialValue());
