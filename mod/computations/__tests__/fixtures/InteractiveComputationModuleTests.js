/// <reference types="./InteractiveComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, test, } from "../../../__internal__/testing.js";
import { pipeLazy } from "../../../functions.js";
import * as Computation from "../../Computation.js";
const InteractiveComputationModuleTests = (m) => describe("InteractiveComputationModule", describe("zip", test("different length iterables", pipeLazy(m.zip(m.fromReadonlyArray()([0, 1, 2, 3, 4]), m.fromReadonlyArray()([0, 1, 2]), m.fromReadonlyArray()([0, 1, 2, 3])), Computation.concatMap(m)(m.fromReadonlyArray()), m.toReadonlyArray(), expectArrayEquals([0, 0, 0, 1, 1, 1, 2, 2, 2]))), test("with empty iterable", pipeLazy(m.zip(m.fromReadonlyArray()([0, 1, 2, 3, 4]), m.fromReadonlyArray()([]), m.fromReadonlyArray()([0, 1, 2, 3])), Computation.concatMap(m)(m.fromReadonlyArray()), m.toReadonlyArray(), expectArrayEquals([])))));
export default InteractiveComputationModuleTests;
