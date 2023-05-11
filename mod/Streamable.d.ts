import type * as DeferredObservable from "./DeferredObservable.js";
import { Equality, Factory, Updater } from "./functions.js";
import { ContainerOperator, StreamLike, StreamableLike } from "./types.js";
export interface Signature {
    /**
     * @category Constructor
     */
    create<TReq, T>(op: ContainerOperator<DeferredObservable.Type, TReq, T>): StreamableLike<TReq, T, StreamLike<TReq, T>>;
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
export declare const create: <TReq, T>(op: ContainerOperator<import("./types.js").DeferredObservableContainer, TReq, T>) => StreamableLike<TReq, T, StreamLike<TReq, T>>;
export declare const createStateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<Updater<T>, T, StreamLike<Updater<T>, T>>;
export declare const identity: <T>() => StreamableLike<T, T, StreamLike<T, T>>;
