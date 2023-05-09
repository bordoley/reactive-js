import Container_endWith from "../../Container/__internal__/Container.endWith.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Containers, ObservableContainer } from "../../containers.js";
import Observable_concatWith from "./Observable.concatWith.js";

type ObservableEndWith = <C extends ObservableContainer.Type, T>(
  value: T,
  ...values: readonly T[]
) => Containers.Operator<C, T, T>;
const Observable_endWith: ObservableEndWith =
  /*@__PURE__*/ Container_endWith<ObservableContainer.Type>(
    Observable_concatWith,
    ReadonlyArray_toObservable,
  ) as ObservableEndWith;

export default Observable_endWith;
