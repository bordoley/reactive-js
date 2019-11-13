import { connect, lift } from "@rx-min/rx-core";
import { ofDelayedValues } from "@rx-min/rx-observables";
import {
  keep,
  map,
  onNext,
  ignoreElements,
  onComplete,
} from "@rx-min/rx-operators";
import { scheduler } from "@rx-min/rx-node-scheduler";

//import { VirtualTimeScheduler} from '@rx-min/rx-virtualtime-scheduler';
//const scheduler = VirtualTimeScheduler.create();

connect(
  lift(
    ofDelayedValues(
      [1000, 1],
      [2000, 2], 
      [3000, 3], 
      [3000, 4],
    ),
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

//scheduler.run();

console.log("exit");
