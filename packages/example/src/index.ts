import { getHostScheduler } from "@reactive-js/node";
import { pipe } from "@reactive-js/pipe";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNotify,
  subscribe,
} from "@reactive-js/observable";
import {
  createPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/schedulers";

const scheduler = pipe(
  getHostScheduler(), 
  createPriorityScheduler,
  toSchedulerWithPriority(1)
);

pipe(
  generate(
    x => x + 1,
    () => 0,
  ),
  map(x => fromArray([x, x, x, x])),
  exhaust(),
  onNotify(console.log),
  subscribe(scheduler),
);
