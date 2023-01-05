import { ReadonlyArrayLike } from "../../../containers";
import { Function1, getLength, isSome, max, min } from "../../../functions";

const ReadonlyArrayLike__toContainer =
  <
    C,
    T,
    O extends {
      readonly start: number;
      readonly count: number;
    } = {
      readonly start: number;
      readonly count: number;
    },
  >(
    factory: (
      values: readonly T[],
      start: number,
      count: number,
      options?: Partial<O>,
    ) => C,
  ) =>
  (options: Partial<O> = {}): Function1<ReadonlyArrayLike<T>, C> =>
  values => {
    const valuesLength = getLength(values);
    const { start: startOption, count: countOption } = options;

    const { start, count } = (() => {
      if (isSome(countOption) && countOption >= 0) {
        const startOrDefault = startOption ?? 0;
        const maxStart = max(startOrDefault, 0);
        const start = min(maxStart, valuesLength - 1);

        const maxCount = min(valuesLength, countOption);
        const count = min(valuesLength - start, maxCount);

        return { start, count };
      } else if (isSome(countOption) && countOption < 0) {
        const startOrDefault = startOption ?? valuesLength - 1;
        const maxStart = max(startOrDefault, 0);
        const start = min(maxStart, valuesLength - 1);

        const maxCount = max(-valuesLength, countOption);
        const count = max(-start - 1, maxCount);

        return { start, count };
      } else {
        // count is none
        const startOrDefault = startOption ?? 0;
        const maxStart = max(startOrDefault, 0);
        const start = min(maxStart, valuesLength);
        const count = valuesLength - start;

        return { start, count };
      }
    })();

    return factory(values, start, count, options);
  };

export default ReadonlyArrayLike__toContainer;
