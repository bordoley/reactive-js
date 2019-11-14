import { connect, Observable } from "@reactive-js/rx-core";
import {
  fromDelayedValues,
  generate,
  fromArray,
} from "@reactive-js/rx-observables";
import {
  keep,
  exhaust,
  map,
  merge,
  concat,
  onNext,
  ignoreElements,
  onComplete,
  switch_,
} from "@reactive-js/rx-operators";
import { NodeScheduler } from "@reactive-js/node-scheduler";

const scheduler = NodeScheduler.create(1);
/*
connect(
  Observable.lift(
    fromDelayedValues([1000, 1], [2000, 2], [3000, 3], [3000, 4]),
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

/*
connect(
  Observable.lift(
    generate(x => x + 1, 0, 500),
    map(x =>
      fromArray(
        [
          [x, 1],
          [x, 2],
          [x, 3],
          [x, 4],
        ],
        1000,
      ),
    ),
    merge(),
    onNext(console.log),
  ),
  scheduler,
);*/

/*
connect(
  Observable.lift(
    generate(x => x + 1, 0, 500),
    map(x => generate(x => x, x, 100)),
    switch_(),
    onNext(console.log),
  ),
  scheduler,
);
*/

connect(
  Observable.lift(
    generate(x => x + 1, 0, 233),
    map(x => fromArray([x, x, x, x], 1000)),
    exhaust(),
    onNext(console.log),
  ),
  scheduler,
);
