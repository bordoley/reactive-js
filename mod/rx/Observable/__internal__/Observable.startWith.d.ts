import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
type ObservableStartWith = <C extends ObservableLike, T>(value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
declare const Observable_startWith: ObservableStartWith;
export default Observable_startWith;
