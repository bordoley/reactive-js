import { Containers, ObservableContainer } from "../../containers.js";
type ObservableMap = <C extends ObservableContainer.Type, TA, TB>(value: TB) => Containers.Operator<C, TA, TB>;
declare const Observable_mapTo: ObservableMap;
export default Observable_mapTo;
