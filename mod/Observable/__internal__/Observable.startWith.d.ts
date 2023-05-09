import { Containers, ObservableContainer } from "../../containers.js";
type ObservableStartWith = <C extends ObservableContainer.Type, T>(value: T, ...values: readonly T[]) => Containers.Operator<C, T, T>;
declare const Observable_startWith: ObservableStartWith;
export default Observable_startWith;
