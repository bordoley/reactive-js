import * as Observable from "../Observable.js";
import * as PauseableObservable from "../PauseableObservable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Scheduler from "../Scheduler.js";
import * as Streamable from "../Streamable.js";
import {
  describe,
  expectArrayEquals,
  expectTrue,
  test,
  testModule,
} from "../__internal__/testing.js";
import { increment, isSome, pipe, raiseError, returns } from "../functions.js";
import {
  DisposableLike_error,
  PauseableLike_isPaused,
  PauseableLike_resume,
  PauseableObservableLike,
  SchedulerLike,
  StoreLike_value,
  StreamableLike_stream,
  VirtualTimeSchedulerLike,
  VirtualTimeSchedulerLike_run,
} from "../types.js";
import ContainerModuleTests from "./fixtures/ContainerModuleTests.js";

const fromReadonlyArray =
  <T>(scheduler: SchedulerLike) =>
  (arr: ReadonlyArray<T>): PauseableObservableLike<T> =>
    pipe(arr, ReadonlyArray.flow(scheduler));

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
  describe(
    "sinkInto",
    test("sinking a pauseable observable into a stream with backpressure", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const src = pipe(
        Observable.generate(increment, returns(-1)),
        Observable.delay(1, { delayStart: true }),
        Observable.flow(scheduler),
        PauseableObservable.takeFirst({ count: 5 }),
      );

      const dest = Streamable.identity<number>()[StreamableLike_stream](
        scheduler,
        {
          backpressureStrategy: "throw",
          capacity: 1,
        },
      );

      expectTrue(src[PauseableLike_isPaused][StoreLike_value]);

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
