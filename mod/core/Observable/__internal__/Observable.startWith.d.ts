import { Containers, ObservableContainer } from "../../../core.js";
type ObservableStartWith = <C extends ObservableContainer, T>(value: T, ...values: readonly T[]) => Containers.Operator<C, T, T>;
declare const Observable_startWith: ObservableStartWith;
export default Observable_startWith;
