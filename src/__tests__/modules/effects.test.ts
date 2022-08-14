import {
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__internal__/__internal__testing";
import { keepType } from "../../containers/ContainerLike";
import { toObservable } from "../../containers/ReadonlyArrayLike";
import { __await, __memo, async } from "../../effects";
import { isSome, pipe } from "../../functions";
import { ObservableLike } from "../../rx";
import { forEach, keepT, subscribe, takeLast } from "../../rx/ObservableLike";
import { createVirtualTimeScheduler } from "../../scheduling";
import { run } from "../../util/ContinuationLike";

testModule(
  "effects",
  test("batch mode", () => {
    const scheduler = createVirtualTimeScheduler();

    const fromValueWithDelay = (
      delay: number,
      value: number,
    ): ObservableLike<number> => pipe([value], toObservable({ delay }));

    let result = -1;

    pipe(
      async(() => {
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);

        return result1 + result2 + result3;
      }),
      takeLast<number>(),
      forEach<number>(v => {
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
    const createOneTwoThree = (_: unknown) => pipe([1, 2, 3], toObservable());

    const result: number[] = [];

    pipe(
      async(
        () => {
          const v = __await(oneTwoThreeDelayed);
          const next = __memo(createOneTwoThree, v);
          return __await(next);
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
