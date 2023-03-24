import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
type ObservableMap = <C extends ObservableLike, TA, TB>(value: TB) => ContainerOperator<C, TA, TB>;
declare const Observable_mapTo: ObservableMap;
export default Observable_mapTo;
