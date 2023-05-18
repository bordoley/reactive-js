import * as DeferredObservable from "../DeferredObservable.js";
import * as Observable from "../Observable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Runnable from "../Runnable.js";
import * as Scheduler from "../Scheduler.js";
import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
  testModule,
} from "../__internal__/testing.js";
import {
  alwaysTrue,
  identityLazy,
  lessThan,
  pipe,
  pipeLazy,
} from "../functions.js";
import { VirtualTimeSchedulerLike_run } from "../types.js";
import HigherOrderObservableTypeClassTests from "./fixtures/HigherOrderObservableTypeClassTests.js";

testModule(
  "DeferredObservable",
  HigherOrderObservableTypeClassTests<DeferredObservable.Type>(
    DeferredObservable,
    identityLazy,
  ),
  describe(
    "repeat",
    test(
      "when always repeating",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        DeferredObservable.repeat(),
        Observable.takeFirst<number>({ count: 6 }),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),

    test(
      "when repeating with a predicate",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        DeferredObservable.repeat<number>(lessThan(1)),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test("when the repeat function throws", () => {
      const err = new Error();
      pipe(
        pipeLazy(
          [1, 1],
          Observable.fromReadonlyArray(),
          DeferredObservable.repeat(_ => {
            throw err;
          }),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  ),

  describe(
    "retry",
    test(
      "retrys the container on an exception",
      pipeLazy(
        Observable.concat(
          pipe([1, 2, 3], Observable.fromReadonlyArray()),
          Observable.throws(),
        ),
        DeferredObservable.retry(alwaysTrue),
        Observable.takeFirst<number>({ count: 6 }),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),

  describe(
    "share",
    test("shared observable zipped with itself", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();
      const shared = pipe(
        [1, 2, 3],
        ReadonlyArray.toObservable({ delay: 1 }),
        DeferredObservable.share(scheduler, { replay: 1 }),
      );

      let result: number[] = [];
      pipe(
        Observable.zip(shared, shared),
        Observable.map<[number, number], number>(([a, b]) => a + b),
        Observable.forEach<number>(x => {
          result.push(x);
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();
      pipe(result, expectArrayEquals([2, 4, 6]));
    }),
  ),
);

((_: DeferredObservable.Signature) => {})(DeferredObservable);
