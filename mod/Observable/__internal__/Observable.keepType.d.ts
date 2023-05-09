import { TypePredicate } from "../../functions.js";
import { Containers, ObservableContainer } from "../../types.js";
type ObservableKeepType = <C extends ObservableContainer, TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => Containers.Operator<C, TA, TB>;
declare const Observable_keepType: ObservableKeepType;
export default Observable_keepType;
