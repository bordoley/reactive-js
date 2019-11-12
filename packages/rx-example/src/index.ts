import { lift } from "@rx-min/rx-core";
import { ofArray, repeat } from "@rx-min/rx-observables";
import {
  keep,
  map,
  onNext,
  ignoreElements,
  onComplete,
} from "@rx-min/rx-operators";
import {
  connectNormalPriority,
  connectIdlePriority,
} from "@rx-min/rx-scheduler";

connectNormalPriority(
  lift(
    ofArray([1, 2, 3, 4]),
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
);

connectIdlePriority(
  lift(
    repeat(ofArray([1, 2, 3, 4])),
    onNext(next => {
      const time = Date.now();
      console.log("repeated: " + time + ": " + next);
    }),
  ),
);
