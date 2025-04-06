import { Array_push } from "../../__internal__/constants.js";
import {
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { pipe } from "../../functions.js";
import {
  ClockLike_now,
  DisposableLike_dispose,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
  delayMs,
} from "../../utils.js";
import * as PauseableScheduler from "../PauseableScheduler.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "PauseableScheduler",
  test("pausing the scheduler from a continuation", () => {
    using vts = VirtualTimeScheduler.create();
    using pauseableScheduler = PauseableScheduler.create(vts);

    let result: number[] = [];

    pauseableScheduler[SchedulerLike_schedule](function* () {
      result[Array_push](0);
    });

    pauseableScheduler[SchedulerLike_schedule](function* () {
      result[Array_push](1);
      pauseableScheduler[PauseableLike_pause]();
    });

    pauseableScheduler[SchedulerLike_schedule](function* () {
      result[Array_push](2);
    });

    pauseableScheduler[PauseableLike_resume]();

    vts[VirtualTimeSchedulerLike_run]();

    pipe(result, expectArrayEquals([0, 1]));
  }),
  test("with disposed continuations", () => {
    using vts = VirtualTimeScheduler.create();
    using pauseableScheduler = PauseableScheduler.create(vts);

    let result: number[] = [];

    pauseableScheduler[SchedulerLike_schedule](function* () {
      result[Array_push](0);
    });

    const s1 = pauseableScheduler[SchedulerLike_schedule](function* () {
      result[Array_push](1);
    });

    const s2 = pauseableScheduler[SchedulerLike_schedule](function* () {
      result[Array_push](2);
    });

    pauseableScheduler[SchedulerLike_schedule](function* () {
      result[Array_push](3);
    });

    pauseableScheduler[PauseableLike_resume]();
    s1[DisposableLike_dispose]();
    s2[DisposableLike_dispose]();

    vts[VirtualTimeSchedulerLike_run]();

    pipe(result, expectArrayEquals([0, 3]));
  }),
  test("with delayed continuations", () => {
    using vts = VirtualTimeScheduler.create();
    using pauseableScheduler = PauseableScheduler.create(vts);

    let result: number[] = [];

    pauseableScheduler[SchedulerLike_schedule](function* () {
      yield delayMs(3);
      result[Array_push](pauseableScheduler[ClockLike_now]);
    });

    pauseableScheduler[SchedulerLike_schedule](function* () {
      yield delayMs(5);
      result[Array_push](pauseableScheduler[ClockLike_now]);
    });

    pauseableScheduler[PauseableLike_resume]();
    vts[VirtualTimeSchedulerLike_run]();

    pipe(result, expectArrayEquals([3, 5]));
  }),
)();
