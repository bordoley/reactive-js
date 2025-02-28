import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { pipeLazy } from "../../functions.js";
import * as Iterable from "../Iterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ComputationWithSideEffectsModuleTests from "./fixtures/ComputationWithSideEffectsModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

testModule(
  "Iterable",
  ComputationModuleTests(Iterable),
  DeferredComputationModuleTests(Iterable),
  ComputationWithSideEffectsModuleTests(Iterable),
  SynchronousComputationModuleTests(Iterable),
  describe(
    "zip",
    test(
      "different length iterables",
      pipeLazy(
        Iterable.zip([0, 1, 2, 3, 4], [0, 1, 2], [0, 1, 2, 3]),
        Iterable.concatAll<number>(),
        Iterable.toReadonlyArray(),
        expectArrayEquals([0, 0, 0, 1, 1, 1, 2, 2, 2]),
      ),
    ),
    test(
      "with empty iterable",
      pipeLazy(
        Iterable.zip([0, 1, 2, 3, 4], [], [0, 1, 2, 3]),
        Iterable.concatAll<number>(),
        Iterable.toReadonlyArray(),
        expectArrayEquals<number>([]),
      ),
    ),
  ),
);
