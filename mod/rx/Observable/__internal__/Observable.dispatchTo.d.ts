import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
import { DispatcherLike } from "../../../util.js";
type ObservableDispatchTo = <C extends ObservableContainerLike, T = unknown>(dispatcher: DispatcherLike<T>) => ContainerOperator<C, T, T>;
declare const Observable_dispatchTo: ObservableDispatchTo;
export default Observable_dispatchTo;
