import { ContainerOperator } from "../../../containers.js";
import { TypePredicate } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableKeepType = <C extends ObservableLike, TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const Observable_keepType: ObservableKeepType;
export default Observable_keepType;
