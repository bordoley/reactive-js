import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Streamable_createQueueingEventHandler: <TEvent>(op: Function1<TEvent, ObservableLike<unknown>>, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly maxConcurrency?: number;
}) => StreamableLike<TEvent, never, import("../../../streaming.js").StreamLike<TEvent, never>>;
export default Streamable_createQueueingEventHandler;
