import { Array_length, Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsSome,
  expectToThrowError,
  test,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import ComputationModuleTests from "../../computations/__tests__/fixtures/ComputationModuleTests.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
} from "../../computations.js";
import * as Observable from "../../concurrent/Observable.js";
import * as VirtualTimeScheduler from "../../concurrent/VirtualTimeScheduler.js";
import { VirtualTimeSchedulerLike_run } from "../../concurrent.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../events.js";
import {
  Optional,
  Tuple2,
  arrayEquality,
  bind,
  bindMethod,
  compose,
  ignore,
  incrementBy,
  isSome,
  newInstance,
  none,
  pick,
  pipe,
  pipeLazy,
  raise,
  returns,
  tuple,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { DisposableLike_dispose, DisposableLike_error } from "../../utils.js";
import * as EventSource from "../EventSource.js";

testModule(
  "EventSource",
  ComputationModuleTests({
    ...EventSource,
    fromReadonlyArray<T>() {
      return (arr: readonly T[]) => ({
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isSynchronous]: false as const,

        [EventSourceLike_addEventListener](listener: EventListenerLike<T>) {
          for (let i = 0; i < arr[Array_length]; i++) {
            listener[EventListenerLike_notify](arr[i]);
          }
          listener[DisposableLike_dispose]();
        },
      });
    },
    toReadonlyArray<T>() {
      return (eventSource: EventSourceLike<T>) => {
        const result: T[] = [];
        const subscription = pipe(
          eventSource,
          EventSource.addEventHandler(bindMethod(result, Array_push)),
        );

        if (isSome(subscription[DisposableLike_error])) {
          throw subscription[DisposableLike_error];
        }

        return result;
      };
    },
  }),
  test("combineLatest", () => {
    using vts = VirtualTimeScheduler.create();
    const result: Tuple2<number, number>[] = [];

    pipe(
      EventSource.combineLatest<number, number>(
        pipe(
          Observable.generate(incrementBy(2), returns(1), { delay: 2 }),
          Observable.takeFirst<number>({ count: 3 }),
          Observable.toEventSource(vts),
        ),
        pipe(
          Observable.generate(incrementBy(2), returns(0), { delay: 3 }),
          Observable.takeFirst<number>({ count: 2 }),
          Observable.toEventSource(vts),
        ),
      ),
      EventSource.addEventHandler(bind(result.push, result)),
    );

    vts[VirtualTimeSchedulerLike_run]();

    pipe(
      result,
      expectArrayEquals([tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)], {
        valuesEquality: arrayEquality(),
      }),
    );
  }),
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
    "fromPromise",
    testAsync("when the promise resolves", async () => {
      const promise = Promise.resolve(1);

      let result: Optional<number> = none;

      pipe(
        promise,
        EventSource.fromPromise(),
        EventSource.addEventHandler(e => {
          result = e;
        }),
      );

      await promise;

      pipe(result, expectEquals<Optional<number>>(1));
    }),
    testAsync("when the promise reject", async () => {
      const error = newInstance(Error);
      const promise = Promise.reject(error);

      const subscription = pipe(
        promise,
        EventSource.fromPromise(),
        EventSource.addEventHandler(ignore),
      );

      try {
        await promise;
      } catch (e) {}

      pipe(
        subscription[DisposableLike_error],
        expectEquals<Optional<Error>>(error),
      );
    }),
  ),
  describe(
    "merge",
    test("with source that have different delays", () => {
      using vts = VirtualTimeScheduler.create();

      const result: number[] = [];
      const [ev1, ev2, ev3] = pipe(
        [
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
        ],
        ReadonlyArray.map<number[], EventSourceLike<number>, number>(
          compose(
            Observable.fromReadonlyArray({ delay: 3 }),
            Observable.toEventSource(vts),
          ),
        ),
      );

      pipe(
        EventSource.merge(ev1, ev2, ev3),
        EventSource.addEventHandler(bindMethod(result, Array_push)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }),
  ),
  describe(
    "withLatestFrom",
    test("when source and latest are interlaced", () => {
      using vts = VirtualTimeScheduler.create();

      const result: Tuple2<number, number>[] = [];

      pipe(
        [0, 1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.toEventSource<number>(vts),
        EventSource.withLatestFrom<number, number>(
          pipe(
            [0, 1, 2, 3],
            Observable.fromReadonlyArray<number>({ delay: 2 }),
            Observable.toEventSource<number>(vts),
          ),
        ),
        EventSource.addEventHandler(bind(result.push, result)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      expectArrayEquals([tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)], {
        valuesEquality: arrayEquality(),
      })(result);
    }),
    test("when latest produces no values", () => {
      using vts = VirtualTimeScheduler.create();

      const result: number[] = [];

      pipe(
        [0],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.toEventSource<number>(vts),
        EventSource.withLatestFrom(
          pipe(
            Observable.empty<number>({ delay: 0 }),
            Observable.toEventSource<number>(vts),
          ),
          returns(1),
        ),
        EventSource.addEventHandler(bind(result.push, result)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      expectArrayEquals([] as number[])(result);
    }),
    test("when latest throws", () => {
      using vts = VirtualTimeScheduler.create();

      const error = newInstance(Error);

      const result = pipe(
        [0],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.toEventSource<number>(vts),
        EventSource.withLatestFrom(
          pipe(
            Observable.raise<number>({ raise: returns(error) }),
            Observable.toEventSource<number>(vts),
          ),
          returns(1),
        ),
        EventSource.addEventHandler(ignore),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(
        pipeLazy(result, Disposable.raiseIfDisposedWithError),
        expectToThrowError(error),
      );
    }),
  ),
  describe(
    "zipLatest",
    test("zip two delayed observable", () => {
      using vts = VirtualTimeScheduler.create();
      const result: number[] = [];

      pipe(
        EventSource.zipLatest(
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8],
            Observable.fromReadonlyArray({ delay: 1, delayStart: true }),
            Observable.toEventSource(vts),
          ),
          pipe(
            [1, 2, 3, 4],
            Observable.fromReadonlyArray({ delay: 2, delayStart: true }),
            Observable.toEventSource(vts),
          ),
        ),
        EventSource.map<Tuple2<number, number>, number>(([a, b]) => a + b),
        EventSource.addEventHandler(bind(result.push, result)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([2, 5, 8, 11]));
    }),
  ),
);

((_: EventSource.Signature) => {})(EventSource);
