import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableEndWith = <C extends ObservableContainerLike, T>(value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
declare const Observable_endWith: ObservableEndWith;
export default Observable_endWith;
