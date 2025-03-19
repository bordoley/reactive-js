import {
  describe,
  expectIsSome,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { Computation_multicastOfT } from "../../computations.js";
import { ignore, pick, pipeLazy, raise } from "../../functions.js";
import { DisposableLike_error } from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import MulticastedComputationModuleTests from "./fixtures/MulticastComputationModuleTests.js";

const BroadcasterTypes = {
  [Computation_multicastOfT]: Broadcaster.never(),
};

testModule(
  "Broadcaster",
  ComputationModuleTests(Broadcaster, BroadcasterTypes),
  ConcurrentReactiveComputationModuleTests(Broadcaster, BroadcasterTypes),
  MulticastedComputationModuleTests(Broadcaster),
  describe(
    "create",
    test(
      "when the setup function throws",
      pipeLazy(
        Broadcaster.create(_ => raise()),
        Broadcaster.addEventHandler(ignore),
        pick(DisposableLike_error),
        expectIsSome,
      ),
    ),
  ),
);

((_: Broadcaster.Signature) => {})(Broadcaster);
