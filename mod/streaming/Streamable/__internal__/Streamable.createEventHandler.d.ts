import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface CreateEventHandler {
    createEventHandler<TEvent>(op: Function1<TEvent, ObservableLike<unknown>>, options: {
        readonly mode: "switching";
    }): StreamableLike<TEvent, never>;
    createEventHandler<TEvent>(op: Function1<TEvent, ObservableLike<unknown>>, options: {
        readonly mode: "blocking";
    }): StreamableLike<TEvent, boolean>;
    createEventHandler<TEvent>(op: Function1<TEvent, ObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): StreamableLike<TEvent, never>;
    createEventHandler<TEvent>(op: Function1<TEvent, ObservableLike<unknown>>): StreamableLike<TEvent, never>;
}
declare const Streamable_createEventHandler: CreateEventHandler["createEventHandler"];
export default Streamable_createEventHandler;
