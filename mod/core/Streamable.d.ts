/**
 * @category Constructor
 */
export declare const create: <TReq, T>(op: import("../core.js").Containers.Operator<import("../core.js").ObservableContainer, TReq, T>) => import("../core.js").StreamableLike<TReq, T, import("../core.js").StreamLike<TReq, T>>;
/**
 * @category Constructor
 */
export declare const createAnimationGroupEventHandler: {
    <TEvent, TKey extends string | number | symbol, T>(animationGroup: import("../core.js").ReadonlyObjectMapLike<TKey, import("../functions.js").Function1<TEvent, import("../core.js").ReactiveContainers.AnimationConfig<T> | readonly import("../core.js").ReactiveContainers.AnimationConfig<T>[]>>, options: {
        readonly mode: "switching";
        readonly scheduler?: import("../core.js").SchedulerLike | undefined;
    }): import("../core.js").StreamableLike<TEvent, boolean, import("../core.js").StreamLike<TEvent, boolean> & import("../core.js").DictionaryLike<TKey, import("../core.js").EventSourceLike<T>>>;
    <TEvent_1, TKey_1 extends string | number | symbol, T_1>(animationGroup: import("../core.js").ReadonlyObjectMapLike<TKey_1, import("../functions.js").Function1<TEvent_1, import("../core.js").ReactiveContainers.AnimationConfig<T_1> | readonly import("../core.js").ReactiveContainers.AnimationConfig<T_1>[]>>, options: {
        readonly mode: "blocking";
        readonly scheduler?: import("../core.js").SchedulerLike | undefined;
    }): import("../core.js").StreamableLike<TEvent_1, boolean, import("../core.js").StreamLike<TEvent_1, boolean> & import("../core.js").DictionaryLike<TKey_1, import("../core.js").EventSourceLike<T_1>>>;
    <TEvent_2, TKey_2 extends string | number | symbol, T_2>(animationGroup: import("../core.js").ReadonlyObjectMapLike<TKey_2, import("../functions.js").Function1<TEvent_2, import("../core.js").ReactiveContainers.AnimationConfig<T_2> | readonly import("../core.js").ReactiveContainers.AnimationConfig<T_2>[]>>, options: {
        readonly mode: "queueing";
        readonly scheduler?: import("../core.js").SchedulerLike | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../core.js").StreamableLike<TEvent_2, boolean, import("../core.js").StreamLike<TEvent_2, boolean> & import("../core.js").DictionaryLike<TKey_2, import("../core.js").EventSourceLike<T_2>>>;
    <TKey_3 extends string | number | symbol, T_3>(animationGroup: import("../core.js").ReadonlyObjectMapLike<TKey_3, import("../core.js").ReactiveContainers.AnimationConfig<T_3> | readonly import("../core.js").ReactiveContainers.AnimationConfig<T_3>[]>, options: {
        readonly mode: "switching";
        readonly scheduler?: import("../core.js").SchedulerLike | undefined;
    }): import("../core.js").StreamableLike<void, boolean, import("../core.js").StreamLike<void, boolean> & import("../core.js").DictionaryLike<TKey_3, import("../core.js").EventSourceLike<T_3>>>;
    <TKey_4 extends string | number | symbol, T_4>(animationGroup: import("../core.js").ReadonlyObjectMapLike<TKey_4, import("../core.js").ReactiveContainers.AnimationConfig<T_4> | readonly import("../core.js").ReactiveContainers.AnimationConfig<T_4>[]>, options: {
        readonly mode: "blocking";
        readonly scheduler?: import("../core.js").SchedulerLike | undefined;
    }): import("../core.js").StreamableLike<void, boolean, import("../core.js").StreamLike<void, boolean> & import("../core.js").DictionaryLike<TKey_4, import("../core.js").EventSourceLike<T_4>>>;
    <TKey_5 extends string | number | symbol, T_5>(animationGroup: import("../core.js").ReadonlyObjectMapLike<TKey_5, import("../core.js").ReactiveContainers.AnimationConfig<T_5> | readonly import("../core.js").ReactiveContainers.AnimationConfig<T_5>[]>, options: {
        readonly mode: "queueing";
        readonly scheduler?: import("../core.js").SchedulerLike | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../core.js").StreamableLike<void, boolean, import("../core.js").StreamLike<void, boolean> & import("../core.js").DictionaryLike<TKey_5, import("../core.js").EventSourceLike<T_5>>>;
};
/**
 * Returns an event handler that invokes the observable function.
 *
 * @category Constructor
 */
export declare const createEventHandler: {
    <TEventType>(op: import("../functions.js").Function1<TEventType, import("../core.js").ObservableLike<unknown>>, options: {
        readonly mode: "switching";
    }): import("../core.js").StreamableLike<TEventType, boolean, import("../core.js").StreamLike<TEventType, boolean>>;
    <TEventType_1>(op: import("../functions.js").Function1<TEventType_1, import("../core.js").ObservableLike<unknown>>, options: {
        readonly mode: "blocking";
    }): import("../core.js").StreamableLike<TEventType_1, boolean, import("../core.js").StreamLike<TEventType_1, boolean>>;
    <TEventType_2>(op: import("../functions.js").Function1<TEventType_2, import("../core.js").ObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../core.js").StreamableLike<TEventType_2, boolean, import("../core.js").StreamLike<TEventType_2, boolean>>;
    <TEventType_3>(op: import("../functions.js").Function1<TEventType_3, import("../core.js").ObservableLike<unknown>>): import("../core.js").StreamableLike<TEventType_3, boolean, import("../core.js").StreamLike<TEventType_3, boolean>>;
};
/**
 * @category Constructor
 */
export declare const createInMemoryCache: <T>(options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../core.js").SchedulerLike | undefined;
}) => import("../core.js").StreamableLike<import("../core.js").ReadonlyObjectMapLike<string, import("../functions.js").Function1<import("../functions.js").Optional<T>, import("../functions.js").Optional<T>>>, never, import("../core.js").StreamLike<import("../core.js").ReadonlyObjectMapLike<string, import("../functions.js").Function1<import("../functions.js").Optional<T>, import("../functions.js").Optional<T>>>, never> & import("../core.js").AssociativeCollectionLike<string, import("../core.js").ObservableLike<T>>>;
/**
 * @category Constructor
 */
export declare const createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): import("../core.js").ObservableLike<Readonly<Record<string, import("../functions.js").Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): import("../core.js").ObservableLike<void>;
}, options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../core.js").SchedulerLike | undefined;
}) => import("../core.js").StreamableLike<import("../core.js").ReadonlyObjectMapLike<string, import("../functions.js").Function1<import("../functions.js").Optional<T>, import("../functions.js").Optional<T>>>, never, import("../core.js").StreamLike<import("../core.js").ReadonlyObjectMapLike<string, import("../functions.js").Function1<import("../functions.js").Optional<T>, import("../functions.js").Optional<T>>>, never> & import("../core.js").AssociativeCollectionLike<string, import("../core.js").ObservableLike<T>>>;
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
} | undefined) => import("../core.js").StreamableLike<import("../functions.js").Updater<T>, T, import("../core.js").StreamLike<import("../functions.js").Updater<T>, T>>;
/**
 * @category Constructor
 */
export declare const identity: <T>() => import("../core.js").StreamableLike<T, T, import("../core.js").StreamLike<T, T>>;
