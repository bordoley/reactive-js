/// <reference types="./operators.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals, expectToThrowError } from '../__internal__/testing.mjs';
import { emptyReadonlyArray } from '../containers.mjs';
import { pipeLazy, arrayEquality, pipe, increment, sum, returns, alwaysTrue } from '../functions.mjs';

const bufferTests = (m) => createDescribe("buffer", createTest("with multiple sub buffers", pipeLazy([1, 2, 3, 4, 5, 6, 7, 8, 9], m.fromArray(), m.buffer({ maxBufferSize: 3 }), m.toReadonlyArray(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
], arrayEquality()))), createTest("last buffer is short", pipeLazy([1, 2, 3, 4, 5, 6, 7, 8], m.fromArray(), m.buffer({ maxBufferSize: 3 }), m.toReadonlyArray(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
], arrayEquality()))));
const concatAllTests = (m) => createDescribe("concatAll", createTest("concats the input containers in order", pipeLazy([pipe([1, 2, 3], m.fromArray()), pipe([4, 5, 6], m.fromArray())], m.fromArray(), m.concatAll(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), createTest("when an inner enumerator throw", () => {
    // FIXME: Implement me
}));
const distinctUntilChangedTests = (m) => createDescribe("distinctUntilChanged", createTest("when source has duplicates in order", pipeLazy([1, 2, 2, 2, 2, 3, 3, 3, 4], m.fromArray(), m.distinctUntilChanged(), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), createTest("when source is empty", pipeLazy([], m.fromArray(), m.distinctUntilChanged(), m.toReadonlyArray(), expectArrayEquals([]))), createTest("when equality operator throws", () => {
    const err = new Error();
    const equality = (_a, _b) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromArray(), m.distinctUntilChanged({ equality }), m.toReadonlyArray()), expectToThrowError(err));
}));
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
const repeatTests = (m) => createDescribe("repeat", createTest("when always repeating", pipeLazy([1, 2, 3], m.fromArray(), m.repeat(), m.takeFirst({ count: 6 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), createTest("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromArray(), m.repeat(3), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), createTest("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromArray(), m.repeat(x => x < 1), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))));
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
const skipFirstTests = (m) => createDescribe("skipFirst", createTest("when skipped source has additional elements", pipeLazy([1, 2, 3], m.fromArray(), m.skipFirst({ count: 2 }), m.toReadonlyArray(), expectArrayEquals([3]))), createTest("when all elements are skipped", pipeLazy([1, 2, 3], m.fromArray(), m.skipFirst({ count: 4 }), m.toReadonlyArray(), expectArrayEquals(emptyReadonlyArray()))));
const takeFirstTests = (m) => createDescribe("takeFirst", createTest("when taking fewer than the total number of elements in the source", pipeLazy([1, 2, 3, 4, 5], m.fromArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), createTest("when taking more than all the items produced by the source", pipeLazy([1, 2], m.fromArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([1, 2]))), createTest("when source is empty", pipeLazy([], m.fromArray(), m.takeFirst({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([]))), createTest("with default count", pipeLazy([1, 2, 3], m.fromArray(), m.takeFirst(), m.toReadonlyArray(), expectArrayEquals([1]))));
const takeLastTests = (m) => createDescribe("takeLast", createTest("when count is less than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromArray(), m.takeLast({ count: 3 }), m.toReadonlyArray(), expectArrayEquals([3, 4, 5]))), createTest("when count is greater than the total number of elements", pipeLazy([1, 2, 3, 4, 5], m.fromArray(), m.takeLast({ count: 10 }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), createTest("with default count", pipeLazy([1, 2, 3, 4, 5], m.fromArray(), m.takeLast(), m.toReadonlyArray(), expectArrayEquals([5]))));
const takeWhileTests = (m) => createDescribe("takeWhile", createTest("exclusive", () => {
    pipe([1, 2, 3, 4, 5], m.fromArray(), m.takeWhile(x => x < 4), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([1, 2, 3], m.fromArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals([1, 2, 3]));
    pipe([], m.fromArray(), m.takeWhile(alwaysTrue), m.toReadonlyArray(), expectArrayEquals(emptyReadonlyArray()));
}), createTest("inclusive", pipeLazy([1, 2, 3, 4, 5, 6], m.fromArray(), m.takeWhile(x => x < 4, { inclusive: true }), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))), createTest("when predicate throws", () => {
    const err = new Error();
    const predicate = (_) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromArray(), m.takeWhile(predicate), m.toReadonlyArray()), expectToThrowError(err));
}));
const throwIfEmptyTests = (m) => createDescribe("throwIfEmpty", createTest("when source is empty", () => {
    const error = new Error();
    pipeLazy(pipeLazy([], m.fromArray(), m.throwIfEmpty(() => error), m.toReadonlyArray()), expectToThrowError(error));
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

export { bufferTests, concatAllTests, distinctUntilChangedTests, keepTests, mapTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipTests };
