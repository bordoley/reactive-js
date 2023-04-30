import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservablePairwise = <C extends ObservableContainer, T>() => ContainerOperator<C, T, readonly [T, T]>;
declare const Observable_pairwise: ObservablePairwise;
export default Observable_pairwise;
