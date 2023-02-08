import { toObservable as arrayToObservable } from "../../containers/ReadonlyArray";
import { pipe } from "../../functions";
import Observable from "../../rx/Observable";
import { run } from "../../scheduling/Continuation";
import { create as createVirtualTimeScheduler } from "../../scheduling/VirtualTimeScheduler";
import { toObservable } from "../../streaming/Flowable";
import { test, testModule } from "../testing";

testModule(
  "Flowable",
  test("toObservable", () => {
    const scheduler = createVirtualTimeScheduler();

    const result: number[] = [];

    pipe(
      [0, 1, 2, 3, 4],
      arrayToObservable({ delay: 1 }),
      Observable.toFlowable(),
      toObservable<number>(),
      Observable.forEach<number>(v => {
        result.push(v);
      }),
      Observable.subscribe(scheduler),
    );

    run(scheduler);
  }),
);
