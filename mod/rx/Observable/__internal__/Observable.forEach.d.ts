import { ContainerOperator } from "../../../containers.js";
import { SideEffect1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableForEach = <C extends ObservableLike, T = unknown>(effect: SideEffect1<T>) => ContainerOperator<C, T, T>;
declare const Observable_forEach: ObservableForEach;
export default Observable_forEach;
