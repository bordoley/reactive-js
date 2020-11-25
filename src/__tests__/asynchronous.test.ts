import { async, __await, __memo } from "../asynchronous";
import { increment, incrementBy, pipe } from "../functions";
import { generate, takeFirst, takeLast, toRunnable } from "../observable";
import { last } from "../runnable";
import { test, describe, expectEquals } from "../testing";

export const tests = describe(
  "asynchronous",
  test("async", () => {
    const obsFactoryIncrement = (count: number) =>
      pipe(
        generate(increment, () => 0, { delay: 2 }),
        takeFirst({ count }),
      );
    const obsFactoryIncrementBy2 = (count: number) =>
      pipe(
        generate(incrementBy(2), () => 0, { delay: 2 }),
        takeFirst({ count }),
      );
    const computedObservable = async(() => {
      const incrementBy = __memo(obsFactoryIncrement, 5);
      const result1 = __await(incrementBy) ?? 0;
      const incrementBy2 = __memo(obsFactoryIncrementBy2, result1);
      const result2 = __await(incrementBy2) ?? 0;

      return result1 + result2;
    });
    pipe(computedObservable, takeLast(), toRunnable(), last, expectEquals(15));
  }),
);
