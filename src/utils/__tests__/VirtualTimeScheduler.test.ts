import { Array_push } from "../../__internal__/constants.js";
import {
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  expectIsSome,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { pipe, raise } from "../../functions.js";
import {
  DisposableLike_error,
  DisposableLike_isDisposed,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
  delayMs,
} from "../../utils.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "VirtualTimeScheduler",
  test("non-nested, non-delayed continuations", () => {
    using vts = VirtualTimeScheduler.create();

    const result: number[] = [];

    vts[SchedulerLike_schedule](function* () {
      result[Array_push](0);
    });

    vts[SchedulerLike_schedule](function* () {
      result[Array_push](1);
    });

    vts[SchedulerLike_schedule](function* () {
      result[Array_push](2);
    });

    vts[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2]));
  }),

  test("non-nested, yielding continuation", () => {
    using vts = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    vts[SchedulerLike_schedule](function* () {
      for (let i = 0; i < 10; i++) {
        result[Array_push](i);
        yield;
      }
    });

    vts[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  }),

  test("nested, yielding continuation", () => {
    using vts = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    vts[SchedulerLike_schedule](function* () {
      for (let i = 0; i <= 4; i++) {
        result[Array_push](i);

        vts[SchedulerLike_schedule](function* () {
          for (let j = 100; j < 102; j++) {
            result[Array_push](j);
            yield;
          }
        });

        yield;
      }
    });

    vts[VirtualTimeSchedulerLike_run]();
    pipe(
      result,
      expectArrayEquals([
        0, 100, 101, 1, 100, 101, 2, 100, 101, 3, 100, 101, 4, 100, 101,
      ]),
    );
  }),

  test("nested continuation, rescheduled on scheduler", () => {
    using vts = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    vts[SchedulerLike_schedule](function* () {
      vts[SchedulerLike_schedule](function* () {
        for (let j = 0; j < 4; j++) {
          result[Array_push](j);
          yield;
        }
      });
    });

    vts[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2, 3]));
  }),

  test("root scheduler yields with delay, children rescheduled on root scheduler", () => {
    using vts = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    vts[SchedulerLike_schedule](function* () {
      for (let i = 0; i < 4; i++) {
        result[Array_push](i);

        vts[SchedulerLike_schedule](function* () {
          for (let j = 100; j < 102; j++) {
            result[Array_push](j);
            yield;
          }
        });

        yield;
      }
    });

    vts[VirtualTimeSchedulerLike_run]();
    pipe(
      result,
      expectArrayEquals([0, 100, 101, 1, 100, 101, 2, 100, 101, 3, 100, 101]),
    );
  }),

  test("when continuation throws an exception", () => {
    using vts = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    const disposable = vts[SchedulerLike_schedule](function* () {
      raise("throwing");
    });

    vts[VirtualTimeSchedulerLike_run]();

    pipe(disposable[DisposableLike_error], expectIsSome);
    pipe(vts[DisposableLike_error], expectIsNone);
  }),

  test("scheduling a continuation after being disposed does nothing.", () => {
    using vts = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    vts[VirtualTimeSchedulerLike_run]();

    const disposable = vts[SchedulerLike_schedule](function* () {});

    pipe(
      disposable[DisposableLike_isDisposed],
      expectTrue("scheduled continuation should be immediately disposed"),
    );
    pipe(disposable[DisposableLike_error], expectIsNone);
  }),

  test("requesting yield", () => {
    using vts = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 100,
    });

    let runCount = 0;
    vts[SchedulerLike_schedule](function* () {
      vts[SchedulerLike_requestYield]();
      if (runCount < 1) {
        runCount++;
        yield;
      }
    });

    vts[VirtualTimeSchedulerLike_run]();

    pipe(runCount, expectEquals(1));
  }),

  test("with multiple delayed continuations with same delay", () => {
    using vts = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    let count = 0;
    vts[SchedulerLike_schedule](function* () {
      yield delayMs(1);
      count++;
    });

    vts[SchedulerLike_schedule](function* () {
      yield delayMs(1);
      count++;
    });

    vts[VirtualTimeSchedulerLike_run]();

    pipe(count, expectEquals(2));
  }),
)();
