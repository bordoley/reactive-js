import { DictionaryLike, ReadonlyObjectMapLike } from "../collections.js";
import { BroadcasterLike, ObservableLike, PureObservableLike, PureSynchronousObservableLike, StoreLike, StreamLike, StreamableLike } from "../computations.js";
import { Equality, Factory, Function1, Function2, Reducer, Updater } from "../functions.js";
import { PauseableLike, SchedulerLike } from "../utils.js";
import { AnimationLike_isRunning as Animation_isRunning } from "./Streamable/__private__/Streamable.animation.js";
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
export interface AnimationGroupLike<TEvent, TKey extends string, out T> extends AnimationLike<TEvent, number>, DictionaryLike<TKey, BroadcasterLike<T>> {
}
export type SpringCommand = number | ReadonlyArray<number> | {
    readonly from: number;
    readonly to: number | ReadonlyArray<number>;
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
};
export type SpringEvent = SpringCommand | Function1<number, SpringCommand>;
export interface SpringStreamLike extends AnimationLike<SpringEvent, number> {
}
/**
 * @noInheritDoc
 */
export interface StreamableModule {
    actionReducer<TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
        readonly equality?: Equality<T>;
    }): StreamableLike<TAction, T>;
    animation<T>(animation: PureSynchronousObservableLike<T>): StreamableLike<void, T, AnimationLike<void, T>>;
    animation<T, TEvent>(animation: Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>): StreamableLike<TEvent, T, AnimationLike<TEvent, T>>;
    animationGroup<T, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, PureSynchronousObservableLike<T>>, options?: {
        readonly animationScheduler?: SchedulerLike;
    }): StreamableLike<void, number, AnimationGroupLike<void, TKey, T>>;
    animationGroup<T, TKey extends string, TEvent>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>>, options?: {
        readonly animationScheduler?: SchedulerLike;
    }): StreamableLike<TEvent, number, AnimationGroupLike<TEvent, TKey, T>>;
    create<TReq, T>(op: Function1<PureObservableLike<TReq>, ObservableLike<T>>): StreamableLike<TReq, T, StreamLike<TReq, T>>;
    identity<T>(): StreamableLike<T, T, StreamLike<T, T>>;
    spring(options?: {
        readonly animationScheduler?: SchedulerLike;
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): StreamableLike<SpringEvent, number, SpringStreamLike>;
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
    }): StreamableLike<Updater<T>, T>;
    syncState<T>(onInit: Function1<T, ObservableLike<Updater<T>>>, onChange: Function2<T, T, ObservableLike<Updater<T>>>, options?: {
        readonly throttleDuration?: number;
    }): Function1<StreamableLike<Updater<T>, T>, StreamableLike<Updater<T>, T>>;
}
export type Signature = StreamableModule;
export declare const create: Signature["create"];
export declare const actionReducer: Signature["actionReducer"];
export declare const animation: Signature["animation"];
export declare const identity: Signature["identity"];
export declare const stateStore: Signature["stateStore"];
export declare const syncState: Signature["syncState"];
