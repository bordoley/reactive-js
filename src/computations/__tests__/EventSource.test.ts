import {
  describe,
  expectIsSome,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Observable from "../../computations/Observable.js";
import { Computation_multicastOfT } from "../../computations.js";
import { ignore, pick, pipeLazy, raise } from "../../functions.js";
import { DisposableLike_error } from "../../utils.js";
import * as EventSource from "../EventSource.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";

const EventSourceTypes = {
  [Computation_multicastOfT]: EventSource.never(),
};

testModule(
  "EventSource",
  ComputationModuleTests(EventSource, EventSourceTypes),
  ConcurrentReactiveComputationModuleTests(
    {
      ...EventSource,
      toObservable: Observable.fromEventSource,
    },
    EventSourceTypes,
  ),
  describe(
    "create",
    test(
      "when the setup function throws",
      pipeLazy(
        EventSource.create(_ => raise()),
        EventSource.addEventHandler(ignore),
        pick(DisposableLike_error),
        expectIsSome,
      ),
    ),
  ),
);

((_: EventSource.Signature) => {})(EventSource);
