import {
  describe,
  expectArrayEquals,
  expectIsSome,
  expectPromiseToThrow,
  test,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { PureComputationModule } from "../../computations.js";
import PureComputationModuleTests from "../../computations/__tests__/fixtures/PureComputationModuleTests.js";
import { VirtualTimeSchedulerLike_run } from "../../concurrent.js";
import * as Observable from "../../concurrent/Observable.js";
import * as VirtualTimeScheduler from "../../concurrent/VirtualTimeScheduler.js";
import { EventSourceLike } from "../../events.js";
import {
  Optional,
  bind,
  compose,
  ignore,
  isSome,
  newInstance,
  pick,
  pipe,
  pipeLazy,
  raise,
} from "../../functions.js";
import { DisposableLike_error } from "../../utils.js";
import * as EventSource from "../EventSource.js";

testModule(
  "EventSource",
  PureComputationModuleTests(
    EventSource as PureComputationModule<EventSource.Type>,
    <T>() => EventSource.fromIterable<T>(),
    <T>() =>
      (eventSource: EventSourceLike<T>) => {
        const result: T[] = [];
        const subscription = pipe(
          eventSource,
          EventSource.addEventHandler(bind(Array.prototype.push, result)),
        );

        if (isSome(subscription[DisposableLike_error])) {
          throw subscription[DisposableLike_error];
        }

        return result;
      },
  ),
  describe(
    "buffer",
    test(
      "when the event listener throws an error when the source completes with a tail value",
      pipeLazy(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        EventSource.fromIterable(),
        EventSource.buffer({ count: 2 }),
        EventSource.addEventHandler(x => (x.length !== 2 ? raise() : ignore())),
        pick(DisposableLike_error),
        expectIsSome,
      ),
    ),
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

      const result = await pipe(
        promise,
        EventSource.fromPromise(),
        EventSource.toReadonlyArrayAsync(),
      );
      pipe(result, expectArrayEquals<Optional<number>>([1]));
    }),
    testAsync("when the promise reject", async () => {
      const error = newInstance(Error);
      const promise = Promise.reject(error);

      await pipe(
        pipe(
          promise,
          EventSource.fromPromise(),
          EventSource.toReadonlyArrayAsync(),
        ),
        expectPromiseToThrow,
      );
    }),
  ),
  describe(
    "merge",
    test("with source that have different delays", () => {
      const vts = VirtualTimeScheduler.create();

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
        EventSource.addEventHandler(bind(Array.prototype.push, result)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }),
  ),
);

((_: EventSource.Signature) => {})(EventSource);
