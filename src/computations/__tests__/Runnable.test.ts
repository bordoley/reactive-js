import {
  describe,
  expectArrayEquals,
  expectToThrow,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { pipeLazy, raise } from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Computation from "../Computation.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

const m = Computation.makeModule<Runnable.Signature>(Runnable);

testModule(
  "Runnable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
  SequentialReactiveComputationModuleTests(m),
  SynchronousComputationModuleTests(m),
  describe(
    "fromReadonlyArray",
    test(
      "produces the values",
      pipeLazy(
        [1, 2, 3],
        Runnable.fromReadonlyArray(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test(
      "produces the values in reverse",
      pipeLazy(
        [1, 2, 3],
        Runnable.fromReadonlyArray({ count: -3, start: 2 }),
        Runnable.toReadonlyArray(),
        expectArrayEquals([3, 2, 1]),
      ),
    ),
    test(
      "when the sink throws",
      pipeLazy(
        pipeLazy(
          [1, 2, 3],
          Runnable.fromReadonlyArray(),
          Runnable.forEach(_ => {
            raise("some exception");
          }),
          Runnable.last(),
        ),
        expectToThrow,
      ),
    ),
  ),
)({
  beforeEach() {
    const scheduler = HostScheduler.create();
    DefaultScheduler.set(scheduler);
  },
  afterEach() {
    DefaultScheduler.dispose();
  },
});

((_: Runnable.Signature) => {})(Runnable);
