import { Predicate, isNone, isNumber } from "../../../functions";
import Observable$repeatOrRetry from "./Observable.repeatOrRetry";

const Observable$repeat = /*@__PURE__*/ (() => {
  const defaultRepeatPredicate = (_: number, e?: Error): boolean => isNone(e);

  return (predicate?: Predicate<number> | number) => {
    const repeatPredicate = isNone(predicate)
      ? defaultRepeatPredicate
      : isNumber(predicate)
      ? (count: number, e?: Error) => isNone(e) && count < predicate
      : (count: number, e?: Error) => isNone(e) && predicate(count);

    return Observable$repeatOrRetry(repeatPredicate);
  };
})();

export default Observable$repeat;
