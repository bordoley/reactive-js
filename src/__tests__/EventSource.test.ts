import * as Disposable from "../Disposable.js";
import * as EventSource from "../EventSource.js";
import * as Observable from "../Observable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Scheduler from "../Scheduler.js";
import {
  describe,
  expectArrayEquals,
  expectIsSome,
  test,
  testModule,
} from "../__internal__/testing.js";
import {
  compose,
  ignore,
  isSome,
  pick,
  pipe,
  pipeLazy,
  raise,
} from "../functions.js";
import {
  DisposableLike_error,
  EventSourceLike,
  VirtualTimeSchedulerLike_run,
} from "../types.js";
import ContainerModuleTests from "./fixtures/ContainerModuleTests.js";

const toReadonlyArray =
  <T>() =>
  (eventSource: EventSourceLike<T>) => {
    const result: T[] = [];
    const subscription = pipe(
      eventSource,
      EventSource.addEventHandler(v => {
        result.push(v);
      }),
    );

    if (isSome(subscription[DisposableLike_error])) {
      throw subscription[DisposableLike_error];
    }

    return result;
  };

testModule(
  "EventSource",
  ContainerModuleTests(
    EventSource,
    () => Disposable.disposed,
    <T>() => ReadonlyArray.toEventSource<T>(),
    toReadonlyArray,
  ),
  describe(
    "buffer",
    test(
      "when the event listener throws an error when the source completes with a tail value",
      pipeLazy(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        ReadonlyArray.toEventSource(),
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
    "merge",
    test("with source that have different delays", () => {
      const vts = Scheduler.createVirtualTimeScheduler();

      const result: number[] = [];
      const [ev1, ev2, ev3] = pipe(
        [
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
        ],
        ReadonlyArray.map<number[], EventSourceLike<number>, number>(
          compose(
            Observable.fromReadonlyArray(),
            Observable.delay(3),
            Observable.toEventSource(vts),
          ),
        ),
      );

      pipe(
        EventSource.merge(ev1, ev2, ev3),
        EventSource.addEventHandler(x => result.push(x)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }),
  ),
);

((_: EventSource.Signature) => {})(EventSource);
