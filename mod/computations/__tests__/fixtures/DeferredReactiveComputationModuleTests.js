/// <reference types="./DeferredReactiveComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, testAsync, } from "../../../__internal__/testing.js";
import { PureDeferredComputation, } from "../../../computations.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Source from "../../Source.js";
const DeferredReactiveComputationModuleTests = (m) => describe("ComputationModule", describe("switchAll", testAsync("with empty source", pipeLazyAsync(Computation.empty(m)(), m.switchAll(PureDeferredComputation), Source.toReadonlyArrayAsync(), expectArrayEquals([]))) /*
testAsync(
  "only produce the last observable",
  pipeLazyAsync(
    [1, 2, 3],
    Computation.fromReadonlyArray(m)(),
    m.map(x => pipe([x, x, x], Computation.fromReadonlyArray(m)())),
    m.switchAll(PureDeferredComputation),
    Source.toReadonlyArrayAsync<number>(),
    expectArrayEquals([3, 3, 3]),
  ),
),*/));
export default DeferredReactiveComputationModuleTests;
