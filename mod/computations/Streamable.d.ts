import { DictionaryLike, ReadonlyObjectMapLike } from "../collections.js";
import { BroadcasterLike, ObservableLike, PureObservableLike, PureSynchronousObservableLike, StoreLike, StreamLike, StreamableLike } from "../computations.js";
import { Equality, Factory, Function1, Function2, Reducer, Updater } from "../functions.js";
import { PauseableLike } from "../utils.js";
import { AnimationLike_isRunning as Animation_isRunning } from "./__mixins__/AnimationStreamMixin.js";
export declare const AnimationLike_isRunning: typeof Animation_isRunning;
/**
 * @noInheritDoc
 */
export interface AnimationLike<TEvent, out T> extends StreamLike<TEvent, T>, PauseableLike {
    readonly [AnimationLike_isRunning]: StoreLike<boolean>;
}
/**
 * @noInheritDoc
 */
export interface AnimationGroupLike<TEvent, TKey extends string, out T> extends AnimationLike<TEvent, void>, PauseableLike, DictionaryLike<TKey, BroadcasterLike<T>> {
}
export type SpringCommand = number | ReadonlyArray<number> | {
    readonly from: number;
    readonly to: number | ReadonlyArray<number>;
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
};
export type SpringEvent = SpringCommand | Function1<number, SpringCommand>;
export interface SpringLike extends AnimationLike<SpringEvent, number>, StateStoreStreamLike<SpringEvent, number> {
}
export interface StateStoreStreamLike<TAction, T> extends StreamLike<TAction, T>, StoreLike<T> {
}
/**
 * @noInheritDoc
 */
export interface StreamableModule {
    actionReducer<TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
        readonly equality?: Equality<T>;
    }): StreamableLike<TAction, T, StateStoreStreamLike<TAction, T>>;
    animation<T>(animation: PureSynchronousObservableLike<T>): StreamableLike<void, T, AnimationLike<void, T>>;
    animation<T, TEvent>(animation: Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>): StreamableLike<TEvent, T, AnimationLike<TEvent, T>>;
    animationGroup<T, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, PureSynchronousObservableLike<T>>): StreamableLike<void, void, AnimationGroupLike<void, TKey, T>>;
    animationGroup<T, TKey extends string, TEvent>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>>): StreamableLike<TEvent, void, AnimationGroupLike<TEvent, TKey, T>>;
    create<TReq, T>(op: Function1<PureObservableLike<TReq>, ObservableLike<T>>): StreamableLike<TReq, T, StreamLike<TReq, T>>;
    identity<T>(): StreamableLike<T, T, StreamLike<T, T>>;
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): StreamableLike<SpringEvent, number, SpringLike>;
    /**
     * Returns a new `StateStoreLike` instance that stores state which can
     * be updated by notifying the instance with a `StateUpdater` that computes a
     * new state based upon the previous state.
     *
     * @param initialState - The initial accumulation value.
     * @param equals - Optional equality function that is used to compare
     * if a state value is distinct from the previous one.
     *
     */
    stateStore<T>(initialState: Factory<T>, options?: {
        readonly equality?: Equality<T>;
    }): StreamableLike<Updater<T>, T, StateStoreStreamLike<Updater<T>, T>>;
    syncState<T, TStream extends StreamLike<Updater<T>, T>>(onInit: Function1<T, ObservableLike<Updater<T>>>, onChange: Function2<T, T, ObservableLike<Updater<T>>>, options?: {
        readonly throttleDuration?: number;
    }): Function1<StreamableLike<Updater<T>, T, TStream>, StreamableLike<Updater<T>, T, TStream>>;
}
export type Signature = StreamableModule;
export declare const create: Signature["create"];
export declare const actionReducer: Signature["actionReducer"];
export declare const animation: Signature["animation"];
export declare const animationGroup: Signature["animationGroup"];
export declare const identity: Signature["identity"];
export declare const spring: Signature["spring"];
export declare const stateStore: Signature["stateStore"];
export declare const syncState: Signature["syncState"];
