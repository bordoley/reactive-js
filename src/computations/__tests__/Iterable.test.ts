import { testModule } from "../../__internal__/testing.js";
import * as Iterable from "../Iterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";

testModule("Iterable", ComputationModuleTests(Iterable));
