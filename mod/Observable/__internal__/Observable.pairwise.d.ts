import { Container, ObservableContainer } from "../../containers.js";
type ObservablePairwise = <C extends ObservableContainer.Type, T>() => Container.Operator<C, T, readonly [T, T]>;
declare const Observable_pairwise: ObservablePairwise;
export default Observable_pairwise;
