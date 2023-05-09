import { Container, ObservableContainer } from "../../containers.js";
type ObservableEndWith = <C extends ObservableContainer.Type, T>(value: T, ...values: readonly T[]) => Container.Operator<C, T, T>;
declare const Observable_endWith: ObservableEndWith;
export default Observable_endWith;
