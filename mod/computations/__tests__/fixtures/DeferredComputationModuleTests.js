/// <reference types="./DeferredComputationModuleTests.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectToThrowAsync, expectToThrowErrorAsync, testAsync, } from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { arrayEquality, ignore, invoke, lessThan, none, pipe, pipeAsync, pipeLazy, pipeLazyAsync, raise, returns, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
const DeferredComputationModuleTests = (m) => describe("DeferredComputationModule", describe("buffer", testAsync("with multiple sub buffers", pipeLazyAsync([1, 2, 3, 4, 5, 6, 7, 8, 9], Computation.fromReadonlyArray(m), m.buffer({ count: 3 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
], { valuesEquality: arrayEquality() }))), testAsync("last buffer is short", pipeLazyAsync([1, 2, 3, 4, 5, 6, 7, 8], Computation.fromReadonlyArray(m), m.buffer({ count: 3 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
], { valuesEquality: arrayEquality() }))), testAsync("buffers all values when no count is provided", pipeLazyAsync([1, 2, 3, 4, 5, 6, 7, 8], Computation.fromReadonlyArray(m), m.buffer(), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([[1, 2, 3, 4, 5, 6, 7, 8]], {
    valuesEquality: arrayEquality(),
})))), describe("catchError", testAsync("when the source does not throw", pipeLazyAsync([1, 2, 3, 4], Computation.fromReadonlyArray(m), m.catchError(ignore), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4]))), testAsync("when the source throws", async () => {
    const e1 = "e1";
    let result = none;
    await pipeAsync(Computation.raise(m, { raise: () => e1 }), m.catchError((e) => {
        result = e.message;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync());
    pipe(result, expectEquals(e1));
}), testAsync("when the error handler throws an error", async () => {
    const e1 = "e1";
    const e2 = "e2";
    let result = none;
    await pipeAsync(Computation.raise(m, { raise: () => e1 }), m.catchError(_ => {
        throw e2;
    }), m.catchError(e => {
        result = e.cause;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync());
    pipe(result, ReadonlyArray.map(x => x.message), expectArrayEquals(["e2", "e1"]));
}), testAsync("when error handler returns a computation", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), Computation.concatWith(m, Computation.raise(m, none, 0)), m.catchError(pipeLazy([4, 5, 6], Computation.fromReadonlyArray(m))), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatAll", testAsync("concating inner sources", pipeLazyAsync([Computation.ofValues(m, 1, 2, 3), Computation.ofValues(m, 4, 5, 6)], Computation.fromReadonlyArray(m), m.concatAll(), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), testAsync("only consume partial number of events", pipeLazyAsync([
    Computation.ofValues(m, 1, 2, 3),
    Computation.ofValues(m, 4, 5, 6),
    Computation.ofValues(m, 7, 8, 9),
], Computation.fromReadonlyArray(m), m.concatAll(), m.takeFirst({ count: 5 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4, 5])))), describe("decodeWithCharset", testAsync("decoding ascii", async () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    await pipeAsync([str], Computation.fromReadonlyArray(m), m.encodeUtf8(), m.decodeWithCharset(), m.toProducer(), EventSource.toReadonlyArrayAsync(), invoke("join"), expectEquals(str));
}), testAsync("decoding ascii", async () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    await pipeAsync([str], Computation.fromReadonlyArray(m), m.encodeUtf8(), m.decodeWithCharset(), m.toProducer(), EventSource.toReadonlyArrayAsync(), invoke("join"), expectEquals(str));
}), testAsync("decoding multi-byte code points", async () => {
    const str = String.fromCodePoint(8364);
    await pipeAsync([str], Computation.fromReadonlyArray(m), m.encodeUtf8(), m.decodeWithCharset(), m.toProducer(), EventSource.toReadonlyArrayAsync(), invoke("join"), expectEquals(str));
}), testAsync("multi-byte decoding divided between multiple buffers", pipeLazyAsync([new Uint8Array([226, 153]), new Uint8Array([165])], Computation.fromReadonlyArray(m), m.decodeWithCharset(), m.toProducer(), EventSource.toReadonlyArrayAsync(), invoke("join"), expectEquals("♥"))), testAsync("multi-byte decoding with missing tail", pipeLazyAsync([new Uint8Array([226])], Computation.fromReadonlyArray(m), m.decodeWithCharset(), m.toProducer(), EventSource.toReadonlyArrayAsync(), invoke("join"), expectEquals("�")))), describe("forEach", testAsync("invokes the effect for each notified value", async () => {
    const result = [];
    await pipeAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.forEach((x) => {
        result[Array_push](x + 10);
    }), m.toProducer(), EventSource.toReadonlyArrayAsync()),
        pipe(result, expectArrayEquals([11, 12, 13]));
}), testAsync("when the effect function throws", async () => {
    const err = new Error();
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.forEach(_ => {
        throw err;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("repeat", testAsync("when repeating forever.", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.repeat(), m.takeFirst({ count: 8 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]))), testAsync("when repeating a finite amount of times.", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.repeat(3), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), testAsync("when repeating with a predicate", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), m.repeat(lessThan(1)), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("when the repeat function throws", async () => {
    const err = new Error();
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m), m.repeat(_ => {
        throw err;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("retry", testAsync("when the source doesn't error", pipeLazyAsync(Computation.ofValues(m, 1, 2, 3), m.retry(), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]))), testAsync("retrys with the default predicate", pipeLazyAsync(m.concat(Computation.ofValues(m, 1, 2, 3), Computation.raise(m)), m.retry(), m.takeFirst({ count: 6 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), testAsync("when source and the retry predicate throw", pipeLazyAsync(pipeLazyAsync(Computation.raise(m), m.retry(() => raise("")), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowAsync)), testAsync("retrys only twice", pipeLazyAsync(pipeLazyAsync(m.concat(Computation.ofValues(m, 1, 2, 3), Computation.raise(m)), m.retry((count, _) => count < 2), m.takeFirst({ count: 10 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3])), expectToThrowAsync))), describe("takeLast", testAsync("with default count", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m), m.takeLast(), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([5]))), testAsync("when count is 0", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m), 
// Some implementations special case this
m.takeLast({ count: 0 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([]))), testAsync("when count is less than the total number of elements", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m), m.takeLast({ count: 3 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([3, 4, 5]))), testAsync("when count is greater than the total number of elements", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m), m.takeLast({ count: 10 }), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4, 5]))), testAsync("with default count", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m), m.takeLast(), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([5])))), describe("throwIfEmpty", testAsync("when source is empty", async () => {
    const error = new Error();
    await pipe(pipeLazy(Computation.empty(m), m.throwIfEmpty(() => error), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(error));
}), testAsync("when factory throw", async () => {
    const error = new Error();
    await pipe(pipeLazy(Computation.empty(m), m.throwIfEmpty(() => {
        throw error;
    }), m.toProducer(), EventSource.toReadonlyArrayAsync()), expectToThrowErrorAsync(error));
}), testAsync("when source is not empty", pipeLazyAsync([1], Computation.fromReadonlyArray(m), m.throwIfEmpty(returns(none)), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1])))));
export default DeferredComputationModuleTests;
