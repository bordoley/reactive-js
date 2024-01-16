import { Array_push } from "../../__internal__/constants.js";
import {
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  PauseableLike_resume,
  SchedulerLike_now,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as PauseableScheduler from "../PauseableScheduler.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "PauseableScheduler",
  test(
    "with disposed continuations",
    Disposable.usingLazy(VirtualTimeScheduler.create)(vts => {
      const scheduler = PauseableScheduler.create(vts);

      let result: number[] = [];

      scheduler[SchedulerLike_schedule](() => {
        result[Array_push](0);
      });

      const s1 = scheduler[SchedulerLike_schedule](() => {
        result[Array_push](1);
      });

      const s2 = scheduler[SchedulerLike_schedule](() => {
        result[Array_push](2);
      });

      scheduler[SchedulerLike_schedule](() => {
        result[Array_push](3);
      });

      scheduler[PauseableLike_resume]();
      s1[DisposableLike_dispose]();
      s2[DisposableLike_dispose]();

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([0, 3]));
    }),
  ),
  test(
    "with delayed continuations",
    Disposable.usingLazy(VirtualTimeScheduler.create)(vts => {
      const scheduler = PauseableScheduler.create(vts);

      let result: number[] = [];

      scheduler[SchedulerLike_schedule](
        () => {
          result[Array_push](scheduler[SchedulerLike_now]);
        },
        { delay: 3 },
      );

      scheduler[SchedulerLike_schedule](
        () => {
          result[Array_push](scheduler[SchedulerLike_now]);
        },
        { delay: 5 },
      );

      scheduler[PauseableLike_resume]();
      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([3, 5]));
    }),
  ),
);
