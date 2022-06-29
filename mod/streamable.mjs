/// <reference types="./streamable.d.ts" />
import { ignoreElements, startWith, fromValue, concatWith, concatMap } from './container.mjs';
import { dispatch, dispatchTo } from './dispatcher.mjs';
import { add, addTo, bindTo } from './disposable.mjs';
import { enumerate, fromIterable as fromIterable$1 } from './enumerable.mjs';
import { move, hasCurrent, current } from './enumerator.mjs';
import { pipe, compose, flip, returns, updateReducer, increment, identity as identity$1 } from './functions.mjs';
import { AbstractDisposableObservable, observerCount, replay, createSubject, publish, reduce, onNotify, keepT, concatT, fromArrayT, scanAsync, scan, createObservable, map, onSubscribe, zipWithLatestFrom, takeFirst, switchAll, mergeT, distinctUntilChanged, subscribe, subscribeOn, fromDisposable, takeUntil, mapT, concatAllT, withLatestFrom, using, never, takeWhile, merge, __currentScheduler, __using, __memo } from './observable.mjs';
import { none, isSome } from './option.mjs';
import { createPausableScheduler } from './scheduler.mjs';
import { sinkInto as sinkInto$1, notifySink, sourceFrom } from './source.mjs';

class StreamImpl extends AbstractDisposableObservable {
    constructor(dispatcher, observable) {
        super();
        this.dispatcher = dispatcher;
        this.observable = observable;
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
        pipe(this.observable, sinkInto$1(observer));
    }
}
const createStream = (op, scheduler, options) => {
    const subject = createSubject();
    const observable = pipe(subject, op, publish(scheduler, options));
    return pipe(new StreamImpl(subject, observable), add(subject), 
    // FIXME: This seems wrong.
    addTo(observable));
};
class CreateStreamable {
    constructor(stream) {
        this.stream = stream;
    }
}
const createStreamble = (stream) => new CreateStreamable(stream);
function createLiftedStreamable(...ops) {
    const op = ops.length > 1 ? compose(...ops) : ops[0];
    return createStreamble((scheduler, options) => createStream(op, scheduler, options));
}
const stream = (scheduler, options) => streamable => streamable.stream(scheduler, options);

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
const createFlowableSinkAccumulator = (reducer, initialValue, options) => {
    const subject = createSubject(options);
    return pipe(createLiftedStreamable(reduce(reducer, initialValue), onNotify(dispatchTo(subject)), ignoreElements(keepT), startWith({ ...concatT, ...fromArrayT }, "pause", "resume")), streamable => new FlowableSinkAccumulatorImpl(subject, streamable), add(subject));
};

const generateScanner = (generator) => (acc, _) => generator(acc);
const asyncGeneratorScanner = (generator, options) => {
    const fromValueWithDelay = fromValue(fromArrayT, options);
    return (acc, _) => pipe(acc, generator, fromValueWithDelay);
};
/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
const generate = (generator, initialValue, options = {}) => {
    var _a;
    const { delay = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0) } = options;
    return createLiftedStreamable(delay > 0
        ? scanAsync(asyncGeneratorScanner(generator, options), initialValue)
        : scan(generateScanner(generator), initialValue));
};

const consumeContinue = (data) => ({
    type: "continue",
    data,
});
const consumeDone = (data) => ({
    type: "done",
    data,
});
const consumeImpl = (consumer, initial) => enumerable => createObservable(observer => {
    const enumerator = pipe(enumerable, stream(observer.scheduler), addTo(observer));
    const accFeedback = pipe(createSubject(), addTo(observer));
    pipe(enumerator, consumer(accFeedback), onNotify(ev => {
        switch (ev.type) {
            case "continue":
                pipe(accFeedback, dispatch(ev.data));
                pipe(enumerator, dispatch(none));
                break;
        }
    }), map(ev => ev.data), onSubscribe(() => {
        pipe(accFeedback, dispatch(initial()));
        pipe(enumerator, dispatch(none));
    }), sinkInto$1(observer));
});
const consume = (consumer, initial) => consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);
const consumeAsync = (consumer, initial) => consumeImpl(accObs => compose(zipWithLatestFrom(accObs, (next, acc) => pipe(consumer(acc, next), takeFirst())), switchAll()), initial);

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
    return pipe(obs, scan(reducer, returns(acc)), concatWith(mergeT, fromValue(fromArrayT)(acc)), distinctUntilChanged(options), onNotify(notifySink(observer)), subscribe(observer.scheduler), bindTo(observer));
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
const _empty = createLiftedStreamable(takeFirst({ count: 0 }));
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
const empty = () => _empty;
const flow = ({ scheduler, } = {}) => observable => createLiftedStreamable((modeObs) => createObservable(observer => {
    const pausableScheduler = createPausableScheduler(scheduler !== null && scheduler !== void 0 ? scheduler : observer.scheduler);
    pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), pipe(pausableScheduler, fromDisposable, takeUntil))), add(pipe(modeObs, onNotify((mode) => {
        switch (mode) {
            case "pause":
                pausableScheduler.pause();
                break;
            case "resume":
                pausableScheduler.resume();
                break;
        }
    }), subscribe(observer.scheduler), bindTo(pausableScheduler))), add(pausableScheduler));
}));
/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
const fromArray = (options = {}) => values => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : valuesLength, valuesLength), 0);
    const fromValueWithDelay = fromValue(fromArrayT, options);
    return createLiftedStreamable(scan(increment, returns(startIndex - 1)), concatMap({ ...mapT, ...concatAllT }, (i) => fromValueWithDelay(values[i])), takeFirst({ count: endIndex - startIndex }));
};
const _fromEnumerable = (enumerable) => createLiftedStreamable(withLatestFrom(using(() => enumerate(enumerable), compose(fromValue(fromArrayT), concatWith(concatT, never()))), (_, enumerator) => enumerator), onNotify(move), takeWhile(hasCurrent), map(current));
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromEnumerable = () => _fromEnumerable;
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const _fromIterable = (iterable) => pipe(iterable, fromIterable$1(), fromEnumerable());
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromIterable = () => _fromIterable;
const _identity = {
    stream(scheduler, options) {
        return createStream(identity$1, scheduler, options);
    },
};
/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
const identity = () => _identity;
const sinkInto = (dest) => (src) => createObservable(observer => {
    const { scheduler } = observer;
    const srcStream = src.stream(scheduler);
    const destStream = dest.stream(scheduler);
    pipe(merge(pipe(srcStream, onNotify(dispatchTo(destStream)), ignoreElements(keepT), onSubscribe(() => destStream)), pipe(destStream, onNotify(dispatchTo(srcStream)), ignoreElements(keepT), onSubscribe(() => srcStream))), ignoreElements(keepT), sinkInto$1(observer));
});
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

export { __state, __stream, consume, consumeAsync, consumeContinue, consumeDone, createActionReducer, createFlowableSinkAccumulator, createLiftedStreamable, createStateStore, createStreamble, empty, flow, fromArray, fromEnumerable, fromIterable, generate, identity, sinkInto, stream };
