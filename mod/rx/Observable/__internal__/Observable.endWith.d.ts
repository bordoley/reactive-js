import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
type ObservableEndWith = <C extends ObservableLike, T>(value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
declare const Observable_endWith: ObservableEndWith;
export default Observable_endWith;
