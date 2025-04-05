import * as Observable from "@reactive-js/core/computations/Observable";
import { pipe } from "@reactive-js/core/functions";
import * as HostScheduler from "@reactive-js/core/utils/HostScheduler";
import * as EventSource from "@reactive-js/core/computations/EventSource";
import { delayMs } from "@reactive-js/core/utils";

using scheduler = HostScheduler.create();

await pipe(
  Observable.genPure(
    function* () {
      let i = 0;
      while (true) {
        yield i++;
        yield delayMs(1)
      }
    },
  ),
  Observable.throttle(2000, {mode: "first" }),
  Observable.map(x => `${x}`),
  Observable.forEach(x => console.log(x)),
  Observable.takeUntil(
    Observable.genPure(
      function* () {
        yield delayMs(20000);
        yield 1;
      },
    ),
  ),
  EventSource.lastAsync({ scheduler }),
);
