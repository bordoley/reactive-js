import { ContainerOperator } from "../../../containers.js";
import Container_endWith from "../../../containers/Container/__internal__/Container.endWith.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableContainer } from "../../../rx.js";
import Observable_concatWith from "./Observable.concatWith.js";

type ObservableEndWith = <C extends ObservableContainer, T>(
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T>;
const Observable_endWith: ObservableEndWith =
  /*@__PURE__*/ Container_endWith<ObservableContainer>(
    Observable_concatWith,
    ReadonlyArray_toObservable,
  ) as ObservableEndWith;

export default Observable_endWith;
