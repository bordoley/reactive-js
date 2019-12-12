import { subscribe } from "@reactive-js/rx";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNext,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { createSchedulerWithPriority } from "@reactive-js/node";

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
