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
import { ignore, pipe, raise } from "../../functions.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike_error,
  DisposableLike_isDisposed,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "VirtualTimeScheduler",
  test("non-nested, non-delayed continuations", () => {
    using vts = VirtualTimeScheduler.create();

    const result: number[] = [];

    vts[SchedulerLike_schedule](() => {
      result[Array_push](0);
    });

    vts[SchedulerLike_schedule](() => {
      result[Array_push](1);
    });

    vts[SchedulerLike_schedule](() => {
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

    let i = 0;
    vts[SchedulerLike_schedule](ctx => {
      while (i < 10) {
        result[Array_push](i);
        i++;
        ctx[ContinuationContextLike_yield]();
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

    let i = 0;
    vts[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
      let j = 100;

      while (i <= 4) {
        result[Array_push](i);
        i++;

        vts[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
          while (j < 102) {
            result[Array_push](j);
            j++;
            ctx[ContinuationContextLike_yield]();
          }
        });

        ctx[ContinuationContextLike_yield]();
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

    vts[SchedulerLike_schedule](() => {
      let j = 0;
      vts[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
        while (j < 4) {
          result[Array_push](j);
          j++;
          ctx[ContinuationContextLike_yield]();
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

    let i = 0;
    vts[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
      let j = 100;

      while (i < 4) {
        result[Array_push](i);
        i++;

        vts[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
          while (j < 102) {
            result[Array_push](j);
            j++;
            ctx[ContinuationContextLike_yield]();
          }
        });

        ctx[ContinuationContextLike_yield]();
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

    const disposable = vts[SchedulerLike_schedule](() => {
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

    const disposable = vts[SchedulerLike_schedule](ignore);

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
    vts[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
      vts[SchedulerLike_requestYield]();
      if (runCount < 1) {
        runCount++;
        ctx[ContinuationContextLike_yield]();
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
    vts[SchedulerLike_schedule](
      () => {
        count++;
      },
      { delay: 1 },
    );

    vts[SchedulerLike_schedule](
      () => {
        count++;
      },
      { delay: 1 },
    );

    vts[VirtualTimeSchedulerLike_run]();

    pipe(count, expectEquals(2));
  }),
)();
