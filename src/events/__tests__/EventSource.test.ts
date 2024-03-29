import { Array_length, Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsSome,
  test,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import PureStatelessComputationModuleTests from "../../computations/__tests__/fixtures/PureStatelessComputationModuleTests.js";
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
  bindMethod,
  compose,
  ignore,
  isSome,
  newInstance,
  none,
  pick,
  pipe,
  pipeLazy,
  raise,
} from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error } from "../../utils.js";
import * as EventSource from "../EventSource.js";

testModule(
  "EventSource",
  PureStatelessComputationModuleTests(
    EventSource,
    <T>() =>
      (arr: readonly T[]) => ({
        [EventSourceLike_addEventListener](listener: EventListenerLike<T>) {
          for (let i = 0; i < arr[Array_length]; i++) {
            listener[EventListenerLike_notify](arr[i]);
          }
          listener[DisposableLike_dispose]();
        },
      }),
    <T>() =>
      (eventSource: EventSourceLike<T>) => {
        const result: T[] = [];
        const subscription = pipe(
          eventSource,
          EventSource.addEventHandler(bindMethod(result, Array_push)),
        );

        if (isSome(subscription[DisposableLike_error])) {
          throw subscription[DisposableLike_error];
        }

        return result;
      },
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
    "mergeWith",
    test("with source that have different delays", () => {
      using vts = VirtualTimeScheduler.create();

      const result: number[] = [];
      const [ev1, ev2] = pipe(
        [
          [1, 3, 5],
          [2, 4, 6],
        ],
        ReadonlyArray.map<number[], EventSourceLike<number>, number>(
          compose(
            Observable.fromReadonlyArray({ delay: 3 }),
            Observable.toEventSource(vts),
          ),
        ),
      );

      pipe(
        ev1,
        EventSource.mergeWith(ev2),
        EventSource.addEventHandler(bindMethod(result, Array_push)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    }),
  ),
);

((_: EventSource.Signature) => {})(EventSource);
