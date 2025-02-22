/// <reference types="./Iterable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as Iterable from "../Iterable.js";
import ComputationWithSideEffectsModuleTests from "./fixtures/ComputationWithSideEffectsModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import PureStatelesssComputationModuleTests from "./fixtures/PureStatelessComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
testModule("Iterable", PureStatelesssComputationModuleTests(Iterable, Iterable.fromReadonlyArray, ReadonlyArray.fromIterable), DeferredComputationModuleTests(Iterable), ComputationWithSideEffectsModuleTests(Iterable), SynchronousComputationModuleTests(Iterable));
