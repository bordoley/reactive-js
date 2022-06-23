/// <reference types="./streamable.d.ts" />
import { empty as empty$1, fromValue, ignoreElements, endWith, startWith, concatMap, concatWith } from './container.mjs';
import { addDisposable, bindDisposables, addDisposableDisposeParentOnChildError } from './disposable.mjs';
import { pipe, compose, returns, updaterReducer, flip } from './functions.mjs';
import { $ as AbstractDisposableObservable, k as createSubject, a0 as publish, a1 as createObservableUnsafe, G as map, s as subscribe, a as fromArrayT, a2 as __currentScheduler, a3 as __using, U as scan, v as mergeWith, S as distinctUntilChanged, Q as zipWithLatestFrom, a4 as subscribeOn, a5 as fromDisposable, a6 as takeUntil, R as keepT, e as concatT, u as merge, X as onNotify, l as dispatchTo, B as onSubscribe, y as observable, _ as __memo, z as __observe, a7 as reduce, m as mapT, q as concatAllT, h as takeFirst, M as withLatestFrom, a8 as using, x as never, W as takeWhile, D as scanAsync, H as switchAll } from './observable-625fe492.mjs';
import { sinkInto } from './source.mjs';
import { isNone, none } from './option.mjs';
import { toPausableScheduler } from './scheduler.mjs';
import { enumerate, move, hasCurrent, current, fromIterable as fromIterable$1 } from './enumerable.mjs';

class StreamImpl extends AbstractDisposableObservable {
    constructor(dispatcher, observable) {
        super();
        this.dispatcher = dispatcher;
        this.observable = observable;
        this.isSynchronous = false;
    }
    get observerCount() {
        return this.observable.observerCount;
    }
    dispatch(req) {
        this.dispatcher.dispatch(req);
    }
    sink(observer) {
        pipe(this.observable, sinkInto(observer));
    }
}
const createStream = (op, scheduler, options) => {
    const subject = createSubject();
    const observable = pipe(subject, op, publish(scheduler, options));
    const stream = new StreamImpl(subject, observable);
    addDisposable(observable, stream);
    addDisposable(stream, subject);
    return stream;
};

class StreamableImpl {
    constructor(op) {
        this.op = op;
    }
    stream(scheduler, options) {
        return createStream(this.op, scheduler, options);
    }
}
const createStreamable = (op) => new StreamableImpl(op);
class LiftedStreamable extends StreamableImpl {
    constructor(op, src, obsOps, reqOps) {
        super(op);
        this.src = src;
        this.obsOps = obsOps;
        this.reqOps = reqOps;
    }
}
const liftImpl = (streamable, obsOps, reqOps) => {
    const src = streamable instanceof LiftedStreamable ? streamable.src : streamable;
    const op = requests => createObservableUnsafe(observer => {
        const srcStream = pipe(src, stream(observer));
        const requestSubscription = pipe(requests, map(compose(...reqOps)), subscribe(observer, srcStream.dispatch, srcStream));
        bindDisposables(srcStream, requestSubscription);
        addDisposable(observer, srcStream);
        pipe(srcStream, compose(...obsOps), sinkInto(observer));
    });
    return new LiftedStreamable(op, src, obsOps, reqOps);
};
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
const _empty = createStreamable(_ => empty$1(fromArrayT));
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
const empty = (options) => isNone(options)
    ? _empty
    : createStreamable(_ => empty$1(fromArrayT, options));
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
        return pipe(src, scan(reducer, returns(acc)), mergeWith(fromValue(fromArrayT)(acc)), distinctUntilChanged(options));
    };
    return createStreamable(operator);
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
/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const toStateStore = () => streamable => createStreamable(updates => createObservableUnsafe(observer => {
    const stream$1 = pipe(streamable, stream(observer));
    const updatesSubscription = pipe(updates, zipWithLatestFrom(stream$1, (updateState, prev) => updateState(prev)), subscribe(observer, stream$1.dispatch, stream$1));
    bindDisposables(updatesSubscription, stream$1);
    addDisposable(observer, stream$1);
    pipe(stream$1, sinkInto(observer));
}));

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
    const op = (modeObs) => createObservableUnsafe(observer => {
        const pausableScheduler = toPausableScheduler(scheduler !== null && scheduler !== void 0 ? scheduler : observer);
        const onModeChange = (mode) => {
            switch (mode) {
                case "pause":
                    pausableScheduler.pause();
                    break;
                case "resume":
                    pausableScheduler.resume();
                    break;
            }
        };
        const modeSubscription = pipe(modeObs, subscribe(observer, onModeChange));
        bindDisposables(modeSubscription, pausableScheduler);
        addDisposable(observer, pausableScheduler);
        pipe(observable, subscribeOn(pausableScheduler), pipe(pausableScheduler, fromDisposable, takeUntil), sinkInto(observer));
    });
    return createStreamable(op);
};

const ignoreAndNotifyVoid = compose(ignoreElements(keepT), endWith({ ...fromArrayT, ...concatT }, none));
const createSinkObs = (srcStream, destStream) => merge(pipe(srcStream, onNotify(dispatchTo(destStream)), ignoreElements(keepT), onSubscribe(() => destStream)), pipe(destStream, onNotify(dispatchTo(srcStream)), ignoreElements(keepT), onSubscribe(() => srcStream)));
const sink = (src, dest) => pipe(observable(() => {
    const srcStream = __stream(src);
    const destStream = __stream(dest);
    const obs = __memo(createSinkObs, srcStream, destStream);
    return __observe(obs);
}), ignoreAndNotifyVoid);

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
        const result = pipe(this.streamable, stream(scheduler, options));
        addDisposableDisposeParentOnChildError(this, result);
        return result;
    }
}
/** @experimental */
const createFlowableSinkAccumulator = (reducer, initialValue, options) => {
    const subject = createSubject(options);
    const op = (events) => pipe(events, reduce(reducer, initialValue), onNotify(dispatchTo(subject)), ignoreElements(keepT), startWith({ ...concatT, ...fromArrayT }, "pause", "resume"));
    const streamable = createStreamable(op);
    const sinkAcc = new FlowableSinkAccumulatorImpl(subject, streamable);
    addDisposableDisposeParentOnChildError(sinkAcc, subject);
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
    return createStreamable(compose(scan(fromArrayScanner, returns(startIndex - 1)), concatMap({ ...mapT, ...concatAllT }, (i) => fromValueWithDelay(values[i])), takeFirst({ count: endIndex - startIndex })));
};

const _fromEnumerable = (enumerable) => createStreamable(compose(withLatestFrom(using(() => enumerate(enumerable), compose(fromValue(fromArrayT), concatWith(concatT, never()))), (_, enumerator) => enumerator), onNotify(move), takeWhile(hasCurrent), map(current)));
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
    const { delay = 0 } = options;
    const op = delay > 0
        ? scanAsync(asyncGeneratorScanner(generator, options), initialValue)
        : scan(generateScanner(generator), initialValue);
    return createStreamable(op);
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

export { __stream, consume, consumeAsync, consumeContinue, consumeDone, createActionReducer, createFlowableSinkAccumulator, createStateStore, createStreamable, empty, flow, fromArray, fromEnumerable, fromIterable, generate, identity, lift, mapReq, sink, stream, toStateStore };
