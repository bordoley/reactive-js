import { abs, clamp, min } from "../../../__internal__/math.js";
import {
  ContainerLike,
  ContainerOf,
  ReadonlyArrayLike,
} from "../../../containers.js";
import { Function1, isSome } from "../../../functions.js";
import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";

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
    const valuesLength = ReadonlyArray_getLength(values);
    const { start: startOption, count: countOption, ...tail } = options ?? {};

    const { start, count } = (() => {
      if (isSome(countOption) && countOption >= 0) {
        const start = clamp(0, startOption ?? 0, valuesLength);
        const count = clamp(0, countOption, valuesLength - start);

        return { start, count };
      } else if (isSome(countOption) && countOption < 0) {
        const start = clamp(
          -1,
          startOption ?? valuesLength - 1,
          valuesLength - 1,
        );
        const count = -min(abs(countOption), start + 1);

        return { start, count };
      } else {
        const start = clamp(0, startOption ?? 0, valuesLength);
        const count = valuesLength - start;

        return { start, count };
      }
    })();

    return factory(values, start, count, tail as O);
  };

export default ReadonlyArray_toContainer;
