import { Containers, ObservableContainer } from "../../containers.js";
import { QueueableLike } from "../../types.js";
type ObservableEnqueue = <C extends ObservableContainer.Type, T = unknown>(queue: QueueableLike<T>) => Containers.Operator<C, T, T>;
declare const Observable_enqueue: ObservableEnqueue;
export default Observable_enqueue;
