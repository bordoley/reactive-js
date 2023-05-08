import { Containers, ObservableContainer } from "../../../core.js";
type ObservableMap = <C extends ObservableContainer, TA, TB>(value: TB) => Containers.Operator<C, TA, TB>;
declare const Observable_mapTo: ObservableMap;
export default Observable_mapTo;
