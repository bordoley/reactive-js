import * as Observable from "@reactive-js/core/computations/Observable";
import { incrementBy, pipe, returns } from "@reactive-js/core/functions";
import * as HostScheduler from "@reactive-js/core/utils/HostScheduler";

using scheduler = HostScheduler.create();

await pipe(
  Observable.generate(incrementBy(1), returns(0), {
    delay: 1,
    delayStart: true,
  }),
  Observable.throttle(2000),
  Observable.map(x => `${x}`),
  Observable.forEach(x => console.log(x)),
  Observable.takeUntil(Observable.empty({ delay: 20000 })),
  Observable.lastAsync(scheduler),
);
