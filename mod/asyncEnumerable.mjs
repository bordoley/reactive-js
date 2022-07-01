/// <reference types="./asyncEnumerable.d.ts" />
import { pipe, newInstance, length, compose, flip, increment, returns, pipeLazy } from './functions.mjs';
import { AbstractLiftable, covariant, createKeepLiftOperator, createMapLiftOperator, createScanLiftOperator } from './liftable.mjs';
import { stream } from './streamable.mjs';
import { AsyncEnumerator, AbstractDelegatingAsyncEnumerator } from './asyncEnumerator.mjs';
import { createFromArray, fromValue, concatMap, concatWith } from './container.mjs';
import { dispatch } from './dispatcher.mjs';
import { add, addTo } from './disposable.mjs';
import { enumerate, fromIterable as fromIterable$1 } from './enumerable.mjs';
import { move, hasCurrent, current } from './enumerator.mjs';
import { Subject, publish, observerCount, replay, createObservable, onNotify, map as map$1, onSubscribe, zipWithLatestFrom, takeFirst, switchAll, fromArrayT as fromArrayT$1, scan as scan$1, mapT as mapT$1, concatAllT, withLatestFrom, using, concatT, never, takeWhile, scanAsync, keep as keep$1 } from './observable.mjs';
import { scheduler } from './observer.mjs';
import { none } from './option.mjs';
import { getDelay } from './scheduler.mjs';
import { sinkInto } from './source.mjs';

class LiftedAsyncEnumerable extends AbstractLiftable {
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
    variance: covariant,
    lift,
};

class CreateAsyncEnumerable extends AbstractLiftable {
    constructor(stream) {
        super();
        this.stream = stream;
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
        const observable = pipe(subject, op, publish(scheduler, { replay }));
        this.dispatcher = subject;
        this.observable = observable;
        return pipe(this, add(subject), addTo(this.observable));
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
        pipe(this.observable, sinkInto(observer));
    }
}
function createLiftedAsyncEnumerable(...ops) {
    const op = length(ops) > 1 ? compose(...ops) : ops[0];
    return createAsyncEnumerable((scheduler, options) => {
        var _a;
        const replay = (_a = options === null || options === void 0 ? void 0 : options.replay) !== null && _a !== void 0 ? _a : 0;
        return newInstance(LiftedAsyncEnumerator, op, scheduler, replay);
    });
}
const consumeContinue = (data) => ({
    type: "continue",
    data,
});
const consumeDone = (data) => ({
    type: "done",
    data,
});
const consumeImpl = (consumer, initial) => enumerable => createObservable(observer => {
    const enumerator = pipe(enumerable, stream(scheduler(observer)), addTo(observer));
    const accFeedback = pipe(newInstance(Subject), addTo(observer));
    pipe(enumerator, consumer(accFeedback), onNotify(ev => {
        switch (ev.type) {
            case "continue":
                pipe(accFeedback, dispatch(ev.data));
                pipe(enumerator, dispatch(none));
                break;
        }
    }), map$1(ev => ev.data), onSubscribe(() => {
        pipe(accFeedback, dispatch(initial()));
        pipe(enumerator, dispatch(none));
    }), sinkInto(observer));
});
const consume = (consumer, initial) => consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);
const consumeAsync = (consumer, initial) => consumeImpl(accObs => compose(zipWithLatestFrom(accObs, (next, acc) => pipe(consumer(acc, next), takeFirst())), switchAll()), initial);
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
const _fromEnumerable = (enumerable) => createLiftedAsyncEnumerable(withLatestFrom(using(pipeLazy(enumerable, enumerate), compose(fromValue(fromArrayT$1), concatWith(concatT, never()))), (_, enumerator) => enumerator), onNotify(move), takeWhile(hasCurrent), map$1(current));
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromEnumerable = () => _fromEnumerable;
const _fromIterable = (iterable) => pipe(iterable, fromIterable$1(), fromEnumerable());
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromIterable = () => _fromIterable;
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
        ? scanAsync(asyncGeneratorScanner(generator, options), initialValue)
        : scan$1(generateScanner(generator), initialValue));
};
const keep = /*@__PURE__*/ createKeepLiftOperator(liftT, class KeepAsyncEnumerator extends AbstractDelegatingAsyncEnumerator {
    constructor(delegate, predicate) {
        super(delegate);
        this.obs = pipe(delegate, onNotify(x => {
            if (!predicate(x)) {
                pipe(this.delegate, dispatch(none));
            }
        }), keep$1(predicate), publish(delegate.scheduler));
    }
    get observerCount() {
        return observerCount(this.obs);
    }
    get replay() {
        return replay(this.obs);
    }
    sink(observer) {
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
    sink(observer) {
        pipe(this.delegate, this.op, sinkInto(observer));
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
    sink(observer) {
        pipe(this.delegate, this.op, sinkInto(observer));
    }
});
const scanT = {
    scan,
};
const toObservable = () => enumerable => createObservable(observer => {
    const enumerator = pipe(enumerable, stream(scheduler(observer)), addTo(observer));
    pipe(enumerator, onNotify(_ => {
        pipe(enumerator, dispatch(none));
    }), onSubscribe(() => {
        pipe(enumerator, dispatch(none));
    }), sinkInto(observer));
});
const toObservableT = {
    toObservable,
};
const type = undefined;

export { consume, consumeAsync, consumeContinue, consumeDone, fromArray, fromArrayT, fromEnumerable, fromIterable, generate, keep, keepT, map, mapT, scan, scanT, toObservable, toObservableT, type };
