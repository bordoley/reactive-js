/// <reference types="./InteractiveComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, testAsync, } from "../../../__internal__/testing.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";
const InteractiveComputationModuleTests = (m) => describe("InteractiveComputationModule", describe("zip", testAsync("different length iterables", pipeLazyAsync(m.zip(m.fromReadonlyArray()([0, 1, 2, 3, 4]), m.fromReadonlyArray()([0, 1, 2]), m.fromReadonlyArray()([0, 1, 2, 3])), Computation.concatMap(m)(m.fromReadonlyArray()), m.toReadonlyArrayAsync(), expectArrayEquals([0, 0, 0, 1, 1, 1, 2, 2, 2]))), testAsync("with empty iterable", pipeLazyAsync(m.zip(m.fromReadonlyArray()([0, 1, 2, 3, 4]), m.fromReadonlyArray()([]), m.fromReadonlyArray()([0, 1, 2, 3])), Computation.concatMap(m)(m.fromReadonlyArray()), m.toReadonlyArrayAsync(), expectArrayEquals([])))));
export default InteractiveComputationModuleTests;
