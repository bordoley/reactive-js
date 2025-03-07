import { Array_push } from "../../__internal__/constants.js";
import {
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as PauseableScheduler from "../../computations/PauseableScheduler.js";
import { PauseableLike_resume } from "../../computations.js";
import { pipe } from "../../functions.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_dispose,
  SchedulerLike_now,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";

testModule(
  "PauseableScheduler",
  test("with disposed continuations", () => {
    using vts = VirtualTimeScheduler.create();
    using pauseableScheduler = PauseableScheduler.create(vts);

    let result: number[] = [];

    pauseableScheduler[SchedulerLike_schedule](() => {
      result[Array_push](0);
    });

    const s1 = pauseableScheduler[SchedulerLike_schedule](() => {
      result[Array_push](1);
    });

    const s2 = pauseableScheduler[SchedulerLike_schedule](() => {
      result[Array_push](2);
    });

    pauseableScheduler[SchedulerLike_schedule](() => {
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

    pauseableScheduler[SchedulerLike_schedule](
      () => {
        result[Array_push](pauseableScheduler[SchedulerLike_now]);
      },
      { delay: 3 },
    );

    pauseableScheduler[SchedulerLike_schedule](
      () => {
        result[Array_push](pauseableScheduler[SchedulerLike_now]);
      },
      { delay: 5 },
    );

    pauseableScheduler[PauseableLike_resume]();
    vts[VirtualTimeSchedulerLike_run]();

    pipe(result, expectArrayEquals([3, 5]));
  }),
);
