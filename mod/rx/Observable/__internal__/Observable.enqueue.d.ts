import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { QueueableLike } from "../../../util.js";
type ObservableEnqueue = <C extends ObservableLike, T = unknown>(queue: QueueableLike<T> | Function1<T, boolean>) => ContainerOperator<C, T, T>;
declare const Observable_enqueue: ObservableEnqueue;
export default Observable_enqueue;
