import { ReadonlyObjectMapLike } from "../collections.js";
import { AnimationGroupStreamLike, DeferredObservableLike, PureDeferredObservableLike, PureRunnableLike, SchedulerLike, StreamLike, StreamableLike } from "../concurrent.js";
import { Equality, Factory, Function1, Function2, Reducer, Updater } from "../functions.js";
import { BackpressureStrategy } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface StreamableModule {
    actionReducer<TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
        readonly equality?: Equality<T>;
    }): StreamableLike<TAction, T>;
    animationGroup<T, TEvent = unknown, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>>, options?: {
        readonly animationScheduler?: SchedulerLike;
    }): StreamableLike<TEvent, boolean, AnimationGroupStreamLike<T, TEvent, TKey>>;
    create<TReq, T>(op: Function1<PureDeferredObservableLike<TReq>, DeferredObservableLike<T>>): StreamableLike<TReq, T, StreamLike<TReq, T>>;
    eventHandler<TEventType>(op: Function1<TEventType, DeferredObservableLike>, options?: {
        readonly mode: "switching";
    } | {
        readonly mode: "blocking";
    } | {
        readonly mode: "queueing";
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): StreamableLike<TEventType, boolean>;
    identity<T>(): StreamableLike<T, T, StreamLike<T, T>>;
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
export declare const animationGroup: Signature["animationGroup"];
export declare const eventHandler: Signature["eventHandler"];
export declare const identity: Signature["identity"];
export declare const stateStore: Signature["stateStore"];
export declare const syncState: Signature["syncState"];
