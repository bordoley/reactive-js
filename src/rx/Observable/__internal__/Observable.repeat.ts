import { Repeat } from "../../../containers.js";
import { Predicate, isNone, isNumber } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_repeatOrRetry from "./Observable.repeatOrRetry.js";

const Observable_repeat: Repeat<ObservableLike>["repeat"] =
  /*@__PURE__*/ (() => {
    const defaultRepeatPredicate = (_: number, e?: Error): boolean => isNone(e);

    return (predicate?: Predicate<number> | number) => {
      const repeatPredicate = isNone(predicate)
        ? defaultRepeatPredicate
        : isNumber(predicate)
        ? (count: number, e?: Error) => isNone(e) && count < predicate
        : (count: number, e?: Error) => isNone(e) && predicate(count);

      return Observable_repeatOrRetry(repeatPredicate);
    };
  })();

export default Observable_repeat;
