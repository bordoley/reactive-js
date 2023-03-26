import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { QueueableLike } from "../../../util.js";
type ObservableDispatchTo = <C extends ObservableLike, T = unknown>(effect: QueueableLike<T> | Function1<T, boolean>) => ContainerOperator<C, T, T>;
declare const Observable_dispatchTo: ObservableDispatchTo;
export default Observable_dispatchTo;
