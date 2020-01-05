import { createSchedulerWithPriority } from "@reactive-js/node";
import { pipe } from "@reactive-js/pipe";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNotify,
  subscribe,
} from "@reactive-js/rx";

const scheduler = createSchedulerWithPriority(500);

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
