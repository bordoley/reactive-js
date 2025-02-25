import { ReadonlyObjectMapLike } from "../collections.js";
import { AnimationGroupStreamLike, AnimationStreamLike, DeferredObservableLike, PureDeferredObservableLike, PureRunnableLike, SchedulerLike, StreamLike, StreamableLike } from "../concurrent.js";
import { Equality, Factory, Function1, Function2, Reducer, Updater } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface StreamableModule {
    actionReducer<TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
        readonly equality?: Equality<T>;
    }): StreamableLike<TAction, T>;
    animation<T>(animation: PureRunnableLike<T>, options?: {
        readonly animationScheduler?: SchedulerLike;
    }): StreamableLike<void, boolean, AnimationStreamLike<void, T>>;
    animation<T, TEvent>(animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>, options?: {
        readonly animationScheduler?: SchedulerLike;
    }): StreamableLike<TEvent, boolean, AnimationStreamLike<TEvent, T>>;
    animationGroup<T, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, PureRunnableLike<T>>, options?: {
        readonly animationScheduler?: SchedulerLike;
    }): StreamableLike<void, boolean, AnimationGroupStreamLike<void, TKey, T>>;
    animationGroup<T, TKey extends string, TEvent>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>>, options?: {
        readonly animationScheduler?: SchedulerLike;
    }): StreamableLike<TEvent, boolean, AnimationGroupStreamLike<TEvent, TKey, T>>;
    create<TReq, T>(op: Function1<PureDeferredObservableLike<TReq>, DeferredObservableLike<T>>): StreamableLike<TReq, T, StreamLike<TReq, T>>;
    identity<T>(): StreamableLike<T, T, StreamLike<T, T>>;
    spring(initialValue: number, options?: {
        readonly animationScheduler?: SchedulerLike;
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): StreamableLike<Function1<number, number | {
        from: number;
        to: number | ReadonlyArray<number>;
    } | ReadonlyArray<number>>, boolean, AnimationStreamLike<Function1<number, number | {
        from: number;
        to: number | ReadonlyArray<number>;
    } | ReadonlyArray<number>>, number>>;
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
    syncState<T>(onInit: Function1<T, DeferredObservableLike<Updater<T>>>, onChange: Function2<T, T, DeferredObservableLike<Updater<T>>>, options?: {
        readonly throttleDuration?: number;
    }): Function1<StreamableLike<Updater<T>, T>, StreamableLike<Updater<T>, T>>;
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
