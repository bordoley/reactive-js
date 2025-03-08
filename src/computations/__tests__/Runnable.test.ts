import { testModule } from "../../__internal__/testing.js";
import {
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  RunnableLike,
} from "../../computations.js";
import { ignore, pipe } from "../../functions.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "./fixtures/DeferredReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

const RunnableTypes = {
  [Computation_pureSynchronousOfT]: Runnable.empty(),
  [Computation_synchronousWithSideEffectsOfT]: pipe(
    Runnable.empty(),
    Runnable.forEach(ignore),
  ),
};

testModule(
  "Runnable",
  ComputationModuleTests(
    {
      ...Runnable,
      toReadonlyArrayAsync<T>() {
        return async (runnable: RunnableLike<T>) =>
          pipe(runnable, Runnable.toReadonlyArray());
      },
    },
    RunnableTypes,
  ),
  DeferredReactiveComputationModuleTests(Runnable, RunnableTypes),
  SynchronousComputationModuleTests(Runnable, RunnableTypes),
);

((_: Runnable.Signature) => {})(Runnable);
