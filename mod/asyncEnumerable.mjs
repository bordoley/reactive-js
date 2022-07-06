/// <reference types="./asyncEnumerable.d.ts" />
import { createFromArray } from './__internal__.container.mjs';
import { getDelegate } from './__internal__.delegating.mjs';
import { interactive, createKeepLiftOperator, createMapLiftOperator, createScanLiftOperator, createTakeWhileLiftOperator } from './__internal__.liftable.mjs';
import { getDelay } from './__internal__.optionalArgs.mjs';
import { raise, pipe, newInstance, getLength, compose, increment, returns, pipeLazy, newInstanceWith } from './functions.mjs';
import { stream } from './streamable.mjs';
import { AsyncEnumerator } from './asyncEnumerator.mjs';
import { fromValue, concatMap, concatWith } from './container.mjs';
import { getScheduler, dispatch } from './dispatcher.mjs';
import { add, addTo, bindTo } from './disposable.mjs';
import { enumerate, fromIterable as fromIterable$1 } from './enumerable.mjs';
import { move, getCurrent } from './enumerator.mjs';
import { Subject, multicast, getObserverCount, getReplay, publish, fromArrayT as fromArrayT$1, scan as scan$1, mapT as mapT$1, concatAllT, takeFirst, withLatestFrom, using, concatT, never, takeWhile as takeWhile$1, map as map$1, scanAsync as scanAsync$1, onNotify, keep as keep$1, createObservable, onSubscribe } from './observable.mjs';
import { getScheduler as getScheduler$1 } from './observer.mjs';
import { none } from './option.mjs';
import { sinkInto } from './reactiveContainer.mjs';

class AbstractAsyncEnumerable {
    constructor() {
        this.observableType = 0;
    }
    get T() {
        return raise();
    }
    get TContainerOf() {
        return this;
    }
    get TLiftableContainerState() {
        return raise();
    }
    get TCtx() {
        return raise();
    }
    source(scheduler) {
        return pipe(this, stream(scheduler));
    }
}
class LiftedAsyncEnumerable extends AbstractAsyncEnumerable {
    constructor(src, operators) {
        super();
        this.src = src;
        this.operators = operators;
    }
    stream(scheduler, options) {
        const src = pipe(this.src, stream(scheduler, options));
        return pipe(src, ...this.operators);
    }
}
const lift = (operator) => enumerable => {
    const src = enumerable instanceof LiftedAsyncEnumerable ? enumerable.src : enumerable;
    const allFunctions = enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable.operators, operator]
        : [operator];
    return newInstance(LiftedAsyncEnumerable, src, allFunctions);
};
const liftT = {
    lift,
    variance: interactive,
};

class CreateAsyncEnumerable extends AbstractAsyncEnumerable {
    constructor(stream) {
        super();
        this.stream = stream;
    }
    source(scheduler) {
        return pipe(this, stream(scheduler));
    }
}
const createAsyncEnumerable = (stream) => newInstance(CreateAsyncEnumerable, stream);
class LiftedAsyncEnumerator extends AsyncEnumerator {
    constructor(
    //FIXME: Needs to tag ObservableOperator so only operators that are unary
    // maybe provided as an argument.
    op, scheduler, replay) {
        super();
        this.op = op;
        this.scheduler = scheduler;
        const subject = newInstance(Subject);
        const observable = pipe(subject, op, multicast(scheduler, { replay }));
        this.subject = subject;
        this.observable = observable;
        return pipe(this, add(subject), addTo(this.observable));
    }
    get observerCount() {
        return getObserverCount(this.observable);
    }
    get replay() {
        return getReplay(this.observable);
    }
    dispatch(req) {
        pipe(this.subject, publish(req));
    }
    sinkInto(observer) {
        pipe(this.observable, sinkInto(observer));
    }
}
function createLiftedAsyncEnumerable(...ops) {
    const op = getLength(ops) > 1 ? compose(...ops) : ops[0];
    return createAsyncEnumerable((scheduler, options) => {
        var _a;
        const replay = (_a = options === null || options === void 0 ? void 0 : options.replay) !== null && _a !== void 0 ? _a : 0;
        return newInstance(LiftedAsyncEnumerator, op, scheduler, replay);
    });
}
/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
const fromArray = /*@__PURE__*/ createFromArray((values, startIndex, endIndex, options) => {
    const fromValueWithDelay = fromValue(fromArrayT$1, options);
    return createLiftedAsyncEnumerable(scan$1(increment, returns(startIndex - 1)), concatMap({ ...mapT$1, ...concatAllT }, (i) => fromValueWithDelay(values[i])), takeFirst({ count: endIndex - startIndex }));
});
const fromArrayT = {
    fromArray,
};
const _fromEnumerable = (enumerable) => createLiftedAsyncEnumerable(withLatestFrom(using(pipeLazy(enumerable, enumerate), compose(fromValue(fromArrayT$1), concatWith(concatT, never()))), (_, enumerator) => enumerator), takeWhile$1(move), map$1(getCurrent));
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromEnumerable = () => _fromEnumerable;
const fromEnumerableT = {
    fromEnumerable,
};
const _fromIterable = (iterable) => pipe(iterable, fromIterable$1(), fromEnumerable());
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromIterable = () => _fromIterable;
const fromIterableT = {
    fromIterable,
};
const generateScanner = (generator) => (acc, _) => generator(acc);
const asyncGeneratorScanner = (generator, options) => {
    const fromValueWithDelay = fromValue(fromArrayT$1, options);
    return (acc, _) => pipe(acc, generator, fromValueWithDelay);
};
/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
const generate = (generator, initialValue, options) => {
    const delay = getDelay(options);
    return createLiftedAsyncEnumerable(delay > 0
        ? scanAsync$1(asyncGeneratorScanner(generator, options), initialValue)
        : scan$1(generateScanner(generator), initialValue));
};
const generateT = {
    generate,
};
class AbstractDelegatingAsyncEnumerator extends AsyncEnumerator {
    constructor(delegate) {
        super();
        this.delegate = delegate;
        this.observableType = 0;
    }
    get observerCount() {
        return pipe(this, getDelegate, getObserverCount);
    }
    get replay() {
        return pipe(this, getDelegate, getReplay);
    }
    get scheduler() {
        return pipe(this, getDelegate, getScheduler);
    }
    dispatch(req) {
        pipe(this, getDelegate, dispatch(req));
    }
}
const keep = /*@__PURE__*/ createKeepLiftOperator(liftT, class KeepAsyncEnumerator extends AbstractDelegatingAsyncEnumerator {
    constructor(delegate, predicate) {
        super(delegate);
        this.observableType = 0;
        this.obs = pipe(delegate, onNotify(x => {
            if (!predicate(x)) {
                pipe(this, getDelegate, dispatch(none));
            }
        }), keep$1(predicate), multicast(delegate.scheduler));
    }
    get observerCount() {
        return getObserverCount(this.obs);
    }
    get replay() {
        return getReplay(this.obs);
    }
    sinkInto(observer) {
        pipe(this.obs, sinkInto(observer));
    }
});
const keepT = {
    keep,
};
const map = /*@__PURE__*/ createMapLiftOperator(liftT, class MapAsyncEnumerator extends AbstractDelegatingAsyncEnumerator {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
        this.op = map$1(this.mapper);
    }
    sinkInto(observer) {
        pipe(this, getDelegate, this.op, sinkInto(observer));
    }
});
const mapT = {
    map,
};
const scan = /*@__PURE__*/ createScanLiftOperator(liftT, class ScanAsyncEnumerator extends AbstractDelegatingAsyncEnumerator {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.op = scan$1(reducer, returns(acc));
    }
    sinkInto(observer) {
        pipe(this, getDelegate, this.op, sinkInto(observer));
    }
});
const scanT = {
    scan,
};
class ScanAsyncAsyncEnumerator extends AbstractDelegatingAsyncEnumerator {
    constructor(delegate, reducer, initialValue) {
        super(delegate);
        this.obs = pipe(delegate, scanAsync$1(reducer, initialValue), multicast(delegate.scheduler));
    }
    get observerCount() {
        return getObserverCount(this.obs);
    }
    get replay() {
        return getReplay(this.obs);
    }
    sinkInto(observer) {
        pipe(this.obs, sinkInto(observer));
    }
}
const scanAsync = (reducer, initialValue) => pipe((delegate) => pipe(ScanAsyncAsyncEnumerator, newInstanceWith(delegate, reducer, initialValue), bindTo(delegate)), lift);
const scanAsyncT = {
    scanAsync,
};
const takeWhile = /*@__PURE__*/ createTakeWhileLiftOperator(liftT, class TakeWhileAsyncEnumerator extends AbstractDelegatingAsyncEnumerator {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.obs = pipe(delegate, takeWhile$1(predicate, { inclusive }), multicast(delegate.scheduler), add(this));
    }
    get observerCount() {
        return getObserverCount(this.obs);
    }
    get replay() {
        return getReplay(this.obs);
    }
    sinkInto(observer) {
        pipe(this.obs, sinkInto(observer));
    }
});
const takeWhileT = {
    takeWhile,
};
const toObservable = () => enumerable => createObservable(observer => {
    const enumerator = pipe(enumerable, stream(getScheduler$1(observer)), addTo(observer));
    pipe(enumerator, onNotify(_ => {
        pipe(enumerator, dispatch(none));
    }), onSubscribe(() => {
        pipe(enumerator, dispatch(none));
    }), sinkInto(observer));
});
const toObservableT = {
    toObservable,
};
const TContainerOf = undefined;

export { TContainerOf, fromArray, fromArrayT, fromEnumerable, fromEnumerableT, fromIterable, fromIterableT, generate, generateT, keep, keepT, map, mapT, scan, scanAsync, scanAsyncT, scanT, takeWhile, takeWhileT, toObservable, toObservableT };
