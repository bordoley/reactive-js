import { testModule } from "../../__internal__/testing.js";
import {
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
} from "../../computations.js";
import { ignore, pipe } from "../../functions.js";
import * as Producer from "../Producer.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

const ProducerTypes = {
  [Computation_pureSynchronousOfT]: Producer.empty(),
  [Computation_synchronousWithSideEffectsOfT]: pipe(
    Producer.empty(),
    Producer.forEach(ignore),
  ),
};

testModule(
  "Producer",
  ComputationModuleTests(Producer, ProducerTypes),
  SequentialComputationModuleTests(Producer, ProducerTypes),
  SequentialReactiveComputationModuleTests(Producer, ProducerTypes),
  SynchronousComputationModuleTests(Producer),
);

((_: Producer.Signature) => {})(Producer);
