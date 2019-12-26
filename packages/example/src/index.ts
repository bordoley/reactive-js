import { createSchedulerWithPriority } from "@reactive-js/node";
import { pipe } from "@reactive-js/pipe";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNext,
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
  onNext(console.log),
  subscribe(scheduler),
);
