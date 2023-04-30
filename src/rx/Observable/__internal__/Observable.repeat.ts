import { ContainerOperator } from "../../../containers.js";
import { Predicate, isNone, isNumber } from "../../../functions.js";
import { ObservableContainerLike } from "../../../rx.js";
import Observable_repeatOrRetry from "./Observable.repeatOrRetry.js";

interface RepeatObservable {
  repeat<C extends ObservableContainerLike, T>(
    predicate: Predicate<number>,
  ): ContainerOperator<C, T, T>;

  repeat<C extends ObservableContainerLike, T>(
    count?: number,
  ): ContainerOperator<C, T, T>;

  repeat<C extends ObservableContainerLike, T>(): ContainerOperator<C, T, T>;
}
const Observable_repeat: RepeatObservable["repeat"] = /*@__PURE__*/ (() => {
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
