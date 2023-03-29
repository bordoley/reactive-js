import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
type ObservableWithBackpressureStrategy = <C extends ObservableLike, T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => ContainerOperator<C, T, T>;
declare const Observable_withBackpressureStrategy: ObservableWithBackpressureStrategy;
export default Observable_withBackpressureStrategy;
