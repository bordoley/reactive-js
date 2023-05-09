import { Function1 } from "../../functions.js";
import { DeferredObservableLike, QueueableLike, QueueableLike_backpressureStrategy, StreamableLike } from "../../types.js";
interface CreateEventHandler {
    createEventHandler<TEventType>(op: Function1<TEventType, DeferredObservableLike<unknown>>, options: {
        readonly mode: "switching";
    }): StreamableLike<TEventType, boolean>;
    createEventHandler<TEventType>(op: Function1<TEventType, DeferredObservableLike<unknown>>, options: {
        readonly mode: "blocking";
    }): StreamableLike<TEventType, boolean>;
    createEventHandler<TEventType>(op: Function1<TEventType, DeferredObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): StreamableLike<TEventType, boolean>;
    createEventHandler<TEventType>(op: Function1<TEventType, DeferredObservableLike<unknown>>): StreamableLike<TEventType, boolean>;
}
declare const Streamable_createEventHandler: CreateEventHandler["createEventHandler"];
export default Streamable_createEventHandler;
