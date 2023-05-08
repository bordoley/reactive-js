import { Container, ObservableContainer, QueueableLike } from "../../../core.js";
type ObservableEnqueue = <C extends ObservableContainer, T = unknown>(queue: QueueableLike<T>) => Container.Operator<C, T, T>;
declare const Observable_enqueue: ObservableEnqueue;
export default Observable_enqueue;
