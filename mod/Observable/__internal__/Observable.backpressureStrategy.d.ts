import { Containers, ObservableContainer } from "../../containers.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../types.js";
type ObservableBackpressureStrategy = <C extends ObservableContainer, T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => Containers.Operator<C, T, T>;
declare const Observable_backpressureStrategy: ObservableBackpressureStrategy;
export default Observable_backpressureStrategy;
