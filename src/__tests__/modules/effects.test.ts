import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
} from "../../__internal__/testing";
import { keepType } from "../../containers/ContainerLike";
import { toObservable } from "../../containers/ReadonlyArrayLike";
import { Option, isSome, pipe } from "../../functions";
import { ObservableLike, emptyObservable } from "../../rx";
import { forEach, keepT, subscribe, takeLast } from "../../rx/ObservableLike";
import { __memo, __observe, observable } from "../../rx/effects";
import { createVirtualTimeScheduler } from "../../scheduling";
import { run } from "../../util/ContinuationLike";

export const effectsTests = describe(
  "effects",
  test("batch mode", () => {
    const scheduler = createVirtualTimeScheduler();

    const fromValueWithDelay = (
      delay: number,
      value: number,
    ): ObservableLike<number> => pipe([value], toObservable({ delay }));

    const emptyDelayed = emptyObservable({ delay: 100 });

    let result = -1;

    pipe(
      observable(() => {
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __observe(obs1) ?? 0;
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __observe(obs2) ?? 0;
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __observe(obs3) ?? 0;
        __observe(emptyDelayed);

        return result1 + result2 + result3;
      }),
      takeLast(),
      forEach(v => {
        result = v;
      }),
      subscribe(scheduler),
    );

    run(scheduler);

    pipe(result, expectEquals(22));
  }),
  test("combined-latest mode", () => {
    const scheduler = createVirtualTimeScheduler();

    const oneTwoThreeDelayed = pipe([1, 2, 3], toObservable({ delay: 1 }));
    const createOneTwoThree = (x: Option<unknown>) =>
      isSome(x) ? pipe([1, 2, 3], toObservable()) : emptyObservable();

    const result: number[] = [];

    pipe(
      observable(
        () => {
          const v = __observe(oneTwoThreeDelayed);
          const next = __memo(createOneTwoThree, v);
          return __observe(next);
        },
        { mode: "combine-latest" },
      ),
      keepType(keepT, isSome),
      forEach<number>(v => {
        result.push(v);
      }),
      subscribe(scheduler),
    );

    run(scheduler);

    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
  }),
);
