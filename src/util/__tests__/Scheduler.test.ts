import {
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { pipe } from "../../functions.js";
import {
  SchedulerLike_schedule,
  SchedulerLike_yield,
  VirtualTimeSchedulerLike_run,
} from "../../util.js";

import * as Scheduler from "../Scheduler.js";

testModule(
  "Scheduler",
  test("non-nested, non-delayed continuations", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();

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
    const scheduler = Scheduler.createVirtualTimeScheduler({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    let i = 0;
    scheduler[SchedulerLike_schedule](scheduler => {
      while (i < 10) {
        result.push(i);
        i++;
        scheduler[SchedulerLike_yield]();
      }
    });

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  }),

  test("nested, yielding continuation", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    let i = 0;
    scheduler[SchedulerLike_schedule](scheduler => {
      let j = 100;

      while (i <= 4) {
        result.push(i);
        i++;

        scheduler[SchedulerLike_schedule](scheduler => {
          while (j < 102) {
            result.push(j);
            j++;
            scheduler[SchedulerLike_yield]();
          }
        });

        scheduler[SchedulerLike_yield]();
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
    const scheduler = Scheduler.createVirtualTimeScheduler({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    scheduler[SchedulerLike_schedule](scheduler => {
      let j = 0;
      scheduler[SchedulerLike_schedule](scheduler => {
        while (j < 4) {
          result.push(j);
          j++;
          scheduler[SchedulerLike_yield]();
        }
      });
    });

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(result, expectArrayEquals([0, 1, 2, 3]));
  }),

  test("root scheduler yields with delay, children rescheduled on root scheduler", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler({
      maxMicroTaskTicks: 1,
    });

    const result: number[] = [];

    let i = 0;
    scheduler[SchedulerLike_schedule](scheduler => {
      let j = 100;

      while (i < 4) {
        result.push(i);
        i++;

        scheduler[SchedulerLike_schedule](scheduler => {
          while (j < 102) {
            result.push(j);
            j++;
            scheduler[SchedulerLike_yield]();
          }
        });

        scheduler[SchedulerLike_yield](1);
      }
    });

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(
      result,
      expectArrayEquals([0, 100, 101, 1, 100, 101, 2, 100, 101, 3, 100, 101]),
    );
  }),
);
