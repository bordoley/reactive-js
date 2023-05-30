import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../Disposable/__internal__/Disposable.disposed.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_createRefCountedPublisher from "../../Observable/__internal__/Observable.createRefCountedPublisher.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_fromOptional from "../../Observable/__internal__/Observable.fromOptional.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import ReadonlyMap_keys from "../../ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyObjectMap_forEachWithKey from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.forEachWithKey.js";
import ReadonlyObjectMap_keep from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keep.js";
import ReadonlyObjectMap_keySet from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keySet.js";
import ReadonlyObjectMap_mapWithKey from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_union from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.union.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  QueueLike_dequeue,
} from "../../__internal__/types.js";
import {
  Function1,
  Optional,
  SideEffect1,
  Tuple2,
  bindMethod,
  compose,
  identity,
  invoke,
  isNone,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import {
  AssociativeCollectionLike,
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DeferredObservableBaseLike,
  DispatcherLike,
  DisposableLike,
  DisposableLike_isDisposed,
  EnumerableLike,
  KeyedCollectionLike_get,
  ObservableLike,
  PublisherLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  ReadonlyObjectMapLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
  SinkLike_notify,
  StreamLike,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "../../types.js";
import Streamable_create from "./Streamable.create.js";

interface ReactiveCachePersistentStorageLike<T> {
  load(
    keys: ReadonlySet<string>,
  ): DeferredObservableBaseLike<ReadonlyObjectMapLike<string, Optional<T>>>;
  store(
    updates: ReadonlyObjectMapLike<string, Optional<T>>,
  ): DeferredObservableBaseLike<void>;
}

type CacheLike<T> = StreamableLike<
  ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
  never,
  StreamLike<
    ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
    never
  > &
    AssociativeCollectionLike<string, ObservableLike<T>>
>;

const createCacheStream: <T>(
  scheduler: SchedulerLike,
  options: Optional<{
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  }>,
  capacity: number,
  cleanupScheduler: SchedulerLike,
  persistentStore: Optional<ReactiveCachePersistentStorageLike<T>>,
) => StreamOf<CacheLike<T>> & DisposableLike = /*@__PURE__*/ (<T>() => {
  type TProperties<T> = {
    scheduleCleanup: SideEffect1<string>;
    store: Map<string, T>;
    subscriptions: Map<string, PublisherLike<Optional<T>>>;
  };

  return createInstanceFactory(
    mix(
      include(
        Stream_delegatingMixin<
          ReadonlyObjectMapLike<string, Function1<Optional<T>, T>>,
          never
        >(),
        Delegating_mixin(),
      ),
      function CacheStream(
        instance: TProperties<T> &
          Pick<
            AssociativeCollectionLike<string, ObservableLike<T>>,
            | typeof KeyedCollectionLike_get
            | typeof CollectionLike_count
            | typeof AssociativeCollectionLike_keys
          >,
        scheduler: SchedulerLike,
        options: Optional<{
          readonly replay?: number;
          readonly capacity?: number;
          readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }>,
        capacity: number,
        cleanupScheduler: SchedulerLike,
        persistentStore: Optional<ReactiveCachePersistentStorageLike<T>>,
      ): StreamOf<CacheLike<T>> & DisposableLike {
        instance.store = new Map();
        instance.subscriptions = new Map();

        const cleanupQueue = Queue_createIndexedQueue<string>(
          MAX_SAFE_INTEGER,
          "overflow",
        );

        const cleanupContinuation = (scheduler: SchedulerLike) => {
          const { store, subscriptions } = instance;

          while (store.size > capacity) {
            const key = cleanupQueue[QueueLike_dequeue]();
            if (isNone(key)) {
              break;
            }

            if (!subscriptions.has(key)) {
              store.delete(key);
            }
            scheduler[SchedulerLike_yield]();
          }
        };

        let cleanupJob = Disposable_disposed;

        instance.scheduleCleanup = (key: string) => {
          if (isNone(instance.store.get(key))) {
            return;
          }

          cleanupQueue[QueueableLike_enqueue](key);

          if (!cleanupJob[DisposableLike_isDisposed]) {
            return;
          }

          cleanupJob =
            cleanupScheduler[SchedulerLike_schedule](cleanupContinuation);
        };

        const delegate = pipe(
          Streamable_create<
            ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
            never
          >(
            compose(
              Observable_map(
                (
                  updaters: ReadonlyObjectMapLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                ): Tuple2<
                  ReadonlyObjectMapLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                  ReadonlyObjectMapLike<string, Optional<T>>
                > => [
                  updaters,
                  pipe(
                    updaters,
                    ReadonlyObjectMap_mapWithKey(
                      (_, k: string) => instance.store.get(k) as T,
                    ),
                  ),
                ],
              ),
              isSome(persistentStore)
                ? Observable_concatMap(
                    (
                      next: Tuple2<
                        ReadonlyObjectMapLike<
                          string,
                          Function1<Optional<T>, Optional<T>>
                        >,
                        ReadonlyObjectMapLike<string, Optional<T>>
                      >,
                    ) => {
                      const [updaters, values] = next;
                      const keys = pipe(
                        values,
                        ReadonlyObjectMap_keep<unknown, string>(isNone),
                        ReadonlyObjectMap_keySet<string>(),
                      );

                      return keys.size > 0
                        ? pipe(
                            persistentStore.load(keys),
                            Observable_map(
                              (
                                persistedValues: ReadonlyObjectMapLike<
                                  string,
                                  Optional<T>
                                >,
                              ) => [
                                updaters,
                                ReadonlyObjectMap_union(
                                  values,
                                  persistedValues,
                                ),
                              ],
                            ),
                          )
                        : pipe(next, Observable_fromOptional());
                    },
                  )
                : identity,
              Observable_map(
                ([updaters, values]: Tuple2<
                  ReadonlyObjectMapLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                  ReadonlyObjectMapLike<string, Optional<T>>
                >) =>
                  pipe(
                    updaters,
                    ReadonlyObjectMap_mapWithKey(
                      (
                        updater: Function1<Optional<T>, Optional<T>>,
                        k: string,
                      ) =>
                        // This could be the cached value or the value
                        // loaded from a persistent store.
                        updater(values[k]),
                    ),
                  ),
              ),
              Observable_forEach(
                ReadonlyObjectMap_forEachWithKey((v: T, key: string) => {
                  const oldValue = instance.store.get(key);

                  if (isNone(v)) {
                    instance.store.delete(key);
                  } else {
                    instance.store.set(key, v);
                  }

                  const observable = instance.subscriptions.get(key);

                  // We want to publish none, when the cache does not have the value
                  // when initially subscribing to the key.
                  const shouldPublish = isNone(v) || oldValue !== v;

                  if (isSome(observable) && shouldPublish) {
                    observable[SinkLike_notify](v);
                    return;
                  }

                  instance.scheduleCleanup(key);
                }),
              ),
              isSome(persistentStore)
                ? Observable_concatMap(bindMethod(persistentStore, "store"))
                : Observable_ignoreElements(),
            ),
          ),
          invoke(StreamableLike_stream, scheduler, options),
        );

        init(
          Stream_delegatingMixin<
            ReadonlyObjectMapLike<string, Function1<Optional<T>, T>>,
            never
          >(),
          instance,
          delegate,
        );
        init(Delegating_mixin(), instance, delegate);

        return instance;
      },
      props<TProperties<T>>({
        scheduleCleanup: none,
        store: none,
        subscriptions: none,
      }),
      {
        get [CollectionLike_count]() {
          unsafeCast<TProperties<T>>(this);
          return this.store.size;
        },

        get [AssociativeCollectionLike_keys](): EnumerableLike<string> {
          unsafeCast<TProperties<T>>(this);
          return pipe(this.store, ReadonlyMap_keys());
        },

        [KeyedCollectionLike_get](
          this: TProperties<T> &
            DelegatingLike<
              DispatcherLike<
                Record<string, Function1<Optional<T>, Optional<T>>>
              >
            > &
            DisposableLike,
          key: string,
        ): ObservableLike<T> {
          const {
            scheduleCleanup,
            store,
            subscriptions,
            [DelegatingLike_delegate]: delegate,
          } = this;

          return (
            subscriptions.get(key) ??
            (() => {
              const publisher = Observable_createRefCountedPublisher<T>({
                replay: 1,
              });
              subscriptions.set(key, publisher);

              pipe(
                publisher,
                Disposable_onDisposed(_ => {
                  subscriptions.delete(key);
                  scheduleCleanup(key);
                }),
                Disposable_addTo(this, { ignoreChildErrors: true }),
              );

              const initialValue = store.get(key);

              if (isSome(initialValue)) {
                publisher[SinkLike_notify](initialValue);
              } else {
                // Try to load the value from the persistence store
                delegate[QueueableLike_enqueue]({
                  [key]: identity,
                });
              }

              return publisher;
            })()
          );
        },
      },
    ),
  );
})();

const Streamable_createCache = <T>(
  persistentStore: Optional<{
    load(
      keys: ReadonlySet<string>,
    ): DeferredObservableBaseLike<ReadonlyObjectMapLike<string, Optional<T>>>;
    store(
      updates: ReadonlyObjectMapLike<string, T>,
    ): DeferredObservableBaseLike<void>;
  }>,
  options: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
  } = {},
): CacheLike<T> => ({
  [StreamableLike_stream]: (scheduler, streamOptions) =>
    createCacheStream(
      scheduler,
      streamOptions,
      options.capacity ?? MAX_SAFE_INTEGER,
      options.cleanupScheduler ?? scheduler,
      persistentStore,
    ),
});

export default Streamable_createCache;
