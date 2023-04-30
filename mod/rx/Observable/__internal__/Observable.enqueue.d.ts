import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
import { QueueableLike } from "../../../util.js";
type ObservableEnqueue = <C extends ObservableContainerLike, T = unknown>(queue: QueueableLike<T>) => ContainerOperator<C, T, T>;
declare const Observable_enqueue: ObservableEnqueue;
export default Observable_enqueue;
