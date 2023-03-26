import { ContainerOperator } from "../../../containers.js";
import { Function1, SideEffect1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { QueueableLike } from "../../../util.js";
type ObservableEnqueue = <C extends ObservableLike, T = unknown>(queue: QueueableLike<T> | Function1<T, boolean> | SideEffect1<T>) => ContainerOperator<C, T, T>;
declare const Observable_enqueue: ObservableEnqueue;
export default Observable_enqueue;
