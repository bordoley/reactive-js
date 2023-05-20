import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Predicate, isNone, isNumber } from "../../functions.js";
import EnumeratorFactory_repeatOrRetry from "./EnumeratorFactory.repeatOrRetry.js";

const defaultRepeatPredicate = (_: number, e?: Error): boolean => isNone(e);

const EnumeratorFactory_repeat: EnumeratorFactory.Signature["repeat"] = (
  predicate?: Predicate<number> | number,
) => {
  const repeatPredicate = isNone(predicate)
    ? defaultRepeatPredicate
    : isNumber(predicate)
    ? (count: number, e?: Error) => isNone(e) && count < predicate
    : (count: number, e?: Error) => isNone(e) && predicate(count);

  return EnumeratorFactory_repeatOrRetry(repeatPredicate);
};

export default EnumeratorFactory_repeat;
