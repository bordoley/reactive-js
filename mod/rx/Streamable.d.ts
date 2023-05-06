/**
 * @category Constructor
 */
export declare const create: <TReq, T>(op: import("../containers.js").ContainerOperator<import("../rx.js").ObservableContainer, TReq, T>) => import("../rx.js").StreamableLike<TReq, T, import("../rx.js").StreamLike<TReq, T>>;
/**
 * @category Constructor
 */
export declare const createAnimationGroupEventHandler: {
    <TEventType, TKey extends string | number | symbol, T>(animationGroup: import("../containers.js").ReadonlyObjectMapLike<TKey, import("../functions.js").Function1<TEventType, import("../rx.js").Reactive.AnimationConfig<T> | readonly import("../rx.js").Reactive.AnimationConfig<T>[]>>, options: {
        readonly mode: "switching";
        readonly scheduler?: import("../util.js").SchedulerLike | undefined;
    }): import("../rx.js").StreamableLike<TEventType, boolean, import("../rx.js").StreamLike<TEventType, boolean> & import("../containers.js").DictionaryLike<TKey, import("../util.js").EventSourceLike<T>>>;
    <TEventType_1, TKey_1 extends string | number | symbol, T_1>(animationGroup: import("../containers.js").ReadonlyObjectMapLike<TKey_1, import("../functions.js").Function1<TEventType_1, import("../rx.js").Reactive.AnimationConfig<T_1> | readonly import("../rx.js").Reactive.AnimationConfig<T_1>[]>>, options: {
        readonly mode: "blocking";
        readonly scheduler?: import("../util.js").SchedulerLike | undefined;
    }): import("../rx.js").StreamableLike<TEventType_1, boolean, import("../rx.js").StreamLike<TEventType_1, boolean> & import("../containers.js").DictionaryLike<TKey_1, import("../util.js").EventSourceLike<T_1>>>;
    <TEventType_2, TKey_2 extends string | number | symbol, T_2>(animationGroup: import("../containers.js").ReadonlyObjectMapLike<TKey_2, import("../functions.js").Function1<TEventType_2, import("../rx.js").Reactive.AnimationConfig<T_2> | readonly import("../rx.js").Reactive.AnimationConfig<T_2>[]>>, options: {
        readonly mode: "queueing";
        readonly scheduler?: import("../util.js").SchedulerLike | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../rx.js").StreamableLike<TEventType_2, boolean, import("../rx.js").StreamLike<TEventType_2, boolean> & import("../containers.js").DictionaryLike<TKey_2, import("../util.js").EventSourceLike<T_2>>>;
    <TKey_3 extends string | number | symbol, T_3>(animationGroup: import("../containers.js").ReadonlyObjectMapLike<TKey_3, import("../rx.js").Reactive.AnimationConfig<T_3> | readonly import("../rx.js").Reactive.AnimationConfig<T_3>[]>, options: {
        readonly mode: "switching";
        readonly scheduler?: import("../util.js").SchedulerLike | undefined;
    }): import("../rx.js").StreamableLike<void, boolean, import("../rx.js").StreamLike<void, boolean> & import("../containers.js").DictionaryLike<TKey_3, import("../util.js").EventSourceLike<T_3>>>;
    <TKey_4 extends string | number | symbol, T_4>(animationGroup: import("../containers.js").ReadonlyObjectMapLike<TKey_4, import("../rx.js").Reactive.AnimationConfig<T_4> | readonly import("../rx.js").Reactive.AnimationConfig<T_4>[]>, options: {
        readonly mode: "blocking";
        readonly scheduler?: import("../util.js").SchedulerLike | undefined;
    }): import("../rx.js").StreamableLike<void, boolean, import("../rx.js").StreamLike<void, boolean> & import("../containers.js").DictionaryLike<TKey_4, import("../util.js").EventSourceLike<T_4>>>;
    <TKey_5 extends string | number | symbol, T_5>(animationGroup: import("../containers.js").ReadonlyObjectMapLike<TKey_5, import("../rx.js").Reactive.AnimationConfig<T_5> | readonly import("../rx.js").Reactive.AnimationConfig<T_5>[]>, options: {
        readonly mode: "queueing";
        readonly scheduler?: import("../util.js").SchedulerLike | undefined;
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../rx.js").StreamableLike<void, boolean, import("../rx.js").StreamLike<void, boolean> & import("../containers.js").DictionaryLike<TKey_5, import("../util.js").EventSourceLike<T_5>>>;
};
/**
 * Returns an event handler that invokes the observable function.
 *
 * @category Constructor
 */
export declare const createEventHandler: {
    <TEventType>(op: import("../functions.js").Function1<TEventType, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "switching";
    }): import("../rx.js").StreamableLike<TEventType, boolean, import("../rx.js").StreamLike<TEventType, boolean>>;
    <TEventType_1>(op: import("../functions.js").Function1<TEventType_1, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "blocking";
    }): import("../rx.js").StreamableLike<TEventType_1, boolean, import("../rx.js").StreamLike<TEventType_1, boolean>>;
    <TEventType_2>(op: import("../functions.js").Function1<TEventType_2, import("../rx.js").ObservableLike<unknown>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    }): import("../rx.js").StreamableLike<TEventType_2, boolean, import("../rx.js").StreamLike<TEventType_2, boolean>>;
    <TEventType_3>(op: import("../functions.js").Function1<TEventType_3, import("../rx.js").ObservableLike<unknown>>): import("../rx.js").StreamableLike<TEventType_3, boolean, import("../rx.js").StreamLike<TEventType_3, boolean>>;
};
/**
 * @category Constructor
 */
export declare const createInMemoryCache: <T>(options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../util.js").SchedulerLike | undefined;
}) => import("../rx.js").StreamableLike<import("../containers.js").ReadonlyObjectMapLike<string, import("../functions.js").Function1<import("../functions.js").Optional<T>, import("../functions.js").Optional<T>>>, never, import("../rx.js").StreamLike<import("../containers.js").ReadonlyObjectMapLike<string, import("../functions.js").Function1<import("../functions.js").Optional<T>, import("../functions.js").Optional<T>>>, never> & import("../containers.js").AssociativeCollectionLike<string, import("../rx.js").ObservableLike<T>>>;
/**
 * @category Constructor
 */
export declare const createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): import("../rx.js").ObservableLike<Readonly<Record<string, import("../functions.js").Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): import("../rx.js").ObservableLike<void>;
}, options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../util.js").SchedulerLike | undefined;
}) => import("../rx.js").StreamableLike<import("../containers.js").ReadonlyObjectMapLike<string, import("../functions.js").Function1<import("../functions.js").Optional<T>, import("../functions.js").Optional<T>>>, never, import("../rx.js").StreamLike<import("../containers.js").ReadonlyObjectMapLike<string, import("../functions.js").Function1<import("../functions.js").Optional<T>, import("../functions.js").Optional<T>>>, never> & import("../containers.js").AssociativeCollectionLike<string, import("../rx.js").ObservableLike<T>>>;
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
} | undefined) => import("../rx.js").StreamableLike<import("../functions.js").Updater<T>, T, import("../rx.js").StreamLike<import("../functions.js").Updater<T>, T>>;
/**
 * @category Constructor
 */
export declare const identity: <T>() => import("../rx.js").StreamableLike<T, T, import("../rx.js").StreamLike<T, T>>;
