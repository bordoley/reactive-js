import { Containers, ObservableContainer } from "../../containers.js";
import { Function2 } from "../../functions.js";
type ObservableWithCurrentTime = <C extends ObservableContainer, TA, TB>(selector: Function2<number, TA, TB>) => Containers.Operator<C, TA, TB>;
declare const Observable_withCurrentTime: ObservableWithCurrentTime;
export default Observable_withCurrentTime;
