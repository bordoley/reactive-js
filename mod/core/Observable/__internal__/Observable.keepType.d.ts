import { Container, ObservableContainer } from "../../../core.js";
import { TypePredicate } from "../../../functions.js";
type ObservableKeepType = <C extends ObservableContainer, TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => Container.Operator<C, TA, TB>;
declare const Observable_keepType: ObservableKeepType;
export default Observable_keepType;
