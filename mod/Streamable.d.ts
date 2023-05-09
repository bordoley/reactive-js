/**
 * @category Constructor
 */
export declare const create: <TReq, T>(op: import("./types.js").Containers.Operator<import("./types.js").DeferredObservableContainer, TReq, T>) => import("./types.js").StreamableLike<TReq, T, import("./types.js").StreamLike<TReq, T>>;
/**
 * @category Constructor
 */
export declare const createAnimationGroupEventHandler: {
    <TEvent, TKey extends string | number | symbol, T>(animationGroup: import("./types.js").ReadonlyObjectMapLike<TKey, import("./functions.js").Function1<TEvent, import("./types.js").RunnableObservableContainers.AnimationConfig<T> | readonly import("./types.js").RunnableObservableContainers.AnimationConfig<T>[]>>, options: {
        readonly mode: "switching";
        readonly scheduler?: import("./types.js").SchedulerLike | undefined;
    }): import("./types.js").StreamableLike<TEvent, boolean, import("./types.js").StreamLike<TEvent, boolean> & import("./types.js").DictionaryLike<TKey, import("./types.js").EventSourceLike<T>>>;
    <TEvent_1, TKey_1 extends string | number | symbol, T_1>(animationGroup: import("./types.js").ReadonlyObjectMapLike<TKey_1, import("./functions.js").Function1<TEvent_1, import("./types.js").RunnableObservableContainers.AnimationConfig<T_1> | readonly import("./types.js").RunnableObservableContainers.AnimationConfig<T_1>[]>>, options: {
        readonly mode: "blocking";
        readonly scheduler?: import("./types.js").SchedulerLike | undefined;
    }): import("./types.js").StreamableLike<TEvent_1, boolean, import("./types.js").StreamLike<TEvent_1, boolean> & import("./types.js").DictionaryLike<TKey_1, import("./types.js").EventSourceLike<T_1>>>;
    <TEvent_2, TKey_2 extends string | number | symbol, T_2>(animationGroup: import("./types.js").ReadonlyObjectMapLike<TKey_2, import("./functions.js").Function1<TEvent_2, import("./types.js").RunnableObservableContainers.AnimationConfig<T_2> | readonly import("./types.js").RunnableObservableContainers.AnimationConfig<T_2>[]>>, options: {
        readonly mode: "queueing";
        readonly scheduler?: import("./types.js").SchedulerLike | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("./types.js").StreamableLike<TEvent_2, boolean, import("./types.js").StreamLike<TEvent_2, boolean> & import("./types.js").DictionaryLike<TKey_2, import("./types.js").EventSourceLike<T_2>>>;
    <TKey_3 extends string | number | symbol, T_3>(animationGroup: import("./types.js").ReadonlyObjectMapLike<TKey_3, import("./types.js").RunnableObservableContainers.AnimationConfig<T_3> | readonly import("./types.js").RunnableObservableContainers.AnimationConfig<T_3>[]>, options: {
        readonly mode: "switching";
        readonly scheduler?: import("./types.js").SchedulerLike | undefined;
    }): import("./types.js").StreamableLike<void, boolean, import("./types.js").StreamLike<void, boolean> & import("./types.js").DictionaryLike<TKey_3, import("./types.js").EventSourceLike<T_3>>>;
    <TKey_4 extends string | number | symbol, T_4>(animationGroup: import("./types.js").ReadonlyObjectMapLike<TKey_4, import("./types.js").RunnableObservableContainers.AnimationConfig<T_4> | readonly import("./types.js").RunnableObservableContainers.AnimationConfig<T_4>[]>, options: {
        readonly mode: "blocking";
        readonly scheduler?: import("./types.js").SchedulerLike | undefined;
    }): import("./types.js").StreamableLike<void, boolean, import("./types.js").StreamLike<void, boolean> & import("./types.js").DictionaryLike<TKey_4, import("./types.js").EventSourceLike<T_4>>>;
    <TKey_5 extends string | number | symbol, T_5>(animationGroup: import("./types.js").ReadonlyObjectMapLike<TKey_5, import("./types.js").RunnableObservableContainers.AnimationConfig<T_5> | readonly import("./types.js").RunnableObservableContainers.AnimationConfig<T_5>[]>, options: {
        readonly mode: "queueing";
        readonly scheduler?: import("./types.js").SchedulerLike | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("./types.js").StreamableLike<void, boolean, import("./types.js").StreamLike<void, boolean> & import("./types.js").DictionaryLike<TKey_5, import("./types.js").EventSourceLike<T_5>>>;
};
/**
 * Returns an event handler that invokes the observable function.
 *
 * @category Constructor
 */
export declare const createEventHandler: {
    <TEventType>(op: import("./functions.js").Function1<TEventType, import("./types.js").DeferredObservableLike<unknown>>, options: {
        readonly mode: "switching";
    }): import("./types.js").StreamableLike<TEventType, boolean, import("./types.js").StreamLike<TEventType, boolean>>;
    <TEventType_1>(op: import("./functions.js").Function1<TEventType_1, import("./types.js").DeferredObservableLike<unknown>>, options: {
        readonly mode: "blocking";
    }): import("./types.js").StreamableLike<TEventType_1, boolean, import("./types.js").StreamLike<TEventType_1, boolean>>;
    <TEventType_2>(op: import("./functions.js").Function1<TEventType_2, import("./types.js").DeferredObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("./types.js").StreamableLike<TEventType_2, boolean, import("./types.js").StreamLike<TEventType_2, boolean>>;
    <TEventType_3>(op: import("./functions.js").Function1<TEventType_3, import("./types.js").DeferredObservableLike<unknown>>): import("./types.js").StreamableLike<TEventType_3, boolean, import("./types.js").StreamLike<TEventType_3, boolean>>;
};
/**
 * @category Constructor
 */
export declare const createInMemoryCache: <T>(options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("./types.js").SchedulerLike | undefined;
}) => import("./types.js").StreamableLike<import("./types.js").ReadonlyObjectMapLike<string, import("./functions.js").Function1<import("./functions.js").Optional<T>, import("./functions.js").Optional<T>>>, never, import("./types.js").StreamLike<import("./types.js").ReadonlyObjectMapLike<string, import("./functions.js").Function1<import("./functions.js").Optional<T>, import("./functions.js").Optional<T>>>, never> & import("./types.js").AssociativeCollectionLike<string, import("./types.js").ObservableLike<T>>>;
/**
 * @category Constructor
 */
export declare const createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): import("./types.js").DeferredObservableLike<Readonly<Record<string, import("./functions.js").Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): import("./types.js").DeferredObservableLike<void>;
}, options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("./types.js").SchedulerLike | undefined;
}) => import("./types.js").StreamableLike<import("./types.js").ReadonlyObjectMapLike<string, import("./functions.js").Function1<import("./functions.js").Optional<T>, import("./functions.js").Optional<T>>>, never, import("./types.js").StreamLike<import("./types.js").ReadonlyObjectMapLike<string, import("./functions.js").Function1<import("./functions.js").Optional<T>, import("./functions.js").Optional<T>>>, never> & import("./types.js").AssociativeCollectionLike<string, import("./types.js").ObservableLike<T>>>;
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
export declare const createStateStore: <T>(initialState: import("./functions.js").Factory<T>, options?: {
    readonly equality?: import("./functions.js").Equality<T> | undefined;
} | undefined) => import("./types.js").StreamableLike<import("./functions.js").Updater<T>, T, import("./types.js").StreamLike<import("./functions.js").Updater<T>, T>>;
/**
 * @category Constructor
 */
export declare const identity: <T>() => import("./types.js").StreamableLike<T, T, import("./types.js").StreamLike<T, T>>;
