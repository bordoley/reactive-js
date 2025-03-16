import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
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
  DisposableLike_isDisposed,
  ThrowBackpressureStrategy,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as Computation from "../Computation.js";
import * as Observable from "../Observable.js";
import * as PauseableObservable from "../PauseableObservable.js";
import * as Streamable from "../Streamable.js";

testModule(
  "PauseableObservable",
  describe(
    "toProducer",
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
        Observable.toPauseableObservable(vts),
        PauseableObservable.toProducer(vts),
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

      pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    }),
  ),
);

((_: PauseableObservable.Signature) => {})(PauseableObservable);
