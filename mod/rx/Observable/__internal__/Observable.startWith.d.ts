import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableStartWith = <C extends ObservableContainerLike, T>(value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
declare const Observable_startWith: ObservableStartWith;
export default Observable_startWith;
