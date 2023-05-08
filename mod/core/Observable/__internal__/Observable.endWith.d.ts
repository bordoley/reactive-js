import { Container, ObservableContainer } from "../../../core.js";
type ObservableEndWith = <C extends ObservableContainer, T>(value: T, ...values: readonly T[]) => Container.Operator<C, T, T>;
declare const Observable_endWith: ObservableEndWith;
export default Observable_endWith;
