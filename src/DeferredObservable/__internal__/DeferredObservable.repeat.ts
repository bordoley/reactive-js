import type * as DeferredObservable from "../../DeferredObservable.js";
import { Predicate, isNone, isNumber } from "../../functions.js";
import DeferredObservable_repeatOrRetry from "./DeferredObservable.repeatOrRetry.js";

const DeferredObservable_repeat: DeferredObservable.Signature["repeat"] =
  /*@__PURE__*/ (() => {
    const defaultRepeatPredicate = (_: number, e?: Error): boolean => isNone(e);

    return (predicate?: Predicate<number> | number) => {
      const repeatPredicate = isNone(predicate)
        ? defaultRepeatPredicate
        : isNumber(predicate)
        ? (count: number, e?: Error) => isNone(e) && count < predicate
        : (count: number, e?: Error) => isNone(e) && predicate(count);

      return DeferredObservable_repeatOrRetry(repeatPredicate);
    };
  })();

export default DeferredObservable_repeat;
