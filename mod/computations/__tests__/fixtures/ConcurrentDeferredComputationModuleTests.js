/// <reference types="./ConcurrentDeferredComputationModuleTests.d.ts" />

import { describe, expectEquals, expectToThrowAsync, testAsync, } from "../../../__internal__/testing.js";
import { pipe, pipeLazy, pipeLazyAsync, raise } from "../../../functions.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
const ConcurrentDeferredComputationModuleTests = (m) => describe("ConcurrentDeferredComputationModule", describe("fromAsyncFactory", testAsync("yields the value returned by the promise factory", pipeLazyAsync(() => Promise.resolve(1), m.fromAsyncFactory(), m.lastAsync(), expectEquals(1))), testAsync("when the promise factory throws an exception asynchronously", pipeLazyAsync(pipeLazy(async () => {
    await Promise.resolve();
    raise();
}, m.fromAsyncFactory(), m.lastAsync()), expectToThrowAsync)), testAsync("when the promise factory throws an exception synchronously", pipeLazyAsync(pipeLazy(async () => {
    raise();
    await Promise.resolve();
}, m.fromAsyncFactory(), m.lastAsync()), expectToThrowAsync)), ComputationTest.isDeferredWithSideEffects(pipe(async () => { }, m.fromAsyncFactory()))));
export default ConcurrentDeferredComputationModuleTests;
