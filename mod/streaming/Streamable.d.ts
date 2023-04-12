import { StreamLike, StreamableLike } from "../streaming.js";
/**
 * @category Constructor
 */
export declare const create: <TReq, T>(op: import("../containers.js").ContainerOperator<import("../rx.js").ObservableLike<unknown>, TReq, T>) => StreamableLike<TReq, T, StreamLike<TReq, T>>;
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
    <TEvent_3>(op: import("../functions.js").Function1<TEvent_3, import("../rx.js").ObservableLike<unknown>>): StreamableLike<TEvent_3, never, StreamLike<TEvent_3, never>>;
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
export declare const createStateStore: {
    <T>(initialState: import("../functions.js").Factory<T>, onChange: import("../functions.js").Function2<T, T, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "switching";
        readonly equality?: import("../functions.js").Equality<T> | undefined;
    }): StreamableLike<import("../functions.js").Updater<T>, T, StreamLike<import("../functions.js").Updater<T>, T>>;
    <T_1>(initialState: import("../functions.js").Factory<T_1>, onChange: import("../functions.js").Function2<T_1, T_1, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly equality?: import("../functions.js").Equality<T_1> | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): StreamableLike<import("../functions.js").Updater<T_1>, T_1, StreamLike<import("../functions.js").Updater<T_1>, T_1>>;
    <T_2>(initialState: import("../functions.js").Factory<T_2>, options?: {
        readonly equality?: import("../functions.js").Equality<T_2> | undefined;
    } | undefined): StreamableLike<import("../functions.js").Updater<T_2>, T_2, StreamLike<import("../functions.js").Updater<T_2>, T_2>>;
};
/**
 * @category Constructor
 */
export declare const identity: <T>() => StreamableLike<T, T, StreamLike<T, T>>;
export declare const sinkInto: <TReq, T>(dest: StreamLike<T, TReq>) => (src: StreamableLike<TReq, T>) => StreamableLike<TReq, T>;
