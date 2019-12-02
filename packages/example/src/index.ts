import {
  connect,
  exhaust,
  fromArray,
  generate,
  map,
  onNext,
  pipe,
} from "@reactive-js/rx-observable";

import { createSchedulerWithPriority } from "@reactive-js/node";

const scheduler = createSchedulerWithPriority(500);

const subscription = connect(
  pipe(
    generate(x => x + 1, 0),
    map(x => fromArray([x, x, x, x])),
    exhaust(),
    onNext(console.log),
  ),
  scheduler,
);
