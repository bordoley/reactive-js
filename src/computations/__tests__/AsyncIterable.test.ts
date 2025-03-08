import { testModule } from "../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT } from "../../computations.js";
import { pipe } from "../../functions.js";
import * as AsyncIterable from "../AsyncIterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";

const AsyncIterableTypes = {
  [Computation_deferredWithSideEffectsOfT]: pipe(
    [],
    AsyncIterable.fromReadonlyArray(),
  ),
};

testModule(
  "AsyncIterable",
  ComputationModuleTests(AsyncIterable, AsyncIterableTypes),
);

((_: AsyncIterable.Signature) => {})(AsyncIterable);
