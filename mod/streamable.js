'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
var dispatcher = require('./dispatcher.js');

class StreamImpl extends disposable.AbstractDisposable {
    constructor(op, scheduler, options) {
        super();
        this.isSynchronous = false;
        const subject = observable.createSubject();
        const observable$1 = functions.pipe(subject, op, observable.publish(scheduler, options));
        disposable.addDisposable(observable$1, this);
        disposable.addDisposable(this, subject);
        this.dispatcher = subject;
        this.observable = observable$1;
    }
    get observerCount() {
        return this.observable.observerCount;
    }
    dispatch(req) {
        this.dispatcher.dispatch(req);
    }
    observe(observer) {
        functions.pipe(this.observable, observable.observe(observer));
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
    const op = requests => observable.using(scheduler => {
        const srcStream = functions.pipe(src, stream(scheduler));
        const requestSubscription = functions.pipe(requests, observable.map(functions.compose(...reqOps)), observable.onNotify(dispatcher.dispatchTo(srcStream)), observable.subscribe(scheduler));
        disposable.bindDisposables(srcStream, requestSubscription);
        return srcStream;
    }, functions.compose(...obsOps));
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
const _empty = createStreamable(_ => observable.empty());
/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
const empty = (options) => option.isNone(options) ? _empty : createStreamable(_ => observable.empty(options));
const stream = (scheduler, options) => streamable => streamable.stream(scheduler, options);

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
        return functions.pipe(src, observable.scan(reducer, functions.returns(acc)), observable.mergeWith(observable.fromValue()(acc)), observable.distinctUntilChanged(options));
    };
    return createStreamable(operator);
};

const _identity = {
    stream(_, options) {
        return observable.createSubject(options);
    },
};
/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
const identity = () => _identity;

const map = (mapper) => lift(observable.map(mapper));
const mapTo = (v) => lift(observable.mapTo(v));
const onNotify = (onNotify) => lift(observable.onNotify(onNotify));
const scan = (scanner, initalValue) => lift(observable.scan(scanner, initalValue));
const withLatestFrom = (other, selector) => lift(observable.withLatestFrom(other, selector));

const ignoreAndNotifyVoid = functions.compose(observable.ignoreElements(), observable.endWith(option.none));
const sink = (src, dest) => observable.using(scheduler => {
    const srcStream = functions.pipe(src, stream(scheduler));
    const destStream = functions.pipe(dest, stream(scheduler));
    const srcSubscription = functions.pipe(srcStream, observable.onNotify(dispatcher.dispatchTo(destStream)), observable.subscribe(scheduler));
    const destSubscription = functions.pipe(destStream, observable.onNotify(dispatcher.dispatchTo(srcStream)), observable.subscribe(scheduler));
    disposable.addDisposable(srcSubscription, destStream);
    disposable.addDisposable(destSubscription, srcStream);
    return destStream;
}, ignoreAndNotifyVoid);

exports.createActionReducer = createActionReducer;
exports.createStreamable = createStreamable;
exports.empty = empty;
exports.identity = identity;
exports.lift = lift;
exports.map = map;
exports.mapReq = mapReq;
exports.mapTo = mapTo;
exports.onNotify = onNotify;
exports.scan = scan;
exports.sink = sink;
exports.stream = stream;
exports.withLatestFrom = withLatestFrom;
