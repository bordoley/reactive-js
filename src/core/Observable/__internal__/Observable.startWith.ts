import { Containers, ObservableContainer } from "../../../core.js";
import Container_startWith from "../../../core/Container/__internal__/Container.startWith.js";
import ReadonlyArray_toObservable from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import Observable_concatWith from "./Observable.concatWith.js";

type ObservableStartWith = <C extends ObservableContainer, T>(
  value: T,
  ...values: readonly T[]
) => Containers.Operator<C, T, T>;
const Observable_startWith: ObservableStartWith =
  /*@__PURE__*/ Container_startWith(
    Observable_concatWith,
    ReadonlyArray_toObservable,
  ) as ObservableStartWith;

export default Observable_startWith;
