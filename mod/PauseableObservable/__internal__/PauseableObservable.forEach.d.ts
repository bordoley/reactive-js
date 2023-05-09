import { Container, PauseableObservableContainer } from "../../containers.js";
import { SideEffect1 } from "../../functions.js";
type PauseableObservableForEach = <C extends PauseableObservableContainer.Type, T = unknown>(effect: SideEffect1<T>) => Container.Operator<C, T, T>;
declare const PauseableObservable_forEach: PauseableObservableForEach;
export default PauseableObservable_forEach;
