import { Container, ObservableContainer } from "../../../core.js";
import Container_keepType from "../../../core/Container/__internal__/Container.keepType.js";
import { TypePredicate } from "../../../functions.js";
import Observable_keep from "./Observable.keep.js";

type ObservableKeepType = <C extends ObservableContainer, TA, TB extends TA>(
  predicate: TypePredicate<TA, TB>,
) => Container.Operator<C, TA, TB>;
const Observable_keepType: ObservableKeepType =
  /*@__PURE__*/ Container_keepType(Observable_keep) as ObservableKeepType;

export default Observable_keepType;
