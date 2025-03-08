import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { StreamableLike_stream } from "../../computations.js";
import { bindMethod, increment, pipe, returns } from "../../functions.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_isDisposed,
  ThrowBackpressureStrategy,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as Observable from "../Observable.js";
import * as PauseableObservable from "../PauseableObservable.js";
import * as Streamable from "../Streamable.js";

testModule(
  "PauseableObservable",
  describe(
    "dispatchTo",
    test("dispatching a pauseable observable into a stream with backpressure", () => {
      using vts = VirtualTimeScheduler.create();

      const dest = Streamable.identity<number>()[StreamableLike_stream](vts, {
        backpressureStrategy: ThrowBackpressureStrategy,
        capacity: 1,
      });

      const dispatchToSubscription = pipe(
        Observable.generate(increment, returns(-1), {
          delay: 1,
          delayStart: true,
        }),
        Observable.takeFirst<number>({ count: 5 }),
        Observable.toPauseableObservable(vts),
        PauseableObservable.dispatchTo(dest),
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

((_: PauseableObservable.Signature) => {})(PauseableObservable);
