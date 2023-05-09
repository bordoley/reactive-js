import { Containers, ObservableContainer } from "../../types.js";
type ObservablePairwise = <C extends ObservableContainer, T>() => Containers.Operator<C, T, readonly [T, T]>;
declare const Observable_pairwise: ObservablePairwise;
export default Observable_pairwise;
