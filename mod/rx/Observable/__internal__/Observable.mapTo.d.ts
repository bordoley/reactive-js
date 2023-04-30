import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableMap = <C extends ObservableContainer, TA, TB>(value: TB) => ContainerOperator<C, TA, TB>;
declare const Observable_mapTo: ObservableMap;
export default Observable_mapTo;
