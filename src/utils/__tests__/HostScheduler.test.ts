import {
  expectTrue,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import { ignore, pipe } from "../../functions.js";
import { SchedulerLike_now, SchedulerLike_schedule } from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import * as HostScheduler from "../HostScheduler.js";

testModule(
  "HostScheduler",
  testAsync("delayed continuation", async () => {
    using scheduler = HostScheduler.create();
    const start = scheduler[SchedulerLike_now];

    await pipe(
      scheduler[SchedulerLike_schedule](ignore, { delay: 20 }),
      DisposableContainer.toPromise,
    );

    const end = scheduler[SchedulerLike_now];
    pipe(end - start >= 20, expectTrue("expected more than 20 ms to elapse"));
  }),
);
