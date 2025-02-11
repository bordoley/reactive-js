/// <reference types="./Iterable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as Iterable from "../Iterable.js";
import PureStatelesssComputationModuleTests from "./fixtures/PureStatelessComputationModuleTests.js";
testModule("Iterable", PureStatelesssComputationModuleTests(Iterable, () => arr => arr, ReadonlyArray.fromIterable));
