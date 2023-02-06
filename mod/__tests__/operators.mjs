/// <reference types="./operators.d.ts" />
import { throws, concatMap, concatWith, encodeUtf8, endWith, genMap, ignoreElements, mapTo, contains, startWith, zipWith } from '../containers/Container.mjs';
import { empty } from '../containers/ReadonlyArray.mjs';
import { pipeLazy, arrayEquality, pipe, alwaysFalse, alwaysTrue, none, increment, returns, sum } from '../functions.mjs';
import { describe as createDescribe, test as createTest, expectArrayEquals, expectEquals, expectToThrowError } from './testing.mjs';

const bufferTests = (m) => createDescribe("buffer", createTest("with multiple sub buffers", pipeLazy([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromArray(), m.buffer({ maxBufferSize: 3 }), m.toReadonlyArray(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
], arrayEquality()))), createTest("last buffer is short", pipeLazy([1, 2, 3, 4, 5, 6, 7, 8], m.fromArray(), m.buffer({ maxBufferSize: 3 }), m.toReadonlyArray(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
], arrayEquality()))));
const catchErrorTests = (m) => createDescribe("catchError", createTest("when source throws", () => {
    const e = {};
    pipe(() => e, throws(m), m.catchError(_ => pipe([1, 2, 3], m.fromArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
}), createTest("when source does not throw", pipeLazy([4, 5, 6], m.fromArray(), m.catchError(_ => pipe([1, 2, 3], m.fromArray())), m.toReadonlyArray(), expectArrayEquals([4, 5, 6]))));
const concatTests = (m) => createDescribe("concat", createTest("concats the input containers in order", pipeLazy(m.concat(pipe([1, 2, 3], m.fromArray()), pipe([4, 5, 6], m.fromArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))));
const concatAllTests = (m) => createDescribe("concatAll", createTest("concats the input containers in order", pipeLazy([pipe([1, 2, 3], m.fromArray()), pipe([4, 5, 6], m.fromArray())], m.fromArray(), m.concatAll(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), createTest("when an inner enumerator throw", () => {
    // FIXME: Implement me
}));
const concatMapTests = (m) => createDescribe("concatMap", createTest("maps each value to a container and flattens", pipeLazy([0, 1], m.fromArray(), concatMap(m, pipeLazy([1, 2, 3], m.fromArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
const concatWithTests = (m) => createDescribe("concatWith", createTest("concats two containers together", pipeLazy([0, 1], m.fromArray(), concatWith(m, pipe([2, 3, 4], m.fromArray())), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4]))));
const decodeWithCharsetTests = (m) => createDescribe("decodeWithCharset", createTest("decoding ascii", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], m.fromArray(), encodeUtf8(m), m.decodeWithCharset(), m.toReadonlyArray(), x => x.join(), expectEquals(str));
}), createTest("decoding multi-byte code points", () => {
    const str = String.fromCodePoint(8364);
    pipe([str], m.fromArray(), encodeUtf8(m), m.decodeWithCharset(), m.toReadonlyArray(), x => x.join(), expectEquals(str));
}));
const distinctUntilChangedTests = (m) => createDescribe("distinctUntilChanged", createTest("when source has duplicates in order", pipeLazy([1, 2, 2, 2, 2, 3, 3, 3, 4], m.fromArray(), m.distinctUntilChanged(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), createTest("when source is empty", pipeLazy([], m.fromArray(), m.distinctUntilChanged(), m.toReadonlyArray(), expectArrayEquals([]))), createTest("when equality operator throws", () => {
    const err = new Error();
    const equality = (_a, _b) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromArray(), m.distinctUntilChanged({ equality }), m.toReadonlyArray()), expectToThrowError(err));
}));
const endWithTests = (m) => createDescribe("endWith", createTest("appends the additional values to the end of the container", pipeLazy([0, 1], m.fromArray(), endWith(m, 2, 3, 4), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4]))));
const everySatisfyTests = (m) => createDescribe("everySatisfy", createTest("source is empty", pipeLazy([], m.fromArray(), m.everySatisfy(alwaysFalse), m.toReadonlyArray(), expectArrayEquals([true]))), createTest("source values pass predicate", pipeLazy([1, 2, 3], m.fromArray(), m.everySatisfy(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([true]))), createTest("source values fail predicate", pipeLazy([1, 2, 3], m.fromArray(), m.everySatisfy(alwaysFalse), m.toReadonlyArray(), expectArrayEquals([false]))));
const forEachTests = (m) => createDescribe("forEach", createTest("invokes the effect for each notified value", () => {
    const result = [];
    pipe([1, 2, 3], m.fromArray(), m.forEach(x => {
        result.push(x + 10);
    }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe(result, expectArrayEquals([11, 12, 13]));
}), createTest("when the effect function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], m.fromArray(), m.forEach(_ => {
        throw err;
    }), m.toReadonlyArray()), expectToThrowError(err));
}));
const genMapTests = (m) => createDescribe("genMap", createTest("maps the incoming value with the inline generator function", pipeLazy([none, none], m.fromArray(), genMap(m, function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
const ignoreElementsTests = (m) => createDescribe("ignoreElements", createTest("ignores all elements", pipeLazy([1, 2, 3], m.fromArray(), ignoreElements(m), m.toReadonlyArray(), expectArrayEquals(empty()))));
const keepTests = (m) => createDescribe("keep", createTest("keeps only values greater than 5", pipeLazy([4, 8, 10, 7], m.fromArray(), m.keep(x => x > 5), m.toReadonlyArray(), expectArrayEquals([8, 10, 7]))), createTest("when predicate throws", () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromArray(), m.keep(predicate), m.toReadonlyArray()), expectToThrowError(err));
}));
const mapTests = (m) => createDescribe("map", createTest("maps every value", pipeLazy([1, 2, 3], m.fromArray(), m.map(increment), m.toReadonlyArray(), expectArrayEquals([2, 3, 4]))), createTest("when mapper throws", () => {
    const err = new Error();
    const mapper = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromArray(), m.map(mapper), m.toReadonlyArray()), expectToThrowError(err));
}));
const mapToTests = (m) => createDescribe("mapTo", createTest("maps every value in the source to v", pipeLazy([1, 2, 3], m.fromArray(), mapTo(m, 2), m.toReadonlyArray(), expectArrayEquals([2, 2, 2]))));
const pairwiseTests = (m) => createDescribe("pairwise", createTest("when there are more than one input value", pipeLazy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromArray(), m.pairwise(), m.toReadonlyArray(), expectArrayEquals([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
], arrayEquality()))), createTest("when the input only provides 1 value", pipeLazy([0], m.fromArray(), m.pairwise(), m.toReadonlyArray(), expectArrayEquals([], arrayEquality()))));
const reduceTests = (m) => createDescribe("reduce", createTest("summing all values", pipeLazy([1, 2, 3], m.fromArray(), m.reduce((acc, next) => acc + next, returns(0)), m.toReadonlyArray(), expectArrayEquals([6]))));
const repeatTests = (m) => createDescribe("repeat", createTest("when always repeating", pipeLazy([1, 2, 3], m.fromArray(), m.repeat(), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), createTest("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromArray(), m.repeat(3), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), createTest("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromArray(), m.repeat(x => x < 1), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), createTest("when the repeat function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], m.fromArray(), m.repeat(_ => {
        throw err;
    }), m.toReadonlyArray()), expectToThrowError(err));
}));
const scanTests = (m) => createDescribe("scan", createTest("sums all the values in the array emitting intermediate values.", pipeLazy([1, 1, 1], m.fromArray(), m.scan(sum, returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), createTest("throws when the scan function throws", () => {
    const err = new Error();
    const scanner = (_acc, _next) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromArray(), m.scan(scanner, returns(0)), m.toReadonlyArray()), expectToThrowError(err));
}), createTest("throws when the initial value function throws", () => {
    const err = new Error();
    const initialValue = () => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromArray(), m.scan(sum, initialValue), m.toReadonlyArray()), expectToThrowError(err));
}));
const scanAsyncTests = (m, mInner) => createDescribe("scanAsync", createTest("fast lib, slow acc", pipeLazy([1, 2, 3], m.fromArray(), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromArray({ delay: 4 })), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))), createTest("slow lib, fast acc", pipeLazy([1, 2, 3], m.fromArray({ delay: 4 }), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromArray({ delay: 4 })), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))), createTest("slow lib, slow acc", pipeLazy([1, 2, 3], m.fromArray({ delay: 4 }), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromArray({ delay: 4 })), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))), createTest("fast lib, fast acc", pipeLazy([1, 2, 3], m.fromArray(), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromArray()), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))));
const skipFirstTests = (m) => createDescribe("skipFirst", createTest("when skipped source has additional elements", pipeLazy([1, 2, 3], m.fromArray(), m.skipFirst({ count: 2 }), m.toReadonlyArray(), expectArrayEquals([3]))), createTest("when all elements are skipped", pipeLazy([1, 2, 3], m.fromArray(), m.skipFirst({ count: 4 }), m.toReadonlyArray(), expectArrayEquals(empty()))));
const someSatisfyTests = (m) => createDescribe("someSatisfy", createTest("source is empty", pipeLazy([], m.fromArray(), contains(m, 1), m.toReadonlyArray(), expectArrayEquals([false]))), createTest("source contains value", pipeLazy([0, 1, 2], m.fromArray(), contains(m, 1), m.toReadonlyArray(), expectArrayEquals([true]))), createTest("source does not contain value", pipeLazy([2, 3, 4], m.fromArray(), contains(m, 1), m.toReadonlyArray(), expectArrayEquals([false]))));
const startWithTests = (m) => createDescribe("startWith", createTest("appends the additional values to the start of the container", pipeLazy([0, 1], m.fromArray(), startWith(m, 2, 3, 4), m.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1]))));
const takeFirstTests = (m) => createDescribe("takeFirst", createTest("when taking fewer than the total number of elements in the source", pipeLazy([1, 2, 3, 4, 5], m.fromArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), createTest("when taking more than all the items produced by the source", pipeLazy([1, 2], m.fromArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2]))), createTest("when source is empty", pipeLazy([], m.fromArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([]))), createTest("with default count", pipeLazy([1, 2, 3], m.fromArray(), m.takeFirst(), m.toReadonlyArray(), expectArrayEquals([1]))), createTest("when count is 0", pipeLazy([1, 2, 3], m.fromArray(), m.takeFirst({ count: 0 }), m.toReadonlyArray(), expectArrayEquals([]))));
const takeLastTests = (m) => createDescribe("takeLast", createTest("when count is less than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromArray(), m.takeLast({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([3, 4, 5]))), createTest("when count is greater than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromArray(), m.takeLast({ count: 10 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), createTest("with default count", pipeLazy([1, 2, 3, 4, 5], m.fromArray(), m.takeLast(), m.toReadonlyArray(), expectArrayEquals([5]))));
const takeWhileTests = (m) => createDescribe("takeWhile", createTest("exclusive", () => {
    pipe([1, 2, 3, 4, 5], m.fromArray(), m.takeWhile(x => x < 4), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([1, 2, 3], m.fromArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([], m.fromArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals(empty()));
}), createTest("inclusive", pipeLazy([1, 2, 3, 4, 5, 6], m.fromArray(), m.takeWhile(x => x < 4, { inclusive: true }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), createTest("when predicate throws", () => {
    const err = new Error();
    const predicate = (_) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromArray(), m.takeWhile(predicate), m.toReadonlyArray()), expectToThrowError(err));
}));
const throwIfEmptyTests = (m) => createDescribe("throwIfEmpty", createTest("when source is empty", () => {
    const error = new Error();
    pipe(pipeLazy([], m.fromArray(), m.throwIfEmpty(() => error), m.toReadonlyArray()), expectToThrowError(error));
}), createTest("when factory throw", () => {
    const error = new Error();
    pipe(pipeLazy([], m.fromArray(), m.throwIfEmpty(() => {
        throw error;
    }), m.toReadonlyArray()), expectToThrowError(error));
}), createTest("when source is not empty", pipeLazy([1], m.fromArray(), m.throwIfEmpty(() => undefined), m.toReadonlyArray(), expectArrayEquals([1]))));
const zipTests = (m) => createDescribe("zip", createTest("when all inputs are the same length", pipeLazy(m.zip(pipe([1, 2, 3, 4, 5], m.fromArray()), pipe([5, 4, 3, 2, 1], m.fromArray())), m.toReadonlyArray(), expectArrayEquals([
    [1, 5],
    [2, 4],
    [3, 3],
    [4, 2],
    [5, 1],
], arrayEquality()))), createTest("when inputs are different length", pipeLazy(m.zip(pipe([1, 2, 3], m.fromArray()), pipe([5, 4, 3, 2, 1], m.fromArray()), pipe([1, 2, 3, 4], m.fromArray())), m.toReadonlyArray(), expectArrayEquals([
    [1, 5, 1],
    [2, 4, 2],
    [3, 3, 3],
], arrayEquality()))));
const zipWithTests = (m) => createDescribe("zipWith", createTest("when inputs are different lengths", pipeLazy([1, 2, 3], m.fromArray(), zipWith(m, pipe([1, 2, 3, 4], m.fromArray())), m.toReadonlyArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality()))));

export { bufferTests, catchErrorTests, concatAllTests, concatMapTests, concatTests, concatWithTests, decodeWithCharsetTests, distinctUntilChangedTests, endWithTests, everySatisfyTests, forEachTests, genMapTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, reduceTests, repeatTests, scanAsyncTests, scanTests, skipFirstTests, someSatisfyTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipTests, zipWithTests };
