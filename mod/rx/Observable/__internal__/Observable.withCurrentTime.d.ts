import { ContainerOperator } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableWithCurrentTime = <C extends ObservableLike, TA, TB>(selector: Function2<number, TA, TB>) => ContainerOperator<C, TA, TB>;
declare const Observable_withCurrentTime: ObservableWithCurrentTime;
export default Observable_withCurrentTime;
