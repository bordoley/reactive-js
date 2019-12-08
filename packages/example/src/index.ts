import { connect } from "@reactive-js/rx";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNext,
  pipe,
} from "@reactive-js/observable";
import { createSchedulerWithPriority } from "@reactive-js/node";

const scheduler = createSchedulerWithPriority(500);

connect(
  pipe(
    generate(x => x + 1, 0),
    map(x => fromArray([x, x, x, x])),
    exhaust(),
    onNext(console.log),
  ),
  scheduler,
);
