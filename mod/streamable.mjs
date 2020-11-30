import { isNone, none } from './option.mjs';
import { pipe, compose, returns } from './functions.mjs';
import { createSubject, publish, observe, using, map as map$1, onNotify as onNotify$1, dispatchTo, subscribe, empty as empty$1, __currentScheduler, __using, scan as scan$1, mergeWith, fromValue, distinctUntilChanged, mapTo as mapTo$1, withLatestFrom as withLatestFrom$1, ignoreElements, endWith } from './observable.mjs';
import { AbstractDisposable, addDisposable, bindDisposables } from './disposable.mjs';

class StreamImpl extends AbstractDisposable {
    constructor(op, scheduler, options) {
        super();
        this.isSynchronous = false;
        const subject = createSubject();
        const observable = pipe(subject, op, publish(scheduler, options));
        addDisposable(observable, this);
        addDisposable(this, subject);
        this.dispatcher = subject;
        this.observable = observable;
    }
    get observerCount() {
        return this.observable.observerCount;
    }
    dispatch(req) {
        this.dispatcher.dispatch(req);
    }
    observe(observer) {
        pipe(this.observable, observe(observer));
    }
}
const createStream = (op, scheduler, options) => new StreamImpl(op, scheduler, options);

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
    const op = requests => using(scheduler => {
        const srcStream = pipe(src, stream(scheduler));
        const requestSubscription = pipe(requests, map$1(compose(...reqOps)), onNotify$1(dispatchTo(srcStream)), subscribe(scheduler));
        bindDisposables(srcStream, requestSubscription);
        return srcStream;
    }, compose(...obsOps));
    return new LiftedStreamable(op, src, obsOps, reqOps);
};
const lift = (op) => streamable => {
    const obsOps = streamable instanceof LiftedStreamable ? [...streamable.obsOps, op] : [op];
    const reqOps = streamable instanceof LiftedStreamable ? streamable.reqOps : [];
    return liftImpl(streamable, obsOps, reqOps);
};
const mapReq = (op) => streamable => {
    const obsOps = streamable instanceof LiftedStreamable ? streamable.obsOps : [];
    const reqOps = streamable instanceof LiftedStreamable ? [op, ...streamable.reqOps] : [op];
    return liftImpl(streamable, obsOps, reqOps);
};
const _empty = createStreamable(_ => empty$1());
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
const empty = (options) => isNone(options) ? _empty : createStreamable(_ => empty$1(options));
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
        return pipe(src, scan$1(reducer, returns(acc)), mergeWith(fromValue()(acc)), distinctUntilChanged(options));
    };
    return createStreamable(operator);
};

const _identity = {
    stream(_, options) {
        return createSubject(options);
    },
};
/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
const identity = () => _identity;

const map = (mapper) => lift(map$1(mapper));
const mapTo = (v) => lift(mapTo$1(v));
const onNotify = (onNotify) => lift(onNotify$1(onNotify));
const scan = (scanner, initalValue) => lift(scan$1(scanner, initalValue));
const withLatestFrom = (other, selector) => lift(withLatestFrom$1(other, selector));

const ignoreAndNotifyVoid = compose(ignoreElements(), endWith(none));
const sink = (src, dest) => using(scheduler => {
    const srcStream = pipe(src, stream(scheduler));
    const destStream = pipe(dest, stream(scheduler));
    const srcSubscription = pipe(srcStream, onNotify$1(dispatchTo(destStream)), subscribe(scheduler));
    const destSubscription = pipe(destStream, onNotify$1(dispatchTo(srcStream)), subscribe(scheduler));
    addDisposable(srcSubscription, destStream);
    addDisposable(destSubscription, srcStream);
    return destStream;
}, ignoreAndNotifyVoid);

export { __stream, createActionReducer, createStreamable, empty, identity, lift, map, mapReq, mapTo, onNotify, scan, sink, stream, withLatestFrom };
