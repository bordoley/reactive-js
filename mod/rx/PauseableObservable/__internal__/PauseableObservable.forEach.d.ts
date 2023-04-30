import { ContainerOperator } from "../../../containers.js";
import { SideEffect1 } from "../../../functions.js";
import { PauseableObservableContainerLike } from "../../../rx.js";
type PauseableObservableForEach = <C extends PauseableObservableContainerLike, T = unknown>(effect: SideEffect1<T>) => ContainerOperator<C, T, T>;
declare const PauseableObservable_forEach: PauseableObservableForEach;
export default PauseableObservable_forEach;
