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
    const scheduler = VirtualTimeScheduler.create();

    const result: number[] = [];

    scheduler[SchedulerLike_schedule](() => {
      result.push(0);
    });

    scheduler[SchedulerLike_schedule](() => {
      result.push(1);
    });

    scheduler[SchedulerLike_schedule](() => {
      result.push(2);
    });

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2]));
  }),

  test("non-nested, yielding continuation", () => {
    const scheduler = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    let i = 0;
    scheduler[SchedulerLike_schedule](ctx => {
      while (i < 10) {
        result.push(i);
        i++;
        ctx[ContinuationContextLike_yield]();
      }
    });

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  }),

  test("nested, yielding continuation", () => {
    const scheduler = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    let i = 0;
    scheduler[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
      let j = 100;

      while (i <= 4) {
        result.push(i);
        i++;

        scheduler[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
          while (j < 102) {
            result.push(j);
            j++;
            ctx[ContinuationContextLike_yield]();
          }
        });

        ctx[ContinuationContextLike_yield]();
      }
    });

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(
      result,
      expectArrayEquals([
        0, 100, 101, 1, 100, 101, 2, 100, 101, 3, 100, 101, 4, 100, 101,
      ]),
    );
  }),

  test("nested continuation, rescheduled on scheduler", () => {
    const scheduler = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    scheduler[SchedulerLike_schedule](() => {
      let j = 0;
      scheduler[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
        while (j < 4) {
          result.push(j);
          j++;
          ctx[ContinuationContextLike_yield]();
        }
      });
    });

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2, 3]));
  }),

  test("root scheduler yields with delay, children rescheduled on root scheduler", () => {
    const scheduler = VirtualTimeScheduler.create({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    let i = 0;
    scheduler[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
      let j = 100;

      while (i < 4) {
        result.push(i);
        i++;

        scheduler[SchedulerLike_schedule]((ctx: ContinuationContextLike) => {
          while (j < 102) {
            result.push(j);
            j++;
            ctx[ContinuationContextLike_yield]();
          }
        });

        ctx[ContinuationContextLike_yield]();
      }
    });

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(
      result,
      expectArrayEquals([0, 100, 101, 1, 100, 101, 2, 100, 101, 3, 100, 101]),
    );
  }),
);
