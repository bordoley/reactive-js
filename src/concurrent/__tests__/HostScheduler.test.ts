import {
  expectTrue,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import { SchedulerLike_now } from "../../concurrent.js";
import { pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as HostScheduler from "../HostScheduler.js";
import * as Observable from "../Observable.js";

testModule(
  "HostScheduler",
  testAsync(
    "delayed continuation",
    Disposable.usingAsyncLazy(HostScheduler.create)(async scheduler => {
      const start = scheduler[SchedulerLike_now];

      await pipe(
        Observable.empty({ delay: 20 }),
        Observable.firstAsync(scheduler),
      );
      const end = scheduler[SchedulerLike_now];

      expectTrue(end - start >= 20);
    }),
  ),
);
