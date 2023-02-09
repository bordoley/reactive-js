import ReadonlyArray from "../../containers/ReadonlyArray";
import { pipe } from "../../functions";
import Observable from "../../rx/Observable";
import Continuation from "../../scheduling/Continuation";
import VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler";
import Flowable from "../../streaming/Flowable";
import { test, testModule } from "../testing";

testModule(
  "Flowable",
  test("toObservable", () => {
    const scheduler = VirtualTimeScheduler.create();

    const result: number[] = [];

    pipe(
      [0, 1, 2, 3, 4],
      ReadonlyArray.toObservable({ delay: 1 }),
      Observable.toFlowable(),
      Flowable.toObservable<number>(),
      Observable.forEach<number>(v => {
        result.push(v);
      }),
      Observable.subscribe(scheduler),
    );

    Continuation.run(scheduler);
  }),
);
