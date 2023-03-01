import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
type ObservablePairwise = <C extends ObservableLike, T>() => ContainerOperator<C, T, readonly [T, T]>;
declare const Observable_pairwise: ObservablePairwise;
export default Observable_pairwise;
