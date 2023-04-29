import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface CreateEventHandler {
    createEventHandler<TEventType>(op: Function1<TEventType, ObservableLike<unknown>>, options: {
        readonly mode: "switching";
    }): StreamableLike<TEventType, boolean>;
    createEventHandler<TEventType>(op: Function1<TEventType, ObservableLike<unknown>>, options: {
        readonly mode: "blocking";
    }): StreamableLike<TEventType, boolean>;
    createEventHandler<TEventType>(op: Function1<TEventType, ObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): StreamableLike<TEventType, boolean>;
    createEventHandler<TEventType>(op: Function1<TEventType, ObservableLike<unknown>>): StreamableLike<TEventType, boolean>;
}
declare const Streamable_createEventHandler: CreateEventHandler["createEventHandler"];
export default Streamable_createEventHandler;
