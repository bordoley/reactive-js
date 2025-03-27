/// <reference types="./SequentialComputationModuleTests.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { describe, expectArrayEquals, expectEquals, expectToThrowErrorAsync, testAsync, } from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { none, pipe, pipeAsync, pipeLazy, pipeLazyAsync, returns, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
const SequentialComputationModuleTests = (m) => describe("SequentialComputationModule", describe("catchError", testAsync("when the source throws", async () => {
    const e1 = "e1";
    let result = none;
    await pipeAsync(Computation.raise(m)({ raise: () => e1 }), m.catchError((e) => {
        result = e.message;
    }), m.toReadonlyArrayAsync());
    pipe(result, expectEquals(e1));
}), testAsync("when the error handler throws an error", async () => {
    const e1 = "e1";
    const e2 = "e2";
    let result = none;
    await pipeAsync(Computation.raise(m)({ raise: () => e1 }), m.catchError(_ => {
        throw e2;
    }), m.catchError(e => {
        result = e.cause;
    }), m.toReadonlyArrayAsync());
    pipe(result, ReadonlyArray.map(x => x.message), expectArrayEquals(["e2", "e1"]));
}), testAsync("when error handler returns a computation", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m)(), Computation.concatWith(m)(Computation.raise(m)()), m.catchError(pipeLazy([4, 5, 6], Computation.fromReadonlyArray(m)())), m.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("forEach", testAsync("invokes the effect for each notified value", async () => {
    const result = [];
    await pipeAsync([1, 2, 3], Computation.fromReadonlyArray(m)(), m.forEach((x) => {
        result[Array_push](x + 10);
    }), m.toReadonlyArrayAsync()),
        pipe(result, expectArrayEquals([11, 12, 13]));
}), testAsync("when the effect function throws", async () => {
    const err = new Error();
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m)(), m.forEach(_ => {
        throw err;
    }), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})), describe("throwIfEmpty", testAsync("when source is empty", async () => {
    const error = new Error();
    await pipe(pipeLazy(Computation.empty(m)(), m.throwIfEmpty(() => error), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(error));
}), testAsync("when factory throw", async () => {
    const error = new Error();
    await pipe(pipeLazy(Computation.empty(m)(), m.throwIfEmpty(() => {
        throw error;
    }), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(error));
}), testAsync("when source is not empty", pipeLazyAsync([1], Computation.fromReadonlyArray(m)(), m.throwIfEmpty(returns(none)), m.toReadonlyArrayAsync(), expectArrayEquals([1])))));
export default SequentialComputationModuleTests;
