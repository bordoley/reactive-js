import { RunnableLike } from "../../../rx.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Runnable_run: <T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    capacity?: number;
}) => (observable: RunnableLike<T>) => void;
export default Runnable_run;
