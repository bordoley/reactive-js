import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableMap = <C extends ObservableContainer, TA, TB>(selector: Function1<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const Observable_map: ObservableMap;
export default Observable_map;
