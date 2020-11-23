'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
require('./readonlyArray.js');
var enumerable = require('./enumerable.js');
var runnable = require('./runnable.js');
var testing = require('./testing.js');
var monad_test = require('./monad.test.js');

const Enumerable = {
    concat: enumerable.concat,
    concatMap: enumerable.concatMap,
    distinctUntilChanged: enumerable.distinctUntilChanged,
    empty: enumerable.empty,
    endWith: enumerable.endWith,
    fromArray: enumerable.fromArray,
    fromValue: enumerable.fromValue,
    generate: enumerable.generate,
    keep: enumerable.keep,
    map: enumerable.map,
    mapTo: enumerable.mapTo,
    repeat: enumerable.repeat,
    scan: enumerable.scan,
    skipFirst: enumerable.skipFirst,
    startWith: enumerable.startWith,
    takeFirst: enumerable.takeFirst,
    takeLast: enumerable.takeLast,
    takeWhile: enumerable.takeWhile,
    toRunnable: enumerable.toRunnable,
};
const tests = testing.describe("enumerable", testing.test("toIterable", functions.defer([1, 2, 3], enumerable.fromArray(), enumerable.toIterable(), enumerable.fromIterable(), enumerable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.test("zip", functions.defer([1, 2, 3], enumerable.fromArray(), enumerable.zipWith(enumerable.fromArray()([1, 2, 3, 4, 5])), enumerable.map(([a, b]) => a + b), enumerable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([2, 4, 6]))), monad_test.createMonadTests(Enumerable));

exports.tests = tests;
