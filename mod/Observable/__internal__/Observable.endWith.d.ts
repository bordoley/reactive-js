import { Containers, ObservableContainer } from "../../containers.js";
type ObservableEndWith = <C extends ObservableContainer.Type, T>(value: T, ...values: readonly T[]) => Containers.Operator<C, T, T>;
declare const Observable_endWith: ObservableEndWith;
export default Observable_endWith;
