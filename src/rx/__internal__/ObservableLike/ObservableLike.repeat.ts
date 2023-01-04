import { Predicate, isNone, isNumber } from "../../../functions";
import { Exception } from "../../../util";
import ObservableLike__repeatOrRetry from "./ObservableLike.repeatOrRetry";

const ObservableLike__repeat = /*@__PURE__*/ (() => {
  const defaultRepeatPredicate = (_: number, e?: Exception): boolean =>
    isNone(e);

  return (predicate?: Predicate<number> | number) => {
    const repeatPredicate = isNone(predicate)
      ? defaultRepeatPredicate
      : isNumber(predicate)
      ? (count: number, e?: Exception) => isNone(e) && count < predicate
      : (count: number, e?: Exception) => isNone(e) && predicate(count);

    return ObservableLike__repeatOrRetry(repeatPredicate);
  };
})();

export default ObservableLike__repeat;
