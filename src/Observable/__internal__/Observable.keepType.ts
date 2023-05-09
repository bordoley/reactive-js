import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { TypePredicate } from "../../functions.js";
import Observable_keep from "./Observable.keep.js";

type ObservableKeepType = <
  C extends ObservableContainer.Type,
  TA,
  TB extends TA,
>(
  predicate: TypePredicate<TA, TB>,
) => Containers.Operator<C, TA, TB>;
const Observable_keepType: ObservableKeepType =
  /*@__PURE__*/ Container_keepType(Observable_keep) as ObservableKeepType;

export default Observable_keepType;
