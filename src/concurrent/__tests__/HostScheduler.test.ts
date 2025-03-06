import {
  expectTrue,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import { SchedulerLike_now } from "../../concurrent.js";
import { pipe } from "../../functions.js";
import * as HostScheduler from "../HostScheduler.js";
import * as Observable from "../Observable.js";

testModule(
  "HostScheduler",
  testAsync("delayed continuation", async () => {
    using scheduler = HostScheduler.create();
    const start = scheduler[SchedulerLike_now];

    await pipe(
      Observable.empty({ delay: 20 }),
      Observable.firstAsync(scheduler),
    );
    const end = scheduler[SchedulerLike_now];
    pipe(end - start >= 20, expectTrue("expected more than 20 ms to elapse"));
  }),
);
