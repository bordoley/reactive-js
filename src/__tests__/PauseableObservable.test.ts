import * as Observable from "../Observable.js";
import * as PauseableObservable from "../PauseableObservable.js";
import ReadonlyArray_flow from "../ReadonlyArray/__internal__/ReadonlyArray.flow.js";
import * as Runnable from "../Runnable.js";
import * as Scheduler from "../Scheduler.js";
import * as Streamable from "../Streamable.js";
import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import { increment, isSome, pipe, raiseError, returns } from "../functions.js";
import {
  DisposableLike_error,
  PauseableLike_resume,
  PauseableObservableLike,
  SchedulerLike,
  StreamableLike_stream,
  VirtualTimeSchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../types.js";
import ContainerModuleTests from "./fixtures/ContainerModuleTests.js";
import EffectsContainerModuleTests from "./fixtures/EffectsContainerModuleTests.js";

const fromReadonlyArray =
  <T>(scheduler: SchedulerLike) =>
  (arr: ReadonlyArray<T>): PauseableObservableLike<T> =>
    pipe(arr, ReadonlyArray_flow(scheduler));

const toReadonlyArray =
  <T>(scheduler: VirtualTimeSchedulerLike) =>
  (obs: PauseableObservableLike<T>) => {
    const result: T[] = [];
    const subscription = pipe(
      obs,
      Observable.forEach<T>(x => {
        result.push(x);
      }),
      Observable.subscribe(scheduler),
    );

    obs[PauseableLike_resume]();

    scheduler[VirtualTimeSchedulerLike_run]();
    const error = subscription[DisposableLike_error];

    if (isSome(error)) {
      raiseError<T[]>(error);
    }
    return result;
  };

testModule(
  "PauseableObservable",
  ContainerModuleTests(
    PauseableObservable,
    Scheduler.createVirtualTimeScheduler,
    fromReadonlyArray,
    toReadonlyArray,
  ),
  EffectsContainerModuleTests(
    PauseableObservable,
    Scheduler.createVirtualTimeScheduler,
    fromReadonlyArray,
    toReadonlyArray,
  ),
  describe(
    "sinkInto",
    test("sinking a pauseable observable into a stream with backpressure", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const src = pipe(
        Observable.generate(increment, returns(-1), {
          delay: 1,
          delayStart: true,
        }),
        Runnable.flow(scheduler),
        PauseableObservable.takeFirst({ count: 5 }),
      );

      const dest = Streamable.identity<number>()[StreamableLike_stream](
        scheduler,
        {
          backpressureStrategy: "throw",
          capacity: 1,
        },
      );

      pipe(
        src,
        PauseableObservable.sinkInto(dest),
        Observable.subscribe(scheduler),
      );

      const result: number[] = [];
      pipe(
        dest,
        Observable.forEach<number>(x => {
          result.push(x);
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    }),
  ),
);

((_: PauseableObservable.Signature) => {})(PauseableObservable);
