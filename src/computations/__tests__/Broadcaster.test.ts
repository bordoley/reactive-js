import { testModule } from "../../__internal__/testing.js";
import * as Broadcaster from "../Broadcaster.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";

const m = Broadcaster.makeModule(Broadcaster);

testModule("Broadcaster", ComputationModuleTests(m));
