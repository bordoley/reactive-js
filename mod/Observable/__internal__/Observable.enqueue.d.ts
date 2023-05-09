import { Containers, ObservableContainer, QueueableLike } from "../../types.js";
type ObservableEnqueue = <C extends ObservableContainer, T = unknown>(queue: QueueableLike<T>) => Containers.Operator<C, T, T>;
declare const Observable_enqueue: ObservableEnqueue;
export default Observable_enqueue;
