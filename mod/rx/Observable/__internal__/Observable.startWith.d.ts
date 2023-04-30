import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableStartWith = <C extends ObservableContainer, T>(value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
declare const Observable_startWith: ObservableStartWith;
export default Observable_startWith;
