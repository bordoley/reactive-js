import { Equality, Factory, Reducer, Updater } from "../functions.js";
import { StreamLike, StreamableLike } from "../streaming.js";
/**
 * @category Constructor
 */
export declare const create: <TReq, T>(op: import("../containers.js").ContainerOperator<import("../rx.js").ObservableLike<unknown>, TReq, T>) => StreamableLike<TReq, T, StreamLike<TReq, T>>;
/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer - The accumulator function called on each notified action.
 * @param initialState - The initial accumulation value.
 * @param equals - Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 *
 * @category Constructor
 */
export declare const createActionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T>;
}) => StreamableLike<TAction, T>;
/**
 * Returns an event handler that invokes the observable function.
 *
 * @category Constructor
 */
export declare const createEventHandler: {
    <TEvent>(op: import("../functions.js").Function1<TEvent, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "switching";
    }): StreamableLike<TEvent, never, StreamLike<TEvent, never>>;
    <TEvent_1>(op: import("../functions.js").Function1<TEvent_1, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "blocking";
    }): StreamableLike<TEvent_1, boolean, StreamLike<TEvent_1, boolean>>;
    <TEvent_2>(op: import("../functions.js").Function1<TEvent_2, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): StreamableLike<TEvent_2, never, StreamLike<TEvent_2, never>>;
};
/**
 * @category Constructor
 */
export declare const createInMemoryCache: <T>(options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../scheduling.js").SchedulerLike | undefined;
}) => import("../streaming.js").CacheLike<T>;
/**
 * @category Constructor
 */
export declare const createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): import("../rx.js").ObservableLike<Readonly<Record<string, import("../functions.js").Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): import("../rx.js").ObservableLike<void>;
}, options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../scheduling.js").SchedulerLike | undefined;
}) => import("../streaming.js").CacheLike<T>;
/**
 * @category Constructor
 */
export declare const createStatefulEventHandler: {
    <TState>(op: import("../functions.js").Function2<TState, TState, import("../rx.js").ObservableLike<unknown>>, initialState: Factory<TState>, options: {
        readonly mode: "switching";
        readonly equality?: Equality<TState> | undefined;
    }): StreamableLike<Updater<TState>, never, StreamLike<Updater<TState>, never>>;
    <TState_1>(op: import("../functions.js").Function2<TState_1, TState_1, import("../rx.js").ObservableLike<unknown>>, initialState: Factory<TState_1>, options: {
        readonly mode: "blocking";
        readonly equality?: Equality<TState_1> | undefined;
    }): StreamableLike<Updater<TState_1>, boolean, StreamLike<Updater<TState_1>, boolean>>;
    <TState_2>(op: import("../functions.js").Function2<TState_2, TState_2, import("../rx.js").ObservableLike<unknown>>, initialState: Factory<TState_2>, options: {
        readonly mode: "queueing";
        readonly equality?: Equality<TState_2> | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): StreamableLike<Updater<TState_2>, never, StreamLike<Updater<TState_2>, never>>;
};
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
export declare const createStateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T>;
}) => StreamableLike<Updater<T>, T>;
/**
 * @category Constructor
 */
export declare const identity: <T>() => StreamableLike<T, T, StreamLike<T, T>>;
export declare const sinkInto: <TReq, T>(dest: StreamLike<T, TReq>) => (src: StreamableLike<TReq, T>) => StreamableLike<TReq, T>;
