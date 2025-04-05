/// <reference types="./EventSource.test.d.ts" />

import { describe, expectEquals, testAsync, testModule, } from "../../__internal__/testing.js";
import { pipeLazyAsync, returns } from "../../functions.js";
import { sum } from "../../math.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
const m = Computation.makeModule(Broadcaster);
testModule("EventSource", describe("reduceAsync", testAsync("reducing an array", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(m), EventSource.reduceAsync(sum, returns(0)), expectEquals(6)))))({
    beforeEach() {
        const scheduler = HostScheduler.create();
        DefaultScheduler.set(scheduler);
    },
    afterEach() {
        DefaultScheduler.dispose();
    },
});
