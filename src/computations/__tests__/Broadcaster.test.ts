import { testModule } from "../../__internal__/testing.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Computation from "../Computation.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ReactiveComputationModuleTests from "./fixtures/ReactiveComputationModuleTests.js";

const m = Computation.makeModule<Broadcaster.Computation>()(Broadcaster);

testModule(
  "Broadcaster",
  ComputationModuleTests(m),
  ReactiveComputationModuleTests(m),
)({
  beforeEach() {
    const scheduler = HostScheduler.create();
    DefaultScheduler.set(scheduler);
  },
  afterEach() {
    DefaultScheduler.dispose();
  },
});

((_: Broadcaster.Signature) => {})(Broadcaster);
