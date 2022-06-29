/// <reference types="./asyncEnumerable.d.ts" />
import { AsyncEnumerator } from './asyncEnumerator.mjs';
import { createFromArray, fromValue, concatMap, concatWith } from './container.mjs';
import { dispatch } from './dispatcher.mjs';
import { addTo } from './disposable.mjs';
import { enumerate, fromIterable as fromIterable$1 } from './enumerable.mjs';
import { move, hasCurrent, current } from './enumerator.mjs';
import { newInstance, length, compose, increment, returns, pipe, flip } from './functions.mjs';
import { AbstractLiftable } from './liftable.mjs';
import { fromArrayT as fromArrayT$1, scan, mapT, concatAllT, takeFirst, withLatestFrom, using, concatT, never, onNotify, takeWhile, map, createObservable, createSubject, onSubscribe, zipWithLatestFrom, switchAll, scanAsync } from './observable.mjs';
import { scheduler } from './observer.mjs';
import { none } from './option.mjs';
import { getDelay } from './scheduler.mjs';
import { sinkInto } from './source.mjs';
import { stream } from './streamable.mjs';

class CreateAsyncEnumerable extends AbstractLiftable {
    constructor(stream) {
        super();
        this.stream = stream;
    }
}
const createAsyncEnumerable = (stream) => newInstance(CreateAsyncEnumerable, stream);
function createLiftedAsyncEnumerable(...ops) {
    const op = length(ops) > 1 ? compose(...ops) : ops[0];
    return createAsyncEnumerable((scheduler, options) => {
        var _a;
        const replay = (_a = options === null || options === void 0 ? void 0 : options.replay) !== null && _a !== void 0 ? _a : 0;
        return newInstance(AsyncEnumerator, op, scheduler, replay);
    });
}
/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
const fromArray = createFromArray((values, startIndex, endIndex, options) => {
    const fromValueWithDelay = fromValue(fromArrayT$1, options);
    return createLiftedAsyncEnumerable(scan(increment, returns(startIndex - 1)), concatMap({ ...mapT, ...concatAllT }, (i) => fromValueWithDelay(values[i])), takeFirst({ count: endIndex - startIndex }));
});
const fromArrayT = {
    fromArray,
};
const _fromEnumerable = (enumerable) => createLiftedAsyncEnumerable(withLatestFrom(using(() => enumerate(enumerable), compose(fromValue(fromArrayT$1), concatWith(concatT, never()))), (_, enumerator) => enumerator), onNotify(move), takeWhile(hasCurrent), map(current));
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
    }), sinkInto(observer));
});
const consume = (consumer, initial) => consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);
const consumeAsync = (consumer, initial) => consumeImpl(accObs => compose(zipWithLatestFrom(accObs, (next, acc) => pipe(consumer(acc, next), takeFirst())), switchAll()), initial);
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
        : scan(generateScanner(generator), initialValue));
};

export { consume, consumeAsync, consumeContinue, consumeDone, createAsyncEnumerable, createLiftedAsyncEnumerable, fromArray, fromArrayT, fromEnumerable, fromIterable, generate };
