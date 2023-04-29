/**
 * @category Constructor
 */
export declare const create: <TReq, T>(op: import("../containers.js").ContainerOperator<import("../rx.js").ObservableLike<unknown>, TReq, T>) => import("../streaming.js").StreamableLike<TReq, T, import("../streaming.js").StreamLike<TReq, T>>;
/**
 * @category Constructor
 */
export declare const createAnimationEventHandler: {
    <TEvent = unknown, T = number, TKey extends string | number | symbol = string>(animations: import("../keyed-containers.js").ReadonlyObjectMapLike<import("../functions.js").Function1<TEvent, import("../rx.js").AnimationConfig<T> | readonly import("../rx.js").AnimationConfig<T>[]>, TKey>, options: {
        readonly mode: "switching";
        readonly concurrency?: number | undefined;
    }): import("../streaming.js").AnimationEventHandlerLike<TEvent, T, TKey>;
    <TEvent_1 = unknown, T_1 = number, TKey_1 extends string | number | symbol = string>(animations: import("../keyed-containers.js").ReadonlyObjectMapLike<import("../functions.js").Function1<TEvent_1, import("../rx.js").AnimationConfig<T_1> | readonly import("../rx.js").AnimationConfig<T_1>[]>, TKey_1>, options: {
        readonly mode: "blocking";
        readonly concurrency?: number | undefined;
    }): import("../streaming.js").AnimationEventHandlerLike<TEvent_1, T_1, TKey_1>;
    <TEvent_2 = unknown, T_2 = number, TKey_2 extends string | number | symbol = string>(animations: import("../keyed-containers.js").ReadonlyObjectMapLike<import("../functions.js").Function1<TEvent_2, import("../rx.js").AnimationConfig<T_2> | readonly import("../rx.js").AnimationConfig<T_2>[]>, TKey_2>, options: {
        readonly mode: "queueing";
        readonly concurrency?: number | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../streaming.js").AnimationEventHandlerLike<TEvent_2, T_2, TKey_2>;
    <TEvent_3 = unknown, T_3 = number, TKey_3 extends string | number | symbol = string>(animations: import("../keyed-containers.js").ReadonlyObjectMapLike<import("../functions.js").Function1<TEvent_3, import("../rx.js").AnimationConfig<T_3> | readonly import("../rx.js").AnimationConfig<T_3>[]>, TKey_3>): import("../streaming.js").AnimationEventHandlerLike<TEvent_3, T_3, TKey_3>;
};
/**
 * Returns an event handler that invokes the observable function.
 *
 * @category Constructor
 */
export declare const createEventHandler: {
    <TEvent>(op: import("../functions.js").Function1<TEvent, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "switching";
    }): import("../streaming.js").StreamableLike<TEvent, boolean, import("../streaming.js").StreamLike<TEvent, boolean>>;
    <TEvent_1>(op: import("../functions.js").Function1<TEvent_1, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "blocking";
    }): import("../streaming.js").StreamableLike<TEvent_1, boolean, import("../streaming.js").StreamLike<TEvent_1, boolean>>;
    <TEvent_2>(op: import("../functions.js").Function1<TEvent_2, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../streaming.js").StreamableLike<TEvent_2, boolean, import("../streaming.js").StreamLike<TEvent_2, boolean>>;
    <TEvent_3>(op: import("../functions.js").Function1<TEvent_3, import("../rx.js").ObservableLike<unknown>>): import("../streaming.js").StreamableLike<TEvent_3, boolean, import("../streaming.js").StreamLike<TEvent_3, boolean>>;
};
/**
 * @category Constructor
 */
export declare const createInMemoryCache: <T>(options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../util.js").SchedulerLike | undefined;
}) => import("../streaming.js").CacheLike<T>;
/**
 * @category Constructor
 */
export declare const createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): import("../rx.js").ObservableLike<Readonly<Record<string, import("../functions.js").Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): import("../rx.js").ObservableLike<void>;
}, options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../util.js").SchedulerLike | undefined;
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
export declare const createStateStore: <T>(initialState: import("../functions.js").Factory<T>, options?: {
    readonly equality?: import("../functions.js").Equality<T> | undefined;
} | undefined) => import("../streaming.js").StreamableLike<import("../functions.js").Updater<T>, T, import("../streaming.js").StreamLike<import("../functions.js").Updater<T>, T>>;
/**
 * @category Constructor
 */
export declare const identity: <T>() => import("../streaming.js").StreamableLike<T, T, import("../streaming.js").StreamLike<T, T>>;
