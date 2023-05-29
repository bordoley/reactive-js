import { Animation } from "./Observable.js";
import Streamable_create from "./Streamable/__internal__/Streamable.create.js";
import Streamable_createAnimationGroupEventHandler, {
  Streamable_createAnimationGroupEventHandlerStream,
} from "./Streamable/__internal__/Streamable.createAnimationGroupEventHandler.js";
import type Streamable_createCache from "./Streamable/__internal__/Streamable.createCache.js";
import Streamable_createEventHandler from "./Streamable/__internal__/Streamable.createEventHandler.js";
import Streamable_createInMemoryCache from "./Streamable/__internal__/Streamable.createInMemoryCache.js";
import Streamable_createPersistentCache from "./Streamable/__internal__/Streamable.createPersistentCache.js";
import Streamable_createStateStore from "./Streamable/__internal__/Streamable.createStateStore.js";
import Streamable_identity from "./Streamable/__internal__/Streamable.identity.js";
import {
  Equality,
  Factory,
  Function1,
  Optional,
  Updater,
} from "./functions.js";
import {
  DeferredObservableBaseLike,
  DeferredObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReadonlyObjectMapLike,
  SchedulerLike,
  StreamLike,
  StreamableLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Module
 */
export interface StreamableModule {
  /**
   * @category Constructor
   */
  create<TReq, T>(
    op: Function1<DeferredObservableLike<TReq>, DeferredObservableBaseLike<T>>,
  ): StreamableLike<TReq, T, StreamLike<TReq, T>>;

  createAnimationGroupEventHandler<TEvent, TKey extends string | symbol, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEvent, Animation<T> | readonly Animation<T>[]>
    >,
    options: { readonly mode: "switching"; readonly scheduler?: SchedulerLike },
  ): StreamableLike<
    TEvent,
    boolean,
    ReturnType<
      typeof Streamable_createAnimationGroupEventHandlerStream<TEvent, TKey, T>
    >
  >;
  createAnimationGroupEventHandler<TEvent, TKey extends string | symbol, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEvent, Animation<T> | readonly Animation<T>[]>
    >,
    options: { readonly mode: "blocking"; readonly scheduler?: SchedulerLike },
  ): StreamableLike<
    TEvent,
    boolean,
    ReturnType<
      typeof Streamable_createAnimationGroupEventHandlerStream<TEvent, TKey, T>
    >
  >;
  createAnimationGroupEventHandler<TEvent, TKey extends string | symbol, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEvent, Animation<T> | readonly Animation<T>[]>
    >,
    options: {
      readonly mode: "queueing";
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamableLike<
    TEvent,
    boolean,
    ReturnType<
      typeof Streamable_createAnimationGroupEventHandlerStream<TEvent, TKey, T>
    >
  >;

  createAnimationGroupEventHandler<TKey extends string | symbol, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Animation<T> | readonly Animation<T>[]
    >,
    options: { readonly mode: "switching"; readonly scheduler?: SchedulerLike },
  ): StreamableLike<
    void,
    boolean,
    ReturnType<
      typeof Streamable_createAnimationGroupEventHandlerStream<void, TKey, T>
    >
  >;
  createAnimationGroupEventHandler<TKey extends string | symbol, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Animation<T> | readonly Animation<T>[]
    >,
    options: { readonly mode: "blocking"; readonly scheduler?: SchedulerLike },
  ): StreamableLike<
    void,
    boolean,
    ReturnType<
      typeof Streamable_createAnimationGroupEventHandlerStream<void, TKey, T>
    >
  >;
  createAnimationGroupEventHandler<TKey extends string | symbol, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Animation<T> | readonly Animation<T>[]
    >,
    options: {
      readonly mode: "queueing";
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamableLike<
    void,
    boolean,
    ReturnType<
      typeof Streamable_createAnimationGroupEventHandlerStream<void, TKey, T>
    >
  >;

  createEventHandler<TEventType>(
    op: Function1<TEventType, DeferredObservableBaseLike<unknown>>,
    options: { readonly mode: "switching" },
  ): StreamableLike<TEventType, boolean>;
  createEventHandler<TEventType>(
    op: Function1<TEventType, DeferredObservableBaseLike<unknown>>,
    options: { readonly mode: "blocking" },
  ): StreamableLike<TEventType, boolean>;
  createEventHandler<TEventType>(
    op: Function1<TEventType, DeferredObservableBaseLike<unknown>>,
    options: {
      readonly mode: "queueing";
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamableLike<TEventType, boolean>;
  createEventHandler<TEventType>(
    op: Function1<TEventType, DeferredObservableBaseLike<unknown>>,
  ): StreamableLike<TEventType, boolean>;

  createInMemoryCache<T>(options?: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
  }): ReturnType<typeof Streamable_createCache<T>>;

  createPersistentCache<T>(
    persistentStore: {
      load(
        keys: ReadonlySet<string>,
      ): DeferredObservableBaseLike<Readonly<Record<string, Optional<T>>>>;
      store(
        updates: Readonly<Record<string, T>>,
      ): DeferredObservableBaseLike<void>;
    },
    options?: {
      readonly capacity?: number;
      readonly cleanupScheduler?: SchedulerLike;
    },
  ): ReturnType<typeof Streamable_createCache<T>>;

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
  createStateStore<T>(
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ): StreamableLike<Updater<T>, T>;

  /**
   * @category Constructor
   */
  identity<T>(): StreamableLike<T, T, StreamLike<T, T>>;
}

export type Signature = StreamableModule;

export const create: Signature["create"] = Streamable_create;
export const createEventHandler: Signature["createEventHandler"] =
  Streamable_createEventHandler;
export const createAnimationGroupEventHandler: Signature["createAnimationGroupEventHandler"] =
  Streamable_createAnimationGroupEventHandler;
export const createInMemoryCache: Signature["createInMemoryCache"] =
  Streamable_createInMemoryCache;
export const createPersistentCache: Signature["createPersistentCache"] =
  Streamable_createPersistentCache;
export const createStateStore: Signature["createStateStore"] =
  Streamable_createStateStore;
export const identity: Signature["identity"] = Streamable_identity;
