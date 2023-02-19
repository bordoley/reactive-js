/// <reference types="./operators.d.ts" />
import Container from '../containers/Container.mjs';
import ReadonlyArray from '../containers/ReadonlyArray.mjs';
import { pipeLazy, arrayEquality, pipe, returns, alwaysFalse, alwaysTrue, none, increment, sum } from '../functions.mjs';
import Enumerable from '../ix/Enumerable.mjs';
import EnumerableObservable from '../rx/EnumerableObservable.mjs';
import Observable from '../rx/Observable.mjs';
import RunnableObservable from '../rx/RunnableObservable.mjs';
import { __now } from '../scheduling/Continuation.mjs';
import Scheduler from '../scheduling/Scheduler.mjs';
import Disposable from '../util/Disposable.mjs';
import { describe as createDescribe, test as createTest, expectArrayEquals, expectEquals, expectToThrowError, testAsync } from './testing.mjs';

const bufferTests = (m) => createDescribe("buffer", createTest("with multiple sub buffers", pipeLazy([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray(), m.buffer({ maxBufferSize: 3 }), m.toReadonlyArray(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
], arrayEquality()))), createTest("last buffer is short", pipeLazy([1, 2, 3, 4, 5, 6, 7, 8], m.fromReadonlyArray(), m.buffer({ maxBufferSize: 3 }), m.toReadonlyArray(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
], arrayEquality()))));
const catchErrorTests = (m) => createDescribe("catchError", createTest("when source throws", () => {
    const e = {};
    pipe(Container.throws(m, { raise: returns(e) }), m.catchError(_ => pipe([1, 2, 3], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
}), createTest("when source does not throw", pipeLazy([4, 5, 6], m.fromReadonlyArray(), m.catchError(_ => pipe([1, 2, 3], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([4, 5, 6]))));
const concatTests = (m) => createDescribe("concat", createTest("concats the input containers in order", pipeLazy(m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([4, 5, 6], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))));
const concatAllTests = (m) => createDescribe("concatAll", createTest("concats the input containers in order", pipeLazy([
    pipe([1, 2, 3], m.fromReadonlyArray()),
    pipe([4, 5, 6], m.fromReadonlyArray()),
], m.fromReadonlyArray(), m.concatAll(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), createTest("when an inner enumerator throw", () => {
    // FIXME: Implement me
}));
const concatMapTests = (m) => createDescribe("concatMap", createTest("maps each value to a container and flattens", pipeLazy([0, 1], m.fromReadonlyArray(), Container.concatMap(m, pipeLazy([1, 2, 3], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
const concatWithTests = (m) => createDescribe("concatWith", createTest("concats two containers together", pipeLazy([0, 1], m.fromReadonlyArray(), Container.concatWith(m, pipe([2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4]))));
const decodeWithCharsetTests = (m) => createDescribe("decodeWithCharset", createTest("decoding ascii", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    pipe([str], m.fromReadonlyArray(), Container.encodeUtf8(m), m.decodeWithCharset(), m.toReadonlyArray(), x => x.join(), expectEquals(str));
}), createTest("decoding multi-byte code points", () => {
    const str = String.fromCodePoint(8364);
    pipe([str], m.fromReadonlyArray(), Container.encodeUtf8(m), m.decodeWithCharset(), m.toReadonlyArray(), x => x.join(), expectEquals(str));
}));
const distinctUntilChangedTests = (m) => createDescribe("distinctUntilChanged", createTest("when source has duplicates in order", pipeLazy([1, 2, 2, 2, 2, 3, 3, 3, 4], m.fromReadonlyArray(), m.distinctUntilChanged(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), createTest("when source is empty", pipeLazy([], m.fromReadonlyArray(), m.distinctUntilChanged(), m.toReadonlyArray(), expectArrayEquals([]))), createTest("when equality operator throws", () => {
    const err = new Error();
    const equality = (_a, _b) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.distinctUntilChanged({ equality }), m.toReadonlyArray()), expectToThrowError(err));
}));
const endWithTests = (m) => createDescribe("endWith", createTest("appends the additional values to the end of the container", pipeLazy([0, 1], m.fromReadonlyArray(), Container.endWith(m, 2, 3, 4), m.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4]))));
const everySatisfyTests = (m) => createDescribe("everySatisfy", createTest("source is empty", pipeLazy([], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), m.toReadonlyArray(), expectArrayEquals([true]))), createTest("source values pass predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([true]))), createTest("source values fail predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.everySatisfy(alwaysFalse), m.toReadonlyArray(), expectArrayEquals([false]))));
const forEachTests = (m) => createDescribe("forEach", createTest("invokes the effect for each notified value", () => {
    const result = [];
    pipe([1, 2, 3], m.fromReadonlyArray(), m.forEach(x => {
        result.push(x + 10);
    }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe(result, expectArrayEquals([11, 12, 13]));
}), createTest("when the effect function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.forEach(_ => {
        throw err;
    }), m.toReadonlyArray()), expectToThrowError(err));
}));
const fromReadonlyArrayTests = (m) => createDescribe("fromReadonlyArray", createTest("negative count with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -3, start: 4 }), m.toReadonlyArray(), expectArrayEquals([5, 4, 3]));
}), createTest("positive count with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 3, start: 4 }), m.toReadonlyArray(), expectArrayEquals([5, 6, 7]));
}), createTest("negative count exceeding bounds with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -100, start: 3 }), m.toReadonlyArray(), expectArrayEquals([4, 3, 2, 1]));
}), createTest("positive count exceeding bounds with start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 100, start: 7 }), m.toReadonlyArray(), expectArrayEquals([8, 9]));
}), createTest("negative count without start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: -3 }), m.toReadonlyArray(), expectArrayEquals([9, 8, 7]));
}), createTest("positive count without start index", () => {
    pipe([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
}));
const genMapTests = (m) => createDescribe("genMap", createTest("maps the incoming value with the inline generator function", pipeLazy([none, none], m.fromReadonlyArray(), Container.genMap(m, function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
const ignoreElementsTests = (m) => createDescribe("ignoreElements", createTest("ignores all elements", pipeLazy([1, 2, 3], m.fromReadonlyArray(), Container.ignoreElements(m), m.toReadonlyArray(), expectArrayEquals(ReadonlyArray.empty()))));
const keepTests = (m) => createDescribe("keep", createTest("keeps only values greater than 5", pipeLazy([4, 8, 10, 7], m.fromReadonlyArray(), m.keep(x => x > 5), m.toReadonlyArray(), expectArrayEquals([8, 10, 7]))), createTest("when predicate throws", () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.keep(predicate), m.toReadonlyArray()), expectToThrowError(err));
}));
const mapTests = (m) => createDescribe("map", createTest("maps every value", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.map(increment), m.toReadonlyArray(), expectArrayEquals([2, 3, 4]))), createTest("when mapper throws", () => {
    const err = new Error();
    const mapper = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.map(mapper), m.toReadonlyArray()), expectToThrowError(err));
}));
const mapToTests = (m) => createDescribe("mapTo", createTest("maps every value in the source to v", pipeLazy([1, 2, 3], m.fromReadonlyArray(), Container.mapTo(m, 2), m.toReadonlyArray(), expectArrayEquals([2, 2, 2]))));
const pairwiseTests = (m) => createDescribe("pairwise", createTest("when there are more than one input value", pipeLazy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromReadonlyArray(), m.pairwise(), m.toReadonlyArray(), expectArrayEquals([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
], arrayEquality()))), createTest("when the input only provides 1 value", pipeLazy([0], m.fromReadonlyArray(), m.pairwise(), m.toReadonlyArray(), expectArrayEquals([], arrayEquality()))));
const reduceTests = (m) => createDescribe("reduce", createTest("summing all values", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.reduce((acc, next) => acc + next, returns(0)), m.toReadonlyArray(), expectArrayEquals([6]))));
const repeatTests = (m) => createDescribe("repeat", createTest("when always repeating", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), createTest("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(3), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), createTest("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(x => x < 1), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), createTest("when the repeat function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.repeat(_ => {
        throw err;
    }), m.toReadonlyArray()), expectToThrowError(err));
}));
const retryTests = (m) => createDescribe("retry", createTest("retrys the container on an exception", pipeLazy(m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), Container.throws(m)), m.retry(), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))));
const scanTests = (m) => createDescribe("scan", createTest("sums all the values in the array emitting intermediate values.", pipeLazy([1, 1, 1], m.fromReadonlyArray(), m.scan(sum, returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), createTest("throws when the scan function throws", () => {
    const err = new Error();
    const scanner = (_acc, _next) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.scan(scanner, returns(0)), m.toReadonlyArray()), expectToThrowError(err));
}), createTest("throws when the initial value function throws", () => {
    const err = new Error();
    const initialValue = () => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.scan(sum, initialValue), m.toReadonlyArray()), expectToThrowError(err));
}));
const scanAsyncTests = (m, mInner) => createDescribe("scanAsync", createTest("fast lib, slow acc", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))), createTest("slow lib, fast acc", pipeLazy([1, 2, 3], m.fromReadonlyArray({ delay: 4 }), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))), createTest("slow lib, slow acc", pipeLazy([1, 2, 3], m.fromReadonlyArray({ delay: 4 }), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))), createTest("fast lib, fast acc", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.scanAsync((acc, x) => pipe([x + acc], mInner.fromReadonlyArray()), returns(0)), m.toReadonlyArray(), expectArrayEquals([1, 3, 6]))));
const skipFirstTests = (m) => createDescribe("skipFirst", createTest("when skipped source has additional elements", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.skipFirst({ count: 2 }), m.toReadonlyArray(), expectArrayEquals([3]))), createTest("when all elements are skipped", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.skipFirst({ count: 4 }), m.toReadonlyArray(), expectArrayEquals(ReadonlyArray.empty()))));
const someSatisfyTests = (m) => createDescribe("someSatisfy", createTest("source is empty", pipeLazy([], m.fromReadonlyArray(), Container.contains(m, 1), m.toReadonlyArray(), expectArrayEquals([false]))), createTest("source contains value", pipeLazy([0, 1, 2], m.fromReadonlyArray(), Container.contains(m, 1), m.toReadonlyArray(), expectArrayEquals([true]))), createTest("source does not contain value", pipeLazy([2, 3, 4], m.fromReadonlyArray(), Container.contains(m, 1), m.toReadonlyArray(), expectArrayEquals([false]))));
const startWithTests = (m) => createDescribe("startWith", createTest("appends the additional values to the start of the container", pipeLazy([0, 1], m.fromReadonlyArray(), Container.startWith(m, 2, 3, 4), m.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1]))));
const takeFirstTests = (m) => createDescribe("takeFirst", createTest("when taking fewer than the total number of elements in the source", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), createTest("when taking more than all the items produced by the source", pipeLazy([1, 2], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2]))), createTest("when source is empty", pipeLazy([], m.fromReadonlyArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([]))), createTest("with default count", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.takeFirst(), m.toReadonlyArray(), expectArrayEquals([1]))), createTest("when count is 0", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.takeFirst({ count: 0 }), m.toReadonlyArray(), expectArrayEquals([]))));
const takeLastTests = (m) => createDescribe("takeLast", createTest("when count is less than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeLast({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([3, 4, 5]))), createTest("when count is greater than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeLast({ count: 10 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), createTest("with default count", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeLast(), m.toReadonlyArray(), expectArrayEquals([5]))));
const takeWhileTests = (m) => createDescribe("takeWhile", createTest("exclusive", () => {
    pipe([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.takeWhile(x => x < 4), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([1, 2, 3], m.fromReadonlyArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([], m.fromReadonlyArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals(ReadonlyArray.empty()));
}), createTest("inclusive", pipeLazy([1, 2, 3, 4, 5, 6], m.fromReadonlyArray(), m.takeWhile(x => x < 4, { inclusive: true }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), createTest("when predicate throws", () => {
    const err = new Error();
    const predicate = (_) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.takeWhile(predicate), m.toReadonlyArray()), expectToThrowError(err));
}));
const throwIfEmptyTests = (m) => createDescribe("throwIfEmpty", createTest("when source is empty", () => {
    const error = new Error();
    pipe(pipeLazy([], m.fromReadonlyArray(), m.throwIfEmpty(() => error), m.toReadonlyArray()), expectToThrowError(error));
}), createTest("when factory throw", () => {
    const error = new Error();
    pipe(pipeLazy([], m.fromReadonlyArray(), m.throwIfEmpty(() => {
        throw error;
    }), m.toReadonlyArray()), expectToThrowError(error));
}), createTest("when source is not empty", pipeLazy([1], m.fromReadonlyArray(), m.throwIfEmpty(() => undefined), m.toReadonlyArray(), expectArrayEquals([1]))));
const toEnumerableTests = (m) => createDescribe("toEnumerable", createTest("with an enumerable observable", pipeLazy([1, 2, 3, 4], m.fromReadonlyArray(), m.toEnumerable(), Enumerable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))));
const toEnumerableObservableTests = (m) => createDescribe("toEnumerableObservable", createTest("without delay", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.toEnumerableObservable(), EnumerableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))));
const toObservableTests = (m) => testAsync("toObservable", async () => {
    const scheduler = Scheduler.createHostScheduler();
    // FIXME: This should be a generic test
    try {
        const result = await pipe([0, 1, 2, 3, 4], m.fromReadonlyArray(), m.toObservable(), Observable.buffer(), Observable.toPromise(scheduler));
        pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    }
    finally {
        pipe(scheduler, Disposable.dispose());
    }
});
const toRunnableObservableTests = (m) => createDescribe("toRunnableObservable", createTest("without delay", pipeLazy([1, 2, 3, 4, 5], m.fromReadonlyArray(), m.toRunnableObservable(), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), createTest("with delay", pipeLazy([9, 9, 9, 9], m.fromReadonlyArray(), m.toRunnableObservable({ delay: 1 }), RunnableObservable.map(_ => __now()), RunnableObservable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3]))));
const zipTests = (m) => createDescribe("zip", createTest("when all inputs are the same length", pipeLazy(m.zip(pipe([1, 2, 3, 4, 5], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
    [1, 5],
    [2, 4],
    [3, 3],
    [4, 2],
    [5, 1],
], arrayEquality()))), createTest("when inputs are different length", pipeLazy(m.zip(pipe([1, 2, 3], m.fromReadonlyArray()), pipe([5, 4, 3, 2, 1], m.fromReadonlyArray()), pipe([1, 2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
    [1, 5, 1],
    [2, 4, 2],
    [3, 3, 3],
], arrayEquality()))));
const zipWithTests = (m) => createDescribe("zipWith", createTest("when inputs are different lengths", pipeLazy([1, 2, 3], m.fromReadonlyArray(), Container.zipWith(m, pipe([1, 2, 3, 4], m.fromReadonlyArray())), m.toReadonlyArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality()))));

export { bufferTests, catchErrorTests, concatAllTests, concatMapTests, concatTests, concatWithTests, decodeWithCharsetTests, distinctUntilChangedTests, endWithTests, everySatisfyTests, forEachTests, fromReadonlyArrayTests, genMapTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, reduceTests, repeatTests, retryTests, scanAsyncTests, scanTests, skipFirstTests, someSatisfyTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, toEnumerableObservableTests, toEnumerableTests, toObservableTests, toRunnableObservableTests, zipTests, zipWithTests };
