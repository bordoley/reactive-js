import {
  expectTrue,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import { pipe } from "../../functions.js";
import { ClockLike_now, SchedulerLike_schedule, delayMs } from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import * as HostScheduler from "../HostScheduler.js";

testModule(
  "HostScheduler",
  testAsync("delayed continuation", async () => {
    using scheduler = HostScheduler.create();
    const start = scheduler[ClockLike_now];

    await pipe(
      scheduler[SchedulerLike_schedule](function* () {
        yield delayMs(20);
      }),
      DisposableContainer.toPromise,
    );

    const end = scheduler[ClockLike_now];
    pipe(end - start >= 20, expectTrue("expected more than 20 ms to elapse"));
  }),
)();
