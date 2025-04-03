import * as Observable from "@reactive-js/core/computations/Observable";
import { pipe } from "@reactive-js/core/functions";
import * as HostScheduler from "@reactive-js/core/utils/HostScheduler";
import * as EventSource from "@reactive-js/core/computations/EventSource";

using scheduler = HostScheduler.create();

await pipe(
  Observable.genPure(
    function* () {
      let i = 0;
      while (true) {
        yield i++;
      }
    },
    {
      delay: 1,
      delayStart: true,
    },
  ),
  Observable.throttle(2000),
  Observable.map(x => `${x}`),
  Observable.forEach(x => console.log(x)),
  Observable.takeUntil(
    Observable.genPure(
      function* () {
        yield 1;
      },
      {
        delay: 20000,
        delayStart: true,
      },
    ),
  ),
  EventSource.lastAsync({ scheduler }),
);
