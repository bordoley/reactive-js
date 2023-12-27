import { DictionaryLike, ReadonlyObjectMapLike } from "../collections.js";
import { CacheLike, DeferredObservableLike, DeferredObservableWithSideEffectsLike, SchedulerLike, StreamLike, StreamableLike } from "../concurrent.js";
import { EventSourceLike } from "../events.js";
import { Equality, Factory, Function1, Optional, Updater } from "../functions.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
import { Animation } from "./Observable.js";
/**
 * @noInheritDoc
 */
export interface StreamableModule {
    /**
     */
    create<TReq, T>(op: Function1<DeferredObservableWithSideEffectsLike<TReq>, DeferredObservableLike<T>>): StreamableLike<TReq, T, StreamLike<TReq, T>>;
    createAnimationGroupEventHandler<TEvent, TKey extends string | symbol, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, Animation<T> | readonly Animation<T>[]>>, options: {
        readonly mode: "switching";
        readonly scheduler?: SchedulerLike;
    }): StreamableLike<TEvent, boolean, StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>>;
    createAnimationGroupEventHandler<TEvent, TKey extends string | symbol, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, Animation<T> | readonly Animation<T>[]>>, options: {
        readonly mode: "blocking";
        readonly scheduler?: SchedulerLike;
    }): StreamableLike<TEvent, boolean, StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>>;
    createAnimationGroupEventHandler<TEvent, TKey extends string | symbol, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, Animation<T> | readonly Animation<T>[]>>, options: {
        readonly mode: "queueing";
        readonly scheduler?: SchedulerLike;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): StreamableLike<TEvent, boolean, StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>>;
    createAnimationGroupEventHandler<TKey extends string | symbol, T>(animationGroup: ReadonlyObjectMapLike<TKey, Animation<T> | readonly Animation<T>[]>, options: {
        readonly mode: "switching";
        readonly scheduler?: SchedulerLike;
    }): StreamableLike<void, boolean, StreamLike<void, boolean> & DictionaryLike<TKey, EventSourceLike<T>>>;
    createAnimationGroupEventHandler<TKey extends string | symbol, T>(animationGroup: ReadonlyObjectMapLike<TKey, Animation<T> | readonly Animation<T>[]>, options: {
        readonly mode: "blocking";
        readonly scheduler?: SchedulerLike;
    }): StreamableLike<void, boolean, StreamLike<void, boolean> & DictionaryLike<TKey, EventSourceLike<T>>>;
    createAnimationGroupEventHandler<TKey extends string | symbol, T>(animationGroup: ReadonlyObjectMapLike<TKey, Animation<T> | readonly Animation<T>[]>, options: {
        readonly mode: "queueing";
        readonly scheduler?: SchedulerLike;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): StreamableLike<void, boolean, StreamLike<void, boolean> & DictionaryLike<TKey, EventSourceLike<T>>>;
    createEventHandler<TEventType>(op: Function1<TEventType, DeferredObservableLike>, options: {
        readonly mode: "switching";
    }): StreamableLike<TEventType, boolean>;
    createEventHandler<TEventType>(op: Function1<TEventType, DeferredObservableLike>, options: {
        readonly mode: "blocking";
    }): StreamableLike<TEventType, boolean>;
    createEventHandler<TEventType>(op: Function1<TEventType, DeferredObservableLike>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): StreamableLike<TEventType, boolean>;
    createEventHandler<TEventType>(op: Function1<TEventType, DeferredObservableLike>): StreamableLike<TEventType, boolean>;
    createInMemoryCache<T>(options?: {
        readonly capacity?: number;
        readonly cleanupScheduler?: SchedulerLike;
    }): StreamableLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never, CacheLike<T>>;
    createPersistentCache<T>(persistentStore: {
        load(keys: ReadonlySet<string>): DeferredObservableLike<Readonly<Record<string, Optional<T>>>>;
        store(updates: Readonly<Record<string, T>>): DeferredObservableLike<void>;
    }, options?: {
        readonly capacity?: number;
        readonly cleanupScheduler?: SchedulerLike;
    }): StreamableLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never, CacheLike<T>>;
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
    createStateStore<T>(initialState: Factory<T>, options?: {
        readonly equality?: Equality<T>;
    }): StreamableLike<Updater<T>, T>;
    /**
     */
    identity<T>(): StreamableLike<T, T, StreamLike<T, T>>;
}
export type Signature = StreamableModule;
export declare const create: Signature["create"];
export declare const createAnimationGroupEventHandler: Signature["createAnimationGroupEventHandler"];
export declare const createInMemoryCache: Signature["createInMemoryCache"];
export declare const createPersistentCache: Signature["createPersistentCache"];
export declare const createEventHandler: Signature["createEventHandler"];
export declare const createStateStore: Signature["createStateStore"];
export declare const identity: Signature["identity"];
