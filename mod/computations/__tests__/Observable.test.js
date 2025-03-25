/// <reference types="./Observable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as Observable from "../Observable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";
testModule("Observable", ComputationModuleTests(Observable));
