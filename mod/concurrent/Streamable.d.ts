import { DeferredObservableLike, DeferredSideEffectsObservableLike, StreamLike, StreamableLike } from "../concurrent.js";
import { Equality, Factory, Function1, Updater } from "../functions.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
/**
 * @noInheritDoc
 * @category Module
 */
export interface StreamableModule {
    /**
     * @category Constructor
     */
    create<TReq, T>(op: Function1<DeferredSideEffectsObservableLike<TReq>, DeferredSideEffectsObservableLike<T>>): StreamableLike<TReq, T, StreamLike<TReq, T>>;
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
    /**
     * Returns a new `StateStoreLike` instance that stores state which can
     * be updated by notifying the instance with a `StateUpdater` that computes a
     * new state based upon the previous state.
     *
     * @param initialState - The initial accumulation value.
     * @param equals - Optional equality function that is used to compare
     * if a state value is distinct from the previous one.
     *
     * @category Constructor
     */
    createStateStore<T>(initialState: Factory<T>, options?: {
        readonly equality?: Equality<T>;
    }): StreamableLike<Updater<T>, T>;
    /**
     * @category Constructor
     */
    identity<T>(): StreamableLike<T, T, StreamLike<T, T>>;
}
export type Signature = StreamableModule;
export declare const create: Signature["create"];
export declare const createStateStore: Signature["createStateStore"];
export declare const identity: Signature["identity"];
