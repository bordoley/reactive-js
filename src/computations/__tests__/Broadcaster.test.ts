import { testModule } from "../../__internal__/testing.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Computation from "../Computation.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";

const m = Computation.makeModule<Broadcaster.Computation>()(Broadcaster);

testModule("Broadcaster", ComputationModuleTests(m))();
