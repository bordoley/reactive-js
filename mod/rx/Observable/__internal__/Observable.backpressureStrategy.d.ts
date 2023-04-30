import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
type ObservableBackpressureStrategy = <C extends ObservableContainer, T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => ContainerOperator<C, T, T>;
declare const Observable_backpressureStrategy: ObservableBackpressureStrategy;
export default Observable_backpressureStrategy;
