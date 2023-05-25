import * as Observable from "@reactive-js/core/Observable";
import {
  SideEffect,
  bindMethod,
  incrementBy,
  pipe,
  returns,
} from "@reactive-js/core/functions";
import * as Scheduler from "@reactive-js/core/Scheduler";
import {
  DisposableLike_dispose,
  SchedulerLike_schedule,
} from "@reactive-js/core";

const scheduler = Scheduler.createHostScheduler();

const subscription = pipe(
  Observable.generate(incrementBy(1), returns(0)),
  Observable.delay(1),
  Observable.throttle(2000),
  Observable.map(x => `${x}`),
  Observable.forEach(x => console.log(x)),
  Observable.subscribe(scheduler),
);

scheduler[SchedulerLike_schedule](
  bindMethod(subscription, DisposableLike_dispose) as SideEffect,
  { delay: 20000 },
);
