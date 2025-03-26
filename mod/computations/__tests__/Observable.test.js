/// <reference types="./Observable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { pipe } from "../../functions.js";
import * as Computation from "../Computation.js";
import * as Observable from "../Observable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";
testModule("Observable", ComputationModuleTests(Observable));
const m = Observable.makeModule(Observable);
pipe([1, 2, 3, 4], Computation.fromReadonlyArray(m)(), Observable.map(x => x), Observable.takeFirst());
