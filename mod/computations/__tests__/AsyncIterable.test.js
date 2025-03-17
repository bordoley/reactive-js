/// <reference types="./AsyncIterable.test.d.ts" />

import { describe, expectArrayEquals, expectToThrowAsync, testAsync, testModule, } from "../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_pureDeferredOfT, } from "../../computations.js";
import { error, pipe, pipeLazy, pipeLazyAsync } from "../../functions.js";
import { PauseableLike_resume } from "../../utils.js";
import * as AsyncIterable from "../AsyncIterable.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentDeferredComputationModuleTests from "./fixtures/ConcurrentDeferredComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
const AsyncIterableTypes = {
    [Computation_deferredWithSideEffectsOfT]: pipe((async function* () { })(), AsyncIterable.of()),
    [Computation_pureDeferredOfT]: pipe([], AsyncIterable.fromReadonlyArray()),
};
testModule("AsyncIterable", ComputationModuleTests(AsyncIterable, AsyncIterableTypes), SequentialComputationModuleTests(AsyncIterable, AsyncIterableTypes), InteractiveComputationModuleTests(AsyncIterable), ConcurrentDeferredComputationModuleTests(AsyncIterable), describe("toEventSource", testAsync("notifies all the values produced by the iterable", pipeLazyAsync([1, 2, 3, 4], Computation.fromIterable(AsyncIterable), AsyncIterable.toEventSource(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4]))), testAsync("iterable that completes", async () => {
    const flowed = pipe((async function* foo() {
        yield 1;
        yield 2;
        yield 3;
    })(), AsyncIterable.of(), AsyncIterable.toEventSource());
    flowed[PauseableLike_resume]();
    const result = await pipe(flowed, EventSource.toReadonlyArrayAsync());
    pipe(result ?? [], expectArrayEquals([1, 2, 3]));
}), testAsync("iterable that throws", pipeLazy(async () => {
    const e = error();
    const flowed = pipe((async function* foo() {
        throw e;
    })(), AsyncIterable.of(), AsyncIterable.toEventSource());
    flowed[PauseableLike_resume]();
    await pipe(flowed, EventSource.toReadonlyArrayAsync());
}, expectToThrowAsync))));
((_) => { })(AsyncIterable);
