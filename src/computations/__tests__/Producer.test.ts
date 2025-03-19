import { testModule } from "../../__internal__/testing.js";
import {
  Computation_deferredWithSideEffectsOfT,
  Computation_pureDeferredOfT,
} from "../../computations.js";
import { ignore, pipe } from "../../functions.js";
import * as Producer from "../Producer.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";

const ProducerTypes = {
  [Computation_pureDeferredOfT]: Producer.empty(),
  [Computation_deferredWithSideEffectsOfT]: pipe(
    Producer.empty(),
    Producer.forEach(ignore),
  ),
};

testModule(
  "Producer",
  ComputationModuleTests(Producer, ProducerTypes),
  SequentialComputationModuleTests(Producer, ProducerTypes),
  SequentialReactiveComputationModuleTests(Producer, ProducerTypes),
);

((_: Producer.Signature) => {})(Producer);
