import {
  ContainerLike,
  ContainerOf,
  FromArrayOptions,
} from "../../containers/ContainerLike";
import { isSome } from "../../util/Option";
import { Function1, getLength, max, min } from "../../util/functions";

export const createFromArray =
  <C extends ContainerLike, O extends FromArrayOptions = FromArrayOptions>(
    factory: <T>(
      values: readonly T[],
      start: number,
      count: number,
      options?: Partial<O>,
    ) => ContainerOf<C, T>,
  ) =>
  <T>(options: Partial<O> = {}): Function1<readonly T[], ContainerOf<C, T>> =>
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
        const start = min(maxStart, valuesLength - 1);
        const count = valuesLength - start;

        return { start, count };
      }
    })();

    return factory(values, start, count, options);
  };
