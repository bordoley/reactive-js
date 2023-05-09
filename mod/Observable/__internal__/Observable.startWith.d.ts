import { Container, ObservableContainer } from "../../containers.js";
type ObservableStartWith = <C extends ObservableContainer.Type, T>(value: T, ...values: readonly T[]) => Container.Operator<C, T, T>;
declare const Observable_startWith: ObservableStartWith;
export default Observable_startWith;
