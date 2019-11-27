import { connect, pipe } from "@reactive-js/rx-observable";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNext,
} from "@reactive-js/rx-observables";

import { create as createEventLoopScheduler } from "@reactive-js/eventloop-scheduler";
import { registerDefaultScheduler } from "@reactive-js/scheduler";

const scheduler = createEventLoopScheduler(500);
registerDefaultScheduler(scheduler);

const subscription = connect(
  pipe(
    generate(x => x + 1, 0),
    map(x => fromArray([x, x, x, x])),
    exhaust(),
    onNext(console.log),
  ),
);
