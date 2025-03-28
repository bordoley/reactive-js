/// <reference types="./Observable.test.d.ts" />

import { describe, expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import { pipe, pipeLazy } from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Computation from "../Computation.js";
import * as Observable from "../Observable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
const m = Computation.makeModule()(Observable);
testModule("Observable", ComputationModuleTests(m), SequentialComputationModuleTests(m), SequentialReactiveComputationModuleTests(m), SynchronousComputationModuleTests(m), ConcurrentReactiveComputationModuleTests(m), describe("takeUntil", 
// Ideally these tests would be part of SequentialReactiveComputationModuleTests
// but writing dependable tests that use real time is slow at best and ripe for
// flakiness. The implementation is shared so only test using Observable.
test("takes until the notifier notifies its first notification", pipeLazy([10, 20, 30, 40, 50], Computation.fromReadonlyArray(m)({ delay: 2 }), Observable.takeUntil(pipe([1], Computation.fromReadonlyArray(m)({ delay: 3, delayStart: true }))), Computation.toReadonlyArray(m)(), expectArrayEquals([10, 20])))))({
    beforeEach() {
        const scheduler = HostScheduler.create();
        DefaultScheduler.set(scheduler);
    },
    afterEach() {
        DefaultScheduler.dispose();
    },
});
