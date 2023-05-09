import { Containers, ObservableContainer } from "../../types.js";
type ObservableMap = <C extends ObservableContainer, TA, TB>(value: TB) => Containers.Operator<C, TA, TB>;
declare const Observable_mapTo: ObservableMap;
export default Observable_mapTo;
