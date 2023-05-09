import { SideEffect1 } from "../../functions.js";
import { Containers, ObservableContainer } from "../../types.js";
type ObservableForEach = <C extends ObservableContainer, T = unknown>(effect: SideEffect1<T>) => Containers.Operator<C, T, T>;
declare const Observable_forEach: ObservableForEach;
export default Observable_forEach;
