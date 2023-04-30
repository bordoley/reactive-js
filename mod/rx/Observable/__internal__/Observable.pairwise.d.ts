import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservablePairwise = <C extends ObservableContainerLike, T>() => ContainerOperator<C, T, readonly [T, T]>;
declare const Observable_pairwise: ObservablePairwise;
export default Observable_pairwise;
