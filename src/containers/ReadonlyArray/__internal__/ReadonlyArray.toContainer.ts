import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { abs, clamp, min } from "../../../__internal__/math.js";
import {
  ContainerLike,
  ContainerOf,
  ReadonlyArrayLike,
} from "../../../containers.js";
import { Function1 } from "../../../functions.js";
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
    const {
      start: startOption,
      count: countOption = MAX_SAFE_INTEGER,
      ...tail
    } = options ?? {};
    
    const start =
      countOption >= 0
        ? clamp(0, startOption ?? 0, valuesLength)
        : clamp(-1, startOption ?? valuesLength - 1, valuesLength - 1);

    const count =
      countOption >= 0
        ? clamp(0, countOption, valuesLength - start)
        : -min(abs(countOption), start + 1);

    return factory(values, start, count, tail as O);
  };

export default ReadonlyArray_toContainer;
