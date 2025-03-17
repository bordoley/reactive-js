import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectIsNone,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  ProducerLike_consume,
  StreamableLike_stream,
} from "../../computations.js";
import { bindMethod, invoke, pipe, returns } from "../../functions.js";
import { increment } from "../../math.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_error,
  DisposableLike_isDisposed,
  ThrowBackpressureStrategy,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as Computation from "../Computation.js";
import * as Observable from "../Observable.js";
import * as PauseableEventSource from "../PauseableEventSource.js";
import * as Streamable from "../Streamable.js";

testModule(
  "PauseableEventSource",
  describe(
    "create",
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
        PauseableEventSource.toProducer(),
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

((_: PauseableEventSource.Signature) => {})(PauseableEventSource);
