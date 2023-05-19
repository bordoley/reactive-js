import type * as AsyncIterable from "../../AsyncIterable.js";
import { Predicate, isNone, isNumber } from "../../functions.js";
import AsyncIterable_repeatOrRetry from "./AsyncIterable.repeatOrRetry.js";

const AsyncIterable_repeat: AsyncIterable.Signature["repeat"] =
  /*@__PURE__*/ (() => {
    const defaultRepeatPredicate = (_: number, e?: Error): boolean => isNone(e);

    return (predicate?: Predicate<number> | number) => {
      const repeatPredicate = isNone(predicate)
        ? defaultRepeatPredicate
        : isNumber(predicate)
        ? (count: number, e?: Error) => isNone(e) && count < predicate
        : (count: number, e?: Error) => isNone(e) && predicate(count);

      return AsyncIterable_repeatOrRetry(repeatPredicate);
    };
  })();

export default AsyncIterable_repeat;
