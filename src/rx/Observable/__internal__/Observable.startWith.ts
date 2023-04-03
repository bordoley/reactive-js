import { ContainerOperator } from "../../../containers.js";
import Container_startWith from "../../../containers/Container/__internal__/Container.startWith.js";
import ReadonlyArray_toObservable from "../../../keyedcontainers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatWith from "./Observable.concatWith.js";

type ObservableStartWith = <C extends ObservableLike, T>(
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T>;
const Observable_startWith: ObservableStartWith =
  /*@__PURE__*/ Container_startWith(
    Observable_concatWith,
    ReadonlyArray_toObservable,
  ) as ObservableStartWith;

export default Observable_startWith;
