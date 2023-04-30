/**
 * @category Constructor
 */
export declare const create: <TReq, T>(op: import("../containers.js").ContainerOperator<import("../rx.js").ObservableContainerLike, TReq, T>) => import("../streaming.js").StreamableLike<TReq, T, import("../streaming.js").StreamLike<TReq, T, {
    type: "complete" | "wait" | "drain";
}>>;
/**
 * @category Constructor
 */
export declare const createAnimationEventHandler: {
    <TEventType = unknown, T = number>(animation: import("../functions.js").Function1<TEventType, import("../rx.js").AnimationConfig<T> | readonly import("../rx.js").AnimationConfig<T>[]>, options: {
        readonly mode: "switching";
        readonly concurrency?: number | undefined;
    }): import("../streaming.js").AnimationEventHandlerLike<TEventType, T>;
    <TEventType_1 = unknown, T_1 = number>(animation: import("../functions.js").Function1<TEventType_1, import("../rx.js").AnimationConfig<T_1> | readonly import("../rx.js").AnimationConfig<T_1>[]>, options: {
        readonly mode: "blocking";
        readonly concurrency?: number | undefined;
    }): import("../streaming.js").AnimationEventHandlerLike<TEventType_1, T_1>;
    <TEventType_2 = unknown, T_2 = number>(animation: import("../functions.js").Function1<TEventType_2, import("../rx.js").AnimationConfig<T_2> | readonly import("../rx.js").AnimationConfig<T_2>[]>, options: {
        readonly mode: "queueing";
        readonly concurrency?: number | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../streaming.js").AnimationEventHandlerLike<TEventType_2, T_2>;
    <TEventType_3 = unknown, T_3 = number>(animation: import("../functions.js").Function1<TEventType_3, import("../rx.js").AnimationConfig<T_3> | readonly import("../rx.js").AnimationConfig<T_3>[]>): import("../streaming.js").AnimationEventHandlerLike<TEventType_3, T_3>;
};
/**
 * @category Constructor
 */
export declare const createAnimationGroupEventHandler: {
    <TEventType = unknown, T = number, TKey extends string | number | symbol = string>(animationGroup: import("../keyed-containers.js").ReadonlyObjectMapLike<TKey, import("../functions.js").Function1<TEventType, import("../rx.js").AnimationConfig<T> | readonly import("../rx.js").AnimationConfig<T>[]>>, options: {
        readonly mode: "switching";
        readonly concurrency?: number | undefined;
    }): import("../streaming.js").AnimationGroupEventHandlerLike<TEventType, T, TKey>;
    <TEventType_1 = unknown, T_1 = number, TKey_1 extends string | number | symbol = string>(animationGroup: import("../keyed-containers.js").ReadonlyObjectMapLike<TKey_1, import("../functions.js").Function1<TEventType_1, import("../rx.js").AnimationConfig<T_1> | readonly import("../rx.js").AnimationConfig<T_1>[]>>, options: {
        readonly mode: "blocking";
        readonly concurrency?: number | undefined;
    }): import("../streaming.js").AnimationGroupEventHandlerLike<TEventType_1, T_1, TKey_1>;
    <TEventType_2 = unknown, T_2 = number, TKey_2 extends string | number | symbol = string>(animationGroup: import("../keyed-containers.js").ReadonlyObjectMapLike<TKey_2, import("../functions.js").Function1<TEventType_2, import("../rx.js").AnimationConfig<T_2> | readonly import("../rx.js").AnimationConfig<T_2>[]>>, options: {
        readonly mode: "queueing";
        readonly concurrency?: number | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../streaming.js").AnimationGroupEventHandlerLike<TEventType_2, T_2, TKey_2>;
    <TEventType_3 = unknown, T_3 = number, TKey_3 extends string | number | symbol = string>(animationGroup: import("../keyed-containers.js").ReadonlyObjectMapLike<TKey_3, import("../functions.js").Function1<TEventType_3, import("../rx.js").AnimationConfig<T_3> | readonly import("../rx.js").AnimationConfig<T_3>[]>>): import("../streaming.js").AnimationGroupEventHandlerLike<TEventType_3, T_3, TKey_3>;
};
/**
 * Returns an event handler that invokes the observable function.
 *
 * @category Constructor
 */
export declare const createEventHandler: {
    <TEventType>(op: import("../functions.js").Function1<TEventType, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "switching";
    }): import("../streaming.js").StreamableLike<TEventType, boolean, import("../streaming.js").StreamLike<TEventType, boolean, {
        type: "complete" | "wait" | "drain";
    }>>;
    <TEventType_1>(op: import("../functions.js").Function1<TEventType_1, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "blocking";
    }): import("../streaming.js").StreamableLike<TEventType_1, boolean, import("../streaming.js").StreamLike<TEventType_1, boolean, {
        type: "complete" | "wait" | "drain";
    }>>;
    <TEventType_2>(op: import("../functions.js").Function1<TEventType_2, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../streaming.js").StreamableLike<TEventType_2, boolean, import("../streaming.js").StreamLike<TEventType_2, boolean, {
        type: "complete" | "wait" | "drain";
    }>>;
    <TEventType_3>(op: import("../functions.js").Function1<TEventType_3, import("../rx.js").ObservableLike<unknown>>): import("../streaming.js").StreamableLike<TEventType_3, boolean, import("../streaming.js").StreamLike<TEventType_3, boolean, {
        type: "complete" | "wait" | "drain";
    }>>;
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
} | undefined) => import("../streaming.js").StreamableLike<import("../functions.js").Updater<T>, T, import("../streaming.js").StreamLike<import("../functions.js").Updater<T>, T, {
    type: "complete" | "wait" | "drain";
}>>;
/**
 * @category Constructor
 */
export declare const identity: <T>() => import("../streaming.js").StreamableLike<T, T, import("../streaming.js").StreamLike<T, T, {
    type: "complete" | "wait" | "drain";
}>>;
