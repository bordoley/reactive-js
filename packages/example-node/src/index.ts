import * as Observable from "@reactive-js/core/rx/Observable";
import { pipe } from "@reactive-js/core/functions";
import * as Scheduler from "@reactive-js/core/scheduling/Scheduler";
import { DisposableLike_dispose } from "@reactive-js/core/util";

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

pipe(
  scheduler,
  Scheduler.schedule(
    () => {
      subscription[DisposableLike_dispose]();
    },
    { delay: 20000 },
  ),
);
