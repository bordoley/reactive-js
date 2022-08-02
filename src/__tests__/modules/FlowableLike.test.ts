import { describe, test } from "../../__internal__/testing";
import { toObservable as arrayToObservable } from "../../containers/ReadonlyArrayLike";
import { pipe } from "../../functions";
import { forEach, subscribe } from "../../rx/ObservableLike";
import { toFlowable } from "../../rx/RunnableObservableLike";
import { createVirtualTimeScheduler } from "../../scheduling";
import { toObservable } from "../../streaming/FlowableLike";
import { run } from "../../util/ContinuationLike";

export const FlowableLikeTests = describe(
  "FlowableLike",
  test("toObservable", () => {
    const scheduler = createVirtualTimeScheduler();

    const result: number[] = [];

    pipe(
      [0, 1, 2, 3, 4],
      arrayToObservable({ delay: 1 }),
      toFlowable(),
      toObservable<number>(),
      forEach(v => {
        result.push(v);
      }),
      subscribe(scheduler),
    );

    run(scheduler);
  }),
);
