import { Array_length, Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectIsSome,
  expectToThrowError,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import ComputationModuleTests from "../../computations/__tests__/fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "../../computations/__tests__/fixtures/ConcurrentReactiveComputationModuleTests.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  Computation_multicastOfT,
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
  Tuple2,
  arrayEquality,
  bind,
  bindMethod,
  compose,
  ignore,
  isSome,
  newInstance,
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

const EventSourceTypes = {
  [Computation_multicastOfT]: EventSource.never(),
};

testModule(
  "EventSource",
  ComputationModuleTests(
    {
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
    },
    EventSourceTypes,
  ),
  ConcurrentReactiveComputationModuleTests(
    {
      ...EventSource,
      fromObservable: Observable.toEventSource,
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
