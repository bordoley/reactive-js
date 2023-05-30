/// <reference types="./ContainerModuleTests.d.ts" />

import * as Disposable from "../../Disposable.js";
import { describe, expectArrayEquals, expectToThrowError, test, } from "../../__internal__/testing.js";
import { greaterThan, increment, pipe } from "../../functions.js";
const ContainerModuleTests = (m, createCtx, fromReadonlyArray, toReadonlyArray) => describe("ContainerModule", describe("keep", test("keeps only values greater than 5", Disposable.usingLazy(createCtx)((ctx) => pipe([4, 8, 10, 7], fromReadonlyArray(ctx), m.keep(greaterThan(5)), toReadonlyArray(ctx), expectArrayEquals([8, 10, 7])))), test("when predicate throws", () => {
    const err = new Error();
    const predicate = (_a) => {
        throw err;
    };
    pipe(Disposable.usingLazy(createCtx)((ctx) => pipe([1, 1], fromReadonlyArray(ctx), m.keep(predicate), toReadonlyArray(ctx))), expectToThrowError(err));
})), describe("map", test("maps every value", Disposable.usingLazy(createCtx)((ctx) => pipe([1, 2, 3], fromReadonlyArray(ctx), m.map(increment), toReadonlyArray(ctx), expectArrayEquals([2, 3, 4])))), test("when selector throws", () => {
    const err = new Error();
    const selector = (_a) => {
        throw err;
    };
    pipe(Disposable.usingLazy(createCtx)((ctx) => pipe([1, 1], fromReadonlyArray(ctx), m.map(selector), toReadonlyArray(ctx))), expectToThrowError(err));
})));
export default ContainerModuleTests;
