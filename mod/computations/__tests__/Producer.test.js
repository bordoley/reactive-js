/// <reference types="./Producer.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Computation from "../Computation.js";
import * as Producer from "../Producer.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "./fixtures/DeferredReactiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
const m = Computation.makeModule()(Producer);
testModule("Producer", ComputationModuleTests(m), SequentialComputationModuleTests(m), SequentialReactiveComputationModuleTests(m), ConcurrentReactiveComputationModuleTests(m), DeferredReactiveComputationModuleTests(m))({
    beforeEach() {
        const scheduler = HostScheduler.create();
        DefaultScheduler.set(scheduler);
    },
    afterEach() {
        DefaultScheduler.dispose();
    },
});
//((_: Producer.Signature) => {})(Producer);
