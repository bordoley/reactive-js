import { Containers, PauseableObservableContainer } from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
type PauseableObservableForEach = <C extends PauseableObservableContainer, T = unknown>(effect: SideEffect1<T>) => Containers.Operator<C, T, T>;
declare const PauseableObservable_forEach: PauseableObservableForEach;
export default PauseableObservable_forEach;
