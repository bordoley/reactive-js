/// <reference types="./Iterable.test.d.ts" />

import { describe, expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import { pipeLazy } from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Computation from "../Computation.js";
import * as Iterable from "../Iterable.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
const m = Computation.makeModule(Iterable);
testModule("Iterable", ComputationModuleTests(m), DeferredComputationModuleTests(m), SynchronousComputationModuleTests(m), InteractiveComputationModuleTests(m), describe("toRunnable", test("source that completes", pipeLazy([1, 2, 3], Iterable.of(), Iterable.toRunnable(), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3]))), test("when the sink completes before the source", pipeLazy([1, 2, 3], Iterable.of(), Iterable.toRunnable(), Runnable.takeFirst({ count: 1 }), Runnable.toReadonlyArray(), expectArrayEquals([1])))))({
    beforeEach() {
        const scheduler = HostScheduler.create();
        DefaultScheduler.set(scheduler);
    },
    afterEach() {
        DefaultScheduler.dispose();
    },
});
((_) => { })(Iterable);
