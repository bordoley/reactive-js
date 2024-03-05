import { Array_push } from "../../__internal__/constants.js";
import {
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import { pipe } from "../../functions.js";
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
);
