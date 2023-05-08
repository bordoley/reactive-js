import { QueueableLike, QueueableLike_backpressureStrategy, RunnableLike } from "../../../core.js";
declare const Runnable_run: <T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => (observable: RunnableLike<T>) => void;
export default Runnable_run;
