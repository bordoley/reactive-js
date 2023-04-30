import { ContainerOperator } from "../../../containers.js";
import Container_endWith from "../../../containers/Container/__internal__/Container.endWith.js";
import ReadonlyArray_toObservable from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableContainerLike } from "../../../rx.js";
import Observable_concatWith from "./Observable.concatWith.js";

type ObservableEndWith = <C extends ObservableContainerLike, T>(
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T>;
const Observable_endWith: ObservableEndWith =
  /*@__PURE__*/ Container_endWith<ObservableContainerLike>(
    Observable_concatWith,
    ReadonlyArray_toObservable,
  ) as ObservableEndWith;

export default Observable_endWith;
