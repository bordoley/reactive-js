import { ContainerOperator } from "../../../containers.js";
import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import { TypePredicate } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_keep from "./Observable.keep.js";

type ObservableKeepType = <C extends ObservableLike, TA, TB extends TA>(
  predicate: TypePredicate<TA, TB>,
) => ContainerOperator<C, TA, TB>;
const Observable_keepType: ObservableKeepType =
  /*@__PURE__*/ Container_keepType(Observable_keep) as ObservableKeepType;

export default Observable_keepType;
