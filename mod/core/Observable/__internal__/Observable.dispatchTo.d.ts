import { Container, DispatcherLike, ObservableContainer } from "../../../core.js";
type ObservableDispatchTo = <C extends ObservableContainer, T = unknown>(dispatcher: DispatcherLike<T>) => Container.Operator<C, T, T>;
declare const Observable_dispatchTo: ObservableDispatchTo;
export default Observable_dispatchTo;
