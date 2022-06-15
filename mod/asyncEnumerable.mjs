/// <reference types="./asyncEnumerable.d.ts" />
import { pipe, flip, compose, returns, defer } from './functions.mjs';
import { X as using, m as createSubject, W as onNotify, I as map, D as onSubscribe, T as zipWithLatestFrom, j as takeFirst, J as switchAll, f as fromValue, Y as scan, Z as concatMap, P as withLatestFrom, N as compute, $ as takeWhile, F as scanAsync } from './observable-f1205acc.mjs';
import { none } from './option.mjs';
import { stream, createStreamable } from './streamable.mjs';
import { e as enumerate, c as move, h as hasCurrent, d as current, a as fromIterable$1 } from './enumerable-03c94f82.mjs';

const notify = (acc) => ({
    type: "notify",
    acc,
});
const done = (acc) => ({
    type: "done",
    acc,
});
const consumeImpl = (consumer, initial) => enumerable => using(scheduler => {
    const enumerator = pipe(enumerable, stream(scheduler));
    const accFeedback = createSubject();
    return [accFeedback, enumerator];
}, (accFeedback, enumerator) => pipe(enumerator, consumer(accFeedback), onNotify(ev => {
    switch (ev.type) {
        case "notify":
            accFeedback.dispatch(ev.acc);
            enumerator.dispatch(none);
            break;
    }
}), map(ev => ev.acc), onSubscribe(() => {
    accFeedback.dispatch(initial());
    enumerator.dispatch(none);
})));
const consume = (consumer, initial) => consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);
const consumeAsync = (consumer, initial) => consumeImpl(accObs => compose(zipWithLatestFrom(accObs, (next, acc) => pipe(consumer(acc, next), takeFirst())), switchAll()), initial);

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
    const fromValueWithDelay = fromValue(options);
    return createStreamable(compose(scan(fromArrayScanner, returns(startIndex - 1)), concatMap(i => fromValueWithDelay(values[i])), takeFirst({ count: endIndex - startIndex })));
};

const _fromEnumerable = (enumerable) => createStreamable(compose(withLatestFrom(compute()(defer(enumerable, enumerate)), (_, enumerator) => enumerator), onNotify(move), takeWhile(hasCurrent), map(current)));
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
    const fromValueWithDelay = fromValue(options);
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

export { consume, consumeAsync, done, fromArray, fromEnumerable, fromIterable, generate, notify };
