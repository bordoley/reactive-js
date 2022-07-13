/// <reference types="./ContainerLike.d.ts" />
"use strict";
/*import {
  ContainerLike,
  ContainerOf,
  FromArrayOptions,
} from "../../containers/ContainerLike";
import { isNone, isSome } from "../../util/Option";
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
    const {start: startOption, count: countOption} = options;
    
    const {start, count} = isNone(startOption) && isNone(countOption) ? {
      start: 0, count: valuesLength
    } : isSome(startOption) && isNone(countOption) ? {
      start: min(max(startOption ?? 0, 0), valuesLength),
      count:
    } : {};


 
    return factory(values, start, count, options);
  };*/
