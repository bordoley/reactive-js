import { ContainerOperator } from "../../../containers.js";
import { TypePredicate } from "../../../functions.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableKeepType = <C extends ObservableContainerLike, TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const Observable_keepType: ObservableKeepType;
export default Observable_keepType;
