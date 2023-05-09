import { Container, ObservableContainer } from "../../containers.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../types.js";
type ObservableBackpressureStrategy = <C extends ObservableContainer.Type, T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => Container.Operator<C, T, T>;
declare const Observable_backpressureStrategy: ObservableBackpressureStrategy;
export default Observable_backpressureStrategy;
