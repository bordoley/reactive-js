import {
  ContainerLike,
  ContainerOf,
  ReadonlyArrayLike,
} from "../../../containers";
import { Function1, getLength, isSome, max, min } from "../../../functions";

const ReadonlyArray_toContainer =
  <C extends ContainerLike, O extends unknown = unknown>(
    factory: <T>(
      values: readonly T[],
      start: number,
      count: number,
      options?: O,
    ) => ContainerOf<C, T>,
  ) =>
  <T>(
    options?: O & {
      readonly start?: number;
      readonly count?: number;
    },
  ): Function1<ReadonlyArrayLike<T>, ContainerOf<C, T>> =>
  values => {
    const valuesLength = getLength(values);
    const { start: startOption, count: countOption, ...tail } = options ?? {};

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

    return factory(values, start, count, tail as O);
  };

export default ReadonlyArray_toContainer;
