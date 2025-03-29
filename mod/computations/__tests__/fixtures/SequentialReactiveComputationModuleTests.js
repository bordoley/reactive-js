/// <reference types="./SequentialReactiveComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, expectEquals, testAsync, } from "../../../__internal__/testing.js";
import { arrayEquality, invoke, pipeAsync, pipeLazyAsync, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Source from "../../Source.js";
const SequentialReactiveComputationModuleTests = (m) => describe("SequentialReactiveComputationModule", describe("buffer", testAsync("with multiple sub buffers", pipeLazyAsync([1, 2, 3, 4, 5, 6, 7, 8, 9], Computation.fromReadonlyArray(m)(), m.buffer({ count: 3 }), m.toProducer(), Source.toReadonlyArrayAsync(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
], { valuesEquality: arrayEquality() }))), testAsync("last buffer is short", pipeLazyAsync([1, 2, 3, 4, 5, 6, 7, 8], Computation.fromReadonlyArray(m)(), m.buffer({ count: 3 }), m.toProducer(), Source.toReadonlyArrayAsync(), expectArrayEquals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
], { valuesEquality: arrayEquality() }))), testAsync("buffers all values when no count is provided", pipeLazyAsync([1, 2, 3, 4, 5, 6, 7, 8], Computation.fromReadonlyArray(m)(), m.buffer(), m.toProducer(), Source.toReadonlyArrayAsync(), expectArrayEquals([[1, 2, 3, 4, 5, 6, 7, 8]], {
    valuesEquality: arrayEquality(),
})))), describe("decodeWithCharset", testAsync("decoding ascii", async () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    await pipeAsync([str], Computation.fromReadonlyArray(m)(), m.encodeUtf8(), m.decodeWithCharset(), m.toProducer(), Source.toReadonlyArrayAsync(), invoke("join"), expectEquals(str));
}), testAsync("decoding ascii", async () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    await pipeAsync([str], Computation.fromReadonlyArray(m)(), m.encodeUtf8(), m.decodeWithCharset(), m.toProducer(), Source.toReadonlyArrayAsync(), invoke("join"), expectEquals(str));
}), testAsync("decoding multi-byte code points", async () => {
    const str = String.fromCodePoint(8364);
    await pipeAsync([str], Computation.fromReadonlyArray(m)(), m.encodeUtf8(), m.decodeWithCharset(), m.toProducer(), Source.toReadonlyArrayAsync(), invoke("join"), expectEquals(str));
}), testAsync("multi-byte decoding divided between multiple buffers", pipeLazyAsync([new Uint8Array([226, 153]), new Uint8Array([165])], Computation.fromReadonlyArray(m)(), m.decodeWithCharset(), m.toProducer(), Source.toReadonlyArrayAsync(), invoke("join"), expectEquals("♥"))), testAsync("multi-byte decoding with missing tail", pipeLazyAsync([new Uint8Array([226])], Computation.fromReadonlyArray(m)(), m.decodeWithCharset(), m.toProducer(), Source.toReadonlyArrayAsync(), invoke("join"), expectEquals("�")))), describe("takeLast", testAsync("with default count", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), m.takeLast(), m.toProducer(), Source.toReadonlyArrayAsync(), expectArrayEquals([5]))), testAsync("when count is 0", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), 
// Some implementations special case this
m.takeLast({ count: 0 }), m.toProducer(), Source.toReadonlyArrayAsync(), expectArrayEquals([]))), testAsync("when count is less than the total number of elements", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), m.takeLast({ count: 3 }), m.toProducer(), Source.toReadonlyArrayAsync(), expectArrayEquals([3, 4, 5]))), testAsync("when count is greater than the total number of elements", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), m.takeLast({ count: 10 }), m.toProducer(), Source.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4, 5]))), testAsync("with default count", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), m.takeLast(), m.toProducer(), Source.toReadonlyArrayAsync(), expectArrayEquals([5])))));
export default SequentialReactiveComputationModuleTests;
