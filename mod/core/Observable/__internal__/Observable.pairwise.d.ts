import { Container, ObservableContainer } from "../../../core.js";
type ObservablePairwise = <C extends ObservableContainer, T>() => Container.Operator<C, T, readonly [T, T]>;
declare const Observable_pairwise: ObservablePairwise;
export default Observable_pairwise;
