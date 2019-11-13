import { connect, lift } from "@rx-min/rx-core";
import { ofDelayedValues, generate, merge } from "@rx-min/rx-observables";
import {
  keep,
  map,
  onNext,
  ignoreElements,
  onComplete,
} from "@rx-min/rx-operators";
import { RxNodeScheduler } from "@rx-min/rx-node-scheduler";

const scheduler = RxNodeScheduler.create(1);
/*
connect(
  lift(
    ofDelayedValues([1000, 1], [2000, 2], [3000, 3], [3000, 4]),
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

connect(
  lift(
    merge(
      generate(x => x + 2, 1),
      generate(x => x + 2, 0),
    ),
    onNext(console.log),
  ),
  scheduler,
);
