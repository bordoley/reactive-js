import { toObservable as arrayToObservable } from "../../containers/ReadonlyArrayLike";
import { pipe } from "../../functions";
import { forEach, subscribe, toFlowable } from "../../rx/ObservableLike";
import { create as createVirtualTimeScheduler } from "../../scheduling/VirtualTimeSchedulerLike";
import { toObservable } from "../../streaming/FlowableLike";
import { run } from "../../util/ContinuationLike";
import { test, testModule } from "../testing";

testModule(
  "FlowableLike",
  test("toObservable", () => {
    const scheduler = createVirtualTimeScheduler();

    const result: number[] = [];

    pipe(
      [0, 1, 2, 3, 4],
      arrayToObservable({ delay: 1 }),
      toFlowable(),
      toObservable<number>(),
      forEach<number>(v => {
        result.push(v);
      }),
      subscribe(scheduler),
    );

    run(scheduler);
  }),
);
