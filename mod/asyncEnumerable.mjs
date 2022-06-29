/// <reference types="./asyncEnumerable.d.ts" />
import { createFromArray, fromValue, concatMap, concatWith } from './container.mjs';
import { dispatch } from './dispatcher.mjs';
import { addTo } from './disposable.mjs';
import { enumerate, fromIterable as fromIterable$1 } from './enumerable.mjs';
import { move, hasCurrent, current } from './enumerator.mjs';
import { increment, returns, compose, pipe, flip } from './functions.mjs';
import { fromArrayT as fromArrayT$1, scan, mapT, concatAllT, takeFirst, withLatestFrom, using, concatT, never, onNotify, takeWhile, map, createObservable, createSubject, onSubscribe, zipWithLatestFrom, switchAll, scanAsync } from './observable.mjs';
import { scheduler } from './observer.mjs';
import { none } from './option.mjs';
import { getDelay } from './scheduler.mjs';
import { sinkInto } from './source.mjs';
import { createLiftedStreamable, stream } from './streamable.mjs';

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
const fromArray = createFromArray((values, startIndex, endIndex, options) => {
    const fromValueWithDelay = fromValue(fromArrayT$1, options);
    return createLiftedStreamable(scan(increment, returns(startIndex - 1)), concatMap({ ...mapT, ...concatAllT }, (i) => fromValueWithDelay(values[i])), takeFirst({ count: endIndex - startIndex }));
});
const fromArrayT = {
    fromArray,
};
const _fromEnumerable = (enumerable) => createLiftedStreamable(withLatestFrom(using(() => enumerate(enumerable), compose(fromValue(fromArrayT$1), concatWith(concatT, never()))), (_, enumerator) => enumerator), onNotify(move), takeWhile(hasCurrent), map(current));
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
    return createLiftedStreamable(delay > 0
        ? scanAsync(asyncGeneratorScanner(generator, options), initialValue)
        : scan(generateScanner(generator), initialValue));
};

export { consume, consumeAsync, consumeContinue, consumeDone, fromArray, fromArrayT, fromEnumerable, fromIterable, generate };
