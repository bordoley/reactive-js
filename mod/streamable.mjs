/// <reference types="./streamable.d.ts" />
import { concatWith, fromValue, ignoreElements, startWith } from './container.mjs';
import { dispatchTo } from './dispatcher.mjs';
import { add, bindTo, addTo } from './disposable.mjs';
import { newInstance, length, compose, pipe, returns, updateReducer, identity as identity$1 } from './functions.mjs';
import { createObservable, scan, mergeT, fromArrayT, distinctUntilChanged, takeFirst, subscribeOn, fromDisposable, takeUntil, onNotify, subscribe, __currentScheduler, __using, __memo, merge, keepT, onSubscribe, AbstractDisposableObservable, observerCount, replay, Subject, reduce, concatT } from './observable.mjs';
import { scheduler } from './observer.mjs';
import { isSome, none } from './option.mjs';
import { createPausableScheduler } from './scheduler.mjs';
import { sinkInto as sinkInto$1, sourceFrom } from './source.mjs';
import { createStream } from './stream.mjs';

const stream = (scheduler, options) => streamable => streamable.stream(scheduler, options);
class CreateStreamable {
    constructor(stream) {
        this.stream = stream;
    }
}
const createStreamble = (stream) => newInstance(CreateStreamable, stream);
function createLiftedStreamable(...ops) {
    const op = length(ops) > 1 ? compose(...ops) : ops[0];
    return createStreamble((scheduler, options) => createStream(op, scheduler, options));
}
/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createActionReducer = (reducer, initialState, options) => createLiftedStreamable(obs => createObservable(observer => {
    const acc = initialState();
    return pipe(obs, scan(reducer, returns(acc)), concatWith(mergeT, fromValue(fromArrayT)(acc)), distinctUntilChanged(options), sinkInto$1(observer));
}));
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createStateStore = (initialState, options) => createActionReducer(updateReducer, initialState, options);
const _empty = /*@__PURE__*/ createLiftedStreamable(takeFirst({ count: 0 }));
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
const empty = () => _empty;
const flow = () => observable => createLiftedStreamable((modeObs) => createObservable(observer => {
    const pausableScheduler = createPausableScheduler(scheduler(observer));
    pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), pipe(pausableScheduler, fromDisposable, takeUntil))), add(pipe(modeObs, onNotify((mode) => {
        switch (mode) {
            case "pause":
                pausableScheduler.pause();
                break;
            case "resume":
                pausableScheduler.resume();
                break;
        }
    }), subscribe(scheduler(observer)), bindTo(pausableScheduler))), add(pausableScheduler));
}));
const _identity = {
    stream(scheduler, options) {
        return createStream(identity$1, scheduler, options);
    },
};
/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
const identity = () => _identity;
const streamOnSchedulerFactory = (streamable, scheduler, replay) => pipe(streamable, stream(scheduler, { replay }));
const __stream = (streamable, { replay = 0, scheduler, } = {}) => {
    const currentScheduler = __currentScheduler();
    return __using(streamOnSchedulerFactory, streamable, scheduler !== null && scheduler !== void 0 ? scheduler : currentScheduler, replay);
};
const createStateOptions = (equality) => isSome(equality) ? { equality } : none;
const __state = (initialState, options = {}) => {
    const { equality } = options;
    const optionsMemo = __memo(createStateOptions, equality);
    const streamable = __memo(createStateStore, initialState, optionsMemo);
    return __stream(streamable);
};
const sinkInto = (dest) => (src) => createObservable(observer => {
    const srcStream = pipe(src, stream(scheduler(observer)));
    const destStream = pipe(dest, stream(scheduler(observer)));
    pipe(merge(pipe(srcStream, onNotify(dispatchTo(destStream)), ignoreElements(keepT), onSubscribe(() => destStream)), pipe(destStream, onNotify(dispatchTo(srcStream)), ignoreElements(keepT), onSubscribe(() => srcStream))), ignoreElements(keepT), sinkInto$1(observer));
});
class FlowableSinkAccumulatorImpl extends AbstractDisposableObservable {
    constructor(subject, streamable) {
        super();
        this.subject = subject;
        this.streamable = streamable;
    }
    get observerCount() {
        return observerCount(this.subject);
    }
    get replay() {
        return replay(this.subject);
    }
    sink(observer) {
        pipe(this.subject, sinkInto$1(observer));
    }
    stream(scheduler, options) {
        return pipe(this.streamable, stream(scheduler, options), addTo(this));
    }
}
/** @experimental */
const createFlowableSinkAccumulator = (reducer, initialValue, options = {}) => {
    const { replay = 0 } = options;
    const subject = newInstance(Subject, replay);
    return pipe(createLiftedStreamable(reduce(reducer, initialValue), onNotify(dispatchTo(subject)), ignoreElements(keepT), startWith({ ...concatT, ...fromArrayT }, "pause", "resume")), streamable => newInstance(FlowableSinkAccumulatorImpl, subject, streamable), add(subject));
};

export { __state, __stream, createActionReducer, createFlowableSinkAccumulator, createLiftedStreamable, createStateStore, createStreamble, empty, flow, identity, sinkInto, stream };
