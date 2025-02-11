import { testModule } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { PureStatelessComputationModule } from "../../computations.js";
import * as Iterable from "../Iterable.js";
import PureStatelesssComputationModuleTests from "./fixtures/PureStatelessComputationModuleTests.js";

testModule(
  "Iterable",
  PureStatelesssComputationModuleTests(
    Iterable as PureStatelessComputationModule<Iterable.IterableComputation>,
    () => arr => arr,
    ReadonlyArray.fromIterable,
  ),
);
