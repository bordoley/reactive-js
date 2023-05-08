import { Container, ObservableContainer } from "../../../core.js";
import Container_endWith from "../../../core/Container/__internal__/Container.endWith.js";
import ReadonlyArray_toObservable from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import Observable_concatWith from "./Observable.concatWith.js";

type ObservableEndWith = <C extends ObservableContainer, T>(
  value: T,
  ...values: readonly T[]
) => Container.Operator<C, T, T>;
const Observable_endWith: ObservableEndWith =
  /*@__PURE__*/ Container_endWith<ObservableContainer>(
    Observable_concatWith,
    ReadonlyArray_toObservable,
  ) as ObservableEndWith;

export default Observable_endWith;
