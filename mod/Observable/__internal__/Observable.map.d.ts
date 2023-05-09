import { Containers, ObservableContainer } from "../../containers.js";
import { Function1 } from "../../functions.js";
type ObservableMap = <C extends ObservableContainer.Type, TA, TB>(selector: Function1<TA, TB>) => Containers.Operator<C, TA, TB>;
declare const Observable_map: ObservableMap;
export default Observable_map;
