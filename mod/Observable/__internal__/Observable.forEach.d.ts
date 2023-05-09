import { Container, ObservableContainer } from "../../containers.js";
import { SideEffect1 } from "../../functions.js";
type ObservableForEach = <C extends ObservableContainer.Type, T = unknown>(effect: SideEffect1<T>) => Container.Operator<C, T, T>;
declare const Observable_forEach: ObservableForEach;
export default Observable_forEach;
