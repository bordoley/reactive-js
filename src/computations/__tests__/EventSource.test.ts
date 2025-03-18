import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectIsNone,
  expectIsSome,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  Computation_multicastOfT,
  ProducerLike_consume,
  StreamableLike_stream,
} from "../../computations.js";
import {
  bindMethod,
  ignore,
  invoke,
  pick,
  pipe,
  pipeLazy,
  raise,
  returns,
} from "../../functions.js";
import { increment } from "../../math.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_error,
  DisposableLike_isDisposed,
  ThrowBackpressureStrategy,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import MulticastedComputationModuleTests from "./fixtures/MulticastComputationModuleTests.js";

const EventSourceTypes = {
  [Computation_multicastOfT]: EventSource.never(),
};

testModule(
  "EventSource",
  ComputationModuleTests(EventSource, EventSourceTypes),
  ConcurrentReactiveComputationModuleTests(EventSource, EventSourceTypes),
  MulticastedComputationModuleTests(EventSource),
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
  describe(
    "createPauseable",
    test("a pauseable observable enqueueing into a stream with backpressure", () => {
      using vts = VirtualTimeScheduler.create();

      const dest = Streamable.identity<number>()[StreamableLike_stream](vts, {
        backpressureStrategy: ThrowBackpressureStrategy,
        capacity: 1,
      });

      pipe(
        Computation.generate<Observable.Computation>(Observable)(
          increment,
          returns(-1),
          { delay: 1, delayStart: true },
        ),
        Observable.takeFirst<number>({ count: 5 }),
        Observable.toPauseableEventSource(vts),
        EventSource.toProducer(),
        invoke(ProducerLike_consume, dest),
      );

      const result: number[] = [];
      pipe(
        dest,
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(dest[DisposableLike_isDisposed], expectTrue());
      pipe(dest[DisposableLike_error], expectIsNone);
      pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    }),
  ),
);

((_: EventSource.Signature) => {})(EventSource);
