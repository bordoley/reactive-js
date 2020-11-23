'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
var runnable = require('./runnable.js');
var testing = require('./testing.js');

const createMonadTests = (m) => testing.describe("monadic", testing.test("concat", functions.defer(m.concat(m.empty(), m.fromArray()([1, 2, 3]), m.empty(), m.fromArray()([4, 5, 6])), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 4, 5, 6]))), testing.describe("distinctUntilChanged", testing.test("when source has duplicates in order", functions.defer([1, 2, 2, 2, 2, 3, 3, 3, 4], m.fromArray(), m.distinctUntilChanged(), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 4]))), testing.test("when source is empty", functions.defer([], m.fromArray(), m.distinctUntilChanged(), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([])))), testing.test("endWith", functions.defer([1, 2, 3], m.fromArray(), m.endWith(4), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 4]))), testing.test("concatMap", functions.defer(0, m.fromValue(), m.concatMap((_) => m.fromArray()([1, 2, 3])), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.test("keep", functions.defer([4, 8, 10, 7], m.fromArray(), m.keep((x) => x > 5), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([8, 10, 7]))), testing.test("map", functions.defer([1, 2, 3], m.fromArray(), m.map(functions.increment), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([2, 3, 4]))), testing.test("mapTo", functions.defer([1, 2, 3], m.fromArray(), m.mapTo(2), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([2, 2, 2]))), testing.describe("repeat", testing.test("when always repeating", functions.defer([1, 2, 3], m.fromArray(), m.repeat(), m.takeFirst({ count: 6 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 1, 2, 3]))), testing.test("when repeating a finite amount of times.", functions.defer([1, 2, 3], m.fromArray(), m.repeat(3), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), testing.test("when repeating with a predicate", functions.defer([1, 2, 3], m.fromArray(), m.repeat((x) => x < 1), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3])))), testing.test("scan", functions.defer([1, 1, 1], m.fromArray(), m.scan(functions.sum, functions.returns(0)), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.describe("skipFirst", testing.test("when skipped source has additional elements", functions.defer([1, 2, 3], m.fromArray(), m.skipFirst({ count: 2 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([3]))), testing.test("when all elements are skipped", functions.defer([1, 2, 3], m.fromArray(), m.skipFirst({ count: 4 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([])))), testing.test("startWith", functions.defer([1, 2, 3], m.fromArray(), m.startWith(0), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([0, 1, 2, 3]))), testing.describe("takeFirst", testing.test("when taking fewer than the total number of elements in the source", functions.defer(m.generate(functions.increment, functions.returns(0)), m.takeFirst({ count: 3 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.test("when taking more than all the items produced by the source", functions.defer(1, m.fromValue(), m.takeFirst({ count: 3 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1])))), testing.test("takeLast", functions.defer([1, 2, 3, 4, 5], m.fromArray(), m.takeLast({ count: 3 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([3, 4, 5]))), testing.describe("takeWhile", testing.test("exclusive", () => {
    functions.pipe(m.generate(functions.increment, functions.returns(0)), m.takeWhile((x) => x < 4), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]));
    functions.pipe([1, 2, 3], m.fromArray(), m.takeWhile(functions.alwaysTrue), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]));
    functions.pipe(m.empty(), m.takeWhile(functions.alwaysTrue), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([]));
}), testing.test("inclusive", functions.defer(m.generate(functions.increment, functions.returns(0)), m.takeWhile((x) => x < 4, { inclusive: true }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 4])))), testing.test("lift", functions.defer(m.generate(functions.increment, functions.returns(0)), m.map((x) => x * 2), m.takeFirst({ count: 3 }), m.concatMap((count) => functions.pipe(m.generate(functions.incrementBy(1), functions.returns(0)), m.takeFirst({ count }))), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6]))));

exports.createMonadTests = createMonadTests;
