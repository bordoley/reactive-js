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
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 *
 * @category Constructor
 */
export declare const createActionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T>;
}) => StreamableLike<TAction, T>;
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
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
