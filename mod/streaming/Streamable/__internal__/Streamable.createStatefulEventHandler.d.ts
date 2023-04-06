import { Equality, Factory, Function2, Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface CreateStatefulEventHandler {
    createStatefulEventHandler<TState>(op: Function2<TState, TState, ObservableLike<unknown>>, initialState: Factory<TState>, options: {
        readonly mode: "switching";
        readonly equality?: Equality<TState>;
    }): StreamableLike<Updater<TState>, never>;
    createStatefulEventHandler<TState>(op: Function2<TState, TState, ObservableLike<unknown>>, initialState: Factory<TState>, options: {
        readonly mode: "blocking";
        readonly equality?: Equality<TState>;
    }): StreamableLike<Updater<TState>, boolean>;
    createStatefulEventHandler<TState>(op: Function2<TState, TState, ObservableLike<unknown>>, initialState: Factory<TState>, options: {
        readonly mode: "queueing";
        readonly equality?: Equality<TState>;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): StreamableLike<Updater<TState>, never>;
}
declare const Streamable_createStatefulEventHandler: CreateStatefulEventHandler["createStatefulEventHandler"];
export default Streamable_createStatefulEventHandler;
