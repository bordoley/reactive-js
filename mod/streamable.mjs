/// <reference types="./streamable.d.ts" />
import { empty as empty$1, concatWith, fromValue, ignoreElements, endWith, startWith, concatMap } from './container.mjs';
import { pipe, compose, returns, updaterReducer, flip } from './functions.mjs';
import { AbstractDisposableObservable, createSubject, publish, createObservable, map, onNotify, dispatchTo, subscribe, fromArrayT, __currentScheduler, __using, scan, mergeT, distinctUntilChanged, subscribeOn, fromDisposable, takeUntil, merge, keepT, onSubscribe, concatT, reduce, mapT, concatAllT, takeFirst, withLatestFrom, using, never, takeWhile, scanAsync, observable, __memo, __observe, zipWithLatestFrom, switchAll } from './observable.mjs';
import { add, addTo, bindTo } from './disposable.mjs';
import { sinkInto as sinkInto$1, sourceFrom } from './source.mjs';
import { toPausableScheduler } from './scheduler.mjs';
import { none } from './option.mjs';
import { enumerate, move, hasCurrent, current, fromIterable as fromIterable$1 } from './enumerable.mjs';

class StreamImpl extends AbstractDisposableObservable {
    constructor(dispatcher, observable) {
        super();
        this.dispatcher = dispatcher;
        this.observable = observable;
    }
    get observerCount() {
        return this.observable.observerCount;
    }
    dispatch(req) {
        this.dispatcher.dispatch(req);
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
const createFromObservableOperator = (op) => createStreamble((scheduler, options) => createStream(op, scheduler, options));
class LiftedStreamable {
    constructor(src, obsOps, reqOps) {
        this.obsOps = obsOps;
        this.reqOps = reqOps;
        this.src = src instanceof LiftedStreamable ? src.src : src;
        this.op = requests => createObservable(observer => {
            const { scheduler } = observer;
            const srcStream = pipe(this.src, stream(scheduler));
            pipe(observer, sourceFrom(pipe(srcStream, compose(...obsOps))), add(srcStream), add(pipe(requests, map(compose(...reqOps)), onNotify(dispatchTo(srcStream)), subscribe(scheduler), bindTo(srcStream))));
        });
    }
    stream(scheduler, options) {
        return createStream(this.op, scheduler, options);
    }
}
const liftImpl = (streamable, obsOps, reqOps) => new LiftedStreamable(streamable, obsOps, reqOps);
const lift = (op) => streamable => {
    const obsOps = streamable instanceof LiftedStreamable
        ? [...streamable.obsOps, op]
        : [op];
    const reqOps = streamable instanceof LiftedStreamable ? streamable.reqOps : [];
    return liftImpl(streamable, obsOps, reqOps);
};
const mapReq = (op) => streamable => {
    const obsOps = streamable instanceof LiftedStreamable ? streamable.obsOps : [];
    const reqOps = streamable instanceof LiftedStreamable
        ? [op, ...streamable.reqOps]
        : [op];
    return liftImpl(streamable, obsOps, reqOps);
};
const _empty = createFromObservableOperator(_ => empty$1(fromArrayT));
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
const empty = (options = {}) => {
    var _a;
    const { delay = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0) } = options;
    return delay === 0
        ? _empty
        : createFromObservableOperator(_ => empty$1(fromArrayT, options));
};
const stream = (scheduler, options) => streamable => streamable.stream(scheduler, options);
const streamOnSchedulerFactory = (streamable, scheduler, replay) => pipe(streamable, stream(scheduler, { replay }));
const __stream = (streamable, { replay = 0, scheduler, } = {}) => {
    const currentScheduler = __currentScheduler();
    return __using(streamOnSchedulerFactory, streamable, scheduler !== null && scheduler !== void 0 ? scheduler : currentScheduler, replay);
};

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createActionReducer = (reducer, initialState, options) => {
    const operator = (src) => {
        const acc = initialState();
        // Note: We want to product the initial value first,
        // but need to subscribe to src when the operator is initially
        // invoked to avoid missing any dispatch requests.
        // Hence we merge the two observables and take advantage
        // of the fact that merge notifies in the order of
        // the observables merged.
        return pipe(src, scan(reducer, returns(acc)), concatWith(mergeT, fromValue(fromArrayT)(acc)), distinctUntilChanged(options));
    };
    return createFromObservableOperator(operator);
};
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createStateStore = (initialState, options) => createActionReducer(updaterReducer, initialState, options);

const _identity = {
    stream(_, options) {
        return createSubject(options);
    },
};
/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
const identity = () => _identity;

const flow = ({ scheduler, } = {}) => observable => {
    const op = (modeObs) => createObservable(observer => {
        const pausableScheduler = toPausableScheduler(scheduler !== null && scheduler !== void 0 ? scheduler : observer.scheduler);
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
    });
    return createFromObservableOperator(op);
};

const sinkInto = (dest) => (src) => createObservable(observer => {
    const { scheduler } = observer;
    const srcStream = src.stream(scheduler);
    const destStream = dest.stream(scheduler);
    pipe(merge(pipe(srcStream, onNotify(dispatchTo(destStream)), ignoreElements(keepT), onSubscribe(() => destStream)), pipe(destStream, onNotify(dispatchTo(srcStream)), ignoreElements(keepT), onSubscribe(() => srcStream))), ignoreElements(keepT), endWith({ ...fromArrayT, ...concatT }, none), sinkInto$1(observer));
});

class FlowableSinkAccumulatorImpl extends AbstractDisposableObservable {
    constructor(subject, streamable) {
        super();
        this.subject = subject;
        this.streamable = streamable;
    }
    get observerCount() {
        return this.subject.observerCount;
    }
    sink(observer) {
        this.subject.sink(observer);
    }
    stream(scheduler, options) {
        return pipe(this.streamable, stream(scheduler, options), addTo(this));
    }
}
/** @experimental */
const createFlowableSinkAccumulator = (reducer, initialValue, options) => {
    const subject = createSubject(options);
    const sinkAcc = pipe(compose(reduce(reducer, initialValue), onNotify(dispatchTo(subject)), ignoreElements(keepT), startWith({ ...concatT, ...fromArrayT }, "pause", "resume")), createFromObservableOperator, streamable => new FlowableSinkAccumulatorImpl(subject, streamable), add(subject));
    return sinkAcc;
};

const fromArrayScanner = (acc, _) => acc + 1;
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
    return createFromObservableOperator(compose(scan(fromArrayScanner, returns(startIndex - 1)), concatMap({ ...mapT, ...concatAllT }, (i) => fromValueWithDelay(values[i])), takeFirst({ count: endIndex - startIndex })));
};

const _fromEnumerable = (enumerable) => createFromObservableOperator(compose(withLatestFrom(using(() => enumerate(enumerable), compose(fromValue(fromArrayT), concatWith(concatT, never()))), (_, enumerator) => enumerator), onNotify(move), takeWhile(hasCurrent), map(current)));
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
    const op = delay > 0
        ? scanAsync(asyncGeneratorScanner(generator, options), initialValue)
        : scan(generateScanner(generator), initialValue);
    return createFromObservableOperator(op);
};

const consumeContinue = (data) => ({
    type: "continue",
    data,
});
const consumeDone = (data) => ({
    type: "done",
    data,
});
const consumeImpl = (consumer, initial) => {
    const createObservable = (accFeedback, enumerator) => pipe(enumerator, consumer(accFeedback), onNotify(ev => {
        switch (ev.type) {
            case "continue":
                accFeedback.dispatch(ev.data);
                enumerator.dispatch(none);
                break;
        }
    }), map(ev => ev.data), onSubscribe(() => {
        accFeedback.dispatch(initial());
        enumerator.dispatch(none);
    }));
    return enumerable => observable(() => {
        const enumerator = __stream(enumerable);
        const accFeedback = __using(createSubject);
        const observable = __memo(createObservable, accFeedback, enumerator);
        return __observe(observable);
    });
};
const consume = (consumer, initial) => consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);
const consumeAsync = (consumer, initial) => consumeImpl(accObs => compose(zipWithLatestFrom(accObs, (next, acc) => pipe(consumer(acc, next), takeFirst())), switchAll()), initial);

export { __stream, consume, consumeAsync, consumeContinue, consumeDone, createActionReducer, createFlowableSinkAccumulator, createFromObservableOperator, createStateStore, createStreamble, empty, flow, fromArray, fromEnumerable, fromIterable, generate, identity, lift, mapReq, sinkInto, stream };
