import { testModule } from "../../__internal__/testing.js";
import * as Producer from "../Producer.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";

testModule("Producer", ComputationModuleTests<Producer.Computation>(Producer));
