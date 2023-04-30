import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableMap = <C extends ObservableContainerLike, TA, TB>(value: TB) => ContainerOperator<C, TA, TB>;
declare const Observable_mapTo: ObservableMap;
export default Observable_mapTo;
