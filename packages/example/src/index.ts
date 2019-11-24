import { create as eventLoopSchedulerCreate } from "@reactive-js/eventloop-scheduler";
import { connect, lift } from "@reactive-js/rx-observable";
import {
  fromArray,
  fromScheduledValues,
  generate,
} from "@reactive-js/rx-observables";
import {
  concat,
  exhaust,
  ignoreElements,
  keep,
  map,
  merge,
  onComplete,
  onNext,
  switch_,
} from "@reactive-js/rx-operators";
import { registerDefaultScheduler } from "@reactive-js/scheduler";
const scheduler = eventLoopSchedulerCreate(500);
registerDefaultScheduler(scheduler);

/*
connect(
  lift(
    fromDelayedValues([1000, 1], [2000, 2], [3000, 3], [3000, 4]),
    onNext(next => {
      const time = Date.now();
      console.log(time + ": " + next);
    }),
    map(x => x + 10),
    onNext(next => {
      const time = Date.now();
      console.log("mapped: " + time + ": " + next);
    }),
    keep(x => x % 2 != 0),
    onNext(next => {
      const time = Date.now();
      console.log("keeped: " + time + ": " + next);
    }),
    ignoreElements(),
    onNext(_ => console.log("wtf")),
    onComplete(_ => console.log("completed")),
  ),
  scheduler,
);
*/

/*
connect(
  lift(
    generate(x => x + 1, 0, 500),
    map(x =>
      fromArray(
        [
          [x, 1],
          [x, 2],
          [x, 3],
          [x, 4],
        ],
        1000,
      ),
    ),
    merge(),
    onNext(console.log),
  ),
  scheduler,
);*/

/*
connect(
  lift(
    generate(x => x + 1, 0, 500),
    map(x => generate(x => x, x, 100)),
    switch_(),
    onNext(console.log),
  ),
  scheduler,
);
*/

connect(
  lift(
    generate(x => x + 1, 0),
    map(x => fromArray([x, x, x, x])),
    exhaust(),
    onNext(console.log),
  ),
);
