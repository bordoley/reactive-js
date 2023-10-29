import * as Observable from "@reactive-js/core/concurrent/Observable";
import * as Enumerable from "@reactive-js/core/collections/Enumerable";
import {
  SideEffect,
  bindMethod,
  incrementBy,
  pipe,
  returns,
} from "@reactive-js/core/functions";
import * as Scheduler from "@reactive-js/core/concurrent/Scheduler";
import { SchedulerLike_schedule } from "@reactive-js/core/concurrent";
import { DisposableLike_dispose } from "@reactive-js/core/utils";

const scheduler = Scheduler.createHostScheduler();

const subscription = pipe(
  Enumerable.generate(incrementBy(1), returns(0)),
  Observable.fromEnumerable({ delay: 1, delayStart: true }),
  Observable.throttle(2000),
  Observable.map(x => `${x}`),
  Observable.forEach(x => console.log(x)),
  Observable.subscribe(scheduler),
);

scheduler[SchedulerLike_schedule](
  bindMethod(subscription, DisposableLike_dispose) as SideEffect,
  { delay: 20000 },
);
