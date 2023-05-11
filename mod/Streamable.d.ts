/**
 * @category Constructor
 */
export declare const create: <TReq, T>(op: import("./types.js").ContainerOperator<import("./DeferredObservable.js").Type, TReq, T>) => import("./types.js").StreamableLike<TReq, T, import("./types.js").StreamLike<TReq, T>>;
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
