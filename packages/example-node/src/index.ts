import * as Observable from "@reactive-js/core/rx/Observable";
import { pipe } from "@reactive-js/core/functions";
import * as Scheduler from "@reactive-js/core/util/Scheduler";
import {
  DisposableLike_dispose,
  SchedulerLike_schedule,
} from "@reactive-js/core/util";

const scheduler = Scheduler.createHostScheduler();

const subscription = pipe(
  Observable.generate(
    x => x + 1,
    () => 0,
    { delay: 1 },
  ),
  Observable.throttle(2000),
  Observable.map(x => `${x}`),
  Observable.forEach(x => console.log(x)),
  Observable.subscribe(scheduler),
);

scheduler[SchedulerLike_schedule](
  () => {
    subscription[DisposableLike_dispose]();
  },
  { delay: 20000 },
);
