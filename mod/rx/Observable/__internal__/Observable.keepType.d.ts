import { ContainerOperator } from "../../../containers.js";
import { TypePredicate } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableKeepType = <C extends ObservableContainer, TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const Observable_keepType: ObservableKeepType;
export default Observable_keepType;
