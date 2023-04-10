import { Equality, Factory, Function2, Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface StreamableCreateStateStore {
    createStateStore<T>(initialState: Factory<T>, onChange: Function2<T, T, ObservableLike<unknown>>, options?: {
        readonly mode: "switching";
        readonly equality?: Equality<T>;
    }): StreamableLike<Updater<T>, T>;
    createStateStore<T>(initialState: Factory<T>, onChange: Function2<T, T, ObservableLike<unknown>>, options?: {
        readonly mode: "queueing";
        readonly equality?: Equality<T>;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): StreamableLike<Updater<T>, T>;
    createStateStore<T>(initialState: Factory<T>, options?: {
        readonly equality?: Equality<T>;
    }): StreamableLike<Updater<T>, T>;
}
declare const Streamable_createStateStore: StreamableCreateStateStore["createStateStore"];
export default Streamable_createStateStore;
