'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
require('./disposable.js');
require('./readonlyArray.js');
var enumerable = require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
require('./dispatcher.js');
var streamable = require('./streamable.js');

const notify = (acc) => ({
    type: 1 /* Notify */,
    acc,
});
const done = (acc) => ({
    type: 2 /* Done */,
    acc,
});
const consumeImpl = (consumer, initial) => enumerable => observable.using(scheduler => {
    const enumerator = functions.pipe(enumerable, streamable.stream(scheduler));
    const accFeedback = observable.createSubject();
    return [accFeedback, enumerator];
}, (accFeedback, enumerator) => functions.pipe(enumerator, consumer(accFeedback), observable.onNotify(ev => {
    switch (ev.type) {
        case 1 /* Notify */:
            accFeedback.dispatch(ev.acc);
            enumerator.dispatch(option.none);
            break;
    }
}), observable.map(ev => ev.acc), observable.onSubscribe(() => {
    accFeedback.dispatch(initial());
    enumerator.dispatch(option.none);
})));
const consume = (consumer, initial) => consumeImpl(accObs => observable.zipWithLatestFrom(accObs, functions.flip(consumer)), initial);
const consumeAsync = (consumer, initial) => consumeImpl(accObs => functions.compose(observable.zipWithLatestFrom(accObs, (next, acc) => functions.pipe(consumer(acc, next), observable.takeFirst())), observable.switchAll()), initial);

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
    const fromValueWithDelay = observable.fromValue(options);
    return streamable.createStreamable(functions.compose(observable.scan(fromArrayScanner, functions.returns(startIndex - 1)), observable.concatMap(i => fromValueWithDelay(values[i])), observable.takeFirst({ count: endIndex - startIndex })));
};

const _fromEnumerable = (enumerable$1) => streamable.createStreamable(functions.compose(observable.withLatestFrom(observable.compute()(functions.defer(enumerable$1, enumerable.enumerate)), (_, enumerator) => enumerator), observable.onNotify(enumerable.move), observable.takeWhile(enumerable.hasCurrent), observable.map(enumerable.current)));
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
const _fromIterable = (iterable) => functions.pipe(iterable, enumerable.fromIterable(), fromEnumerable());
/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const fromIterable = () => _fromIterable;

const generateScanner = (generator) => (acc, _) => generator(acc);
const asyncGeneratorScanner = (generator, options) => {
    const fromValueWithDelay = observable.fromValue(options);
    return (acc, _) => functions.pipe(acc, generator, fromValueWithDelay);
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
        ? observable.scanAsync(asyncGeneratorScanner(generator, options), initialValue)
        : observable.scan(generateScanner(generator), initialValue);
    return streamable.createStreamable(op);
};

exports.consume = consume;
exports.consumeAsync = consumeAsync;
exports.done = done;
exports.fromArray = fromArray;
exports.fromEnumerable = fromEnumerable;
exports.fromIterable = fromIterable;
exports.generate = generate;
exports.notify = notify;
