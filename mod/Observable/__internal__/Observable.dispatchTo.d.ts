import { Containers, ObservableContainer } from "../../containers.js";
import { DispatcherLike } from "../../types.js";
type ObservableDispatchTo = <C extends ObservableContainer.Type, T = unknown>(dispatcher: DispatcherLike<T>) => Containers.Operator<C, T, T>;
declare const Observable_dispatchTo: ObservableDispatchTo;
export default Observable_dispatchTo;
