'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
var runnable = require('./runnable.js');
var testing = require('./testing.js');
var monad_test = require('./monad.test.js');

const Runnable = {
    concat: runnable.concat,
    concatMap: runnable.concatMap,
    distinctUntilChanged: runnable.distinctUntilChanged,
    empty: runnable.empty,
    endWith: runnable.endWith,
    fromArray: runnable.fromArray,
    fromValue: runnable.fromValue,
    generate: runnable.generate,
    keep: runnable.keep,
    map: runnable.map,
    mapTo: runnable.mapTo,
    repeat: runnable.repeat,
    scan: runnable.scan,
    skipFirst: runnable.skipFirst,
    startWith: runnable.startWith,
    takeFirst: runnable.takeFirst,
    takeLast: runnable.takeLast,
    takeWhile: runnable.takeWhile,
    toRunnable: runnable.toRunnable,
};
const tests = testing.describe("runnable", testing.describe("contains", testing.test("source is empty", functions.defer(runnable.empty(), runnable.contains(1), testing.expectFalse)), testing.test("source contains value", functions.defer(runnable.generate(functions.increment, functions.returns(0)), runnable.contains(1), testing.expectTrue)), testing.test("source does not contain value", functions.defer([2, 3, 4], runnable.fromArray(), runnable.contains(1), testing.expectFalse))), testing.describe("everySatisfy", testing.test("source is empty", functions.defer(runnable.empty(), runnable.everySatisfy(functions.alwaysFalse), testing.expectTrue)), testing.test("source values pass predicate", functions.defer([1, 2, 3], runnable.fromArray(), runnable.everySatisfy(functions.alwaysTrue), testing.expectTrue)), testing.test("source values fail predicate", functions.defer([1, 2, 3], runnable.fromArray(), runnable.everySatisfy(functions.alwaysFalse), testing.expectFalse))), testing.describe("first", testing.test("when enumerable is not empty", functions.defer(functions.returns(1), runnable.compute(), runnable.first, testing.expectEquals(1))), testing.test("when enumerable is empty", functions.defer(runnable.empty(), runnable.first, testing.expectNone))), testing.test("forEach", () => {
    const fn = testing.mockFn();
    functions.pipe([1, 2, 3], runnable.fromArray(), runnable.forEach(fn));
    functions.pipe(fn, testing.expectToHaveBeenCalledTimes(3));
}), testing.describe("noneSatisfy", testing.test("source is empty", functions.defer(runnable.empty(), runnable.noneSatisfy(functions.alwaysFalse), testing.expectTrue)), testing.test("source values pass predicate", functions.defer([1, 2, 3], runnable.fromArray(), runnable.noneSatisfy(functions.alwaysTrue), testing.expectFalse)), testing.test("source values fail predicate", functions.defer([1, 2, 3], runnable.fromArray(), runnable.noneSatisfy(functions.alwaysFalse), testing.expectTrue))), monad_test.createMonadTests(Runnable));

exports.tests = tests;
