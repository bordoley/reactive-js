import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Flowable from "../../computations/Flowable.js";
import * as Observable from "../../computations/Observable.js";
import * as Streamable from "../../computations/Streamable.js";
import { StreamableLike_stream } from "../../computations.js";
import { bindMethod, increment, pipe, returns } from "../../functions.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_isDisposed,
  ThrowBackpressureStrategy,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";

testModule(
  "Flowable",
  describe(
    "dispatchTo",
    test("dispatching a pauseable observable into a stream with backpressure", () => {
      using vts = VirtualTimeScheduler.create();

      const src = pipe(
        Observable.generate(increment, returns(-1), {
          delay: 1,
          delayStart: true,
        }),
        Observable.takeFirst<number>({ count: 5 }),
        Flowable.fromSynchronousObservable(),
      );

      const dest = Streamable.identity<number>()[StreamableLike_stream](vts, {
        backpressureStrategy: ThrowBackpressureStrategy,
        capacity: 1,
      });

      const dispatchToSubscription = pipe(
        src,
        Flowable.dispatchTo(dest),
        Observable.subscribe(vts),
      );

      const result: number[] = [];
      pipe(
        dest,
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(dispatchToSubscription[DisposableLike_isDisposed], expectTrue());

      pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    }),
  ),
);

((_: Flowable.Signature) => {})(Flowable);
