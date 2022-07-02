/// <reference types="./streamable.d.ts" />
import { concatWith, fromValue, ignoreElements } from './container.mjs';
import { dispatchTo } from './dispatcher.mjs';
import { addTo, add } from './disposable.mjs';
import { newInstance, getLength, compose, pipe, returns, updateReducer } from './functions.mjs';
import { createObservable, scan, mergeT, fromArrayT, distinctUntilChanged, __currentScheduler, __using, __memo, merge, onNotify, keepT, onSubscribe, subscribe } from './observable.mjs';
import { isSome, none } from './option.mjs';
import { sinkInto as sinkInto$1 } from './source.mjs';
import { createStream } from './stream.mjs';

const stream = (scheduler, options) => streamable => streamable.stream(scheduler, options);
class CreateStreamable {
    constructor(stream) {
        this.stream = stream;
    }
}
const createStreamble = (stream) => newInstance(CreateStreamable, stream);
function createLiftedStreamable(...ops) {
    const op = getLength(ops) > 1 ? compose(...ops) : ops[0];
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
const sinkInto = (dest) => (src) => {
    const { scheduler } = dest;
    const srcStream = pipe(src, stream(scheduler));
    pipe(merge(pipe(srcStream, onNotify(dispatchTo(dest)), ignoreElements(keepT), onSubscribe(() => dest)), pipe(dest, onNotify(dispatchTo(srcStream)), ignoreElements(keepT))), ignoreElements(keepT), subscribe(scheduler), addTo(dest), add(srcStream));
    return src;
};
const sourceFrom = (streamable) => dest => {
    pipe(streamable, sinkInto(dest));
    return dest;
};

export { __state, __stream, createActionReducer, createLiftedStreamable, createStateStore, createStreamble, sinkInto, sourceFrom, stream };
