import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
import { DispatcherLike } from "../../../util.js";
type ObservableDispatchTo = <C extends ObservableContainer, T = unknown>(dispatcher: DispatcherLike<T>) => ContainerOperator<C, T, T>;
declare const Observable_dispatchTo: ObservableDispatchTo;
export default Observable_dispatchTo;
