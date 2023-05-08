import { Containers, ObservableContainer } from "../../../core.js";
import { Function1 } from "../../../functions.js";
type ObservableMap = <C extends ObservableContainer, TA, TB>(selector: Function1<TA, TB>) => Containers.Operator<C, TA, TB>;
declare const Observable_map: ObservableMap;
export default Observable_map;
