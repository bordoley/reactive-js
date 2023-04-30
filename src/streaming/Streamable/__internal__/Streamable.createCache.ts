import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  QueueLike_dequeue,
} from "../../../__internal__/util.js";
import { EnumeratorLike } from "../../../containers.js";
import {
  Function1,
  Optional,
  SideEffect1,
  bindMethod,
  compose,
  identity,
  invoke,
  isNone,
  isSome,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import { ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import ReadonlyMap_keys from "../../../keyed-containers/ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import * as ReadonlyObjectMap from "../../../keyed-containers/ReadonlyObjectMap.js";
import ReadonlyObjectMap_union from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.union.js";
import { ObservableLike, PublisherLike } from "../../../rx.js";
import * as Observable from "../../../rx/Observable.js";
import * as Publisher from "../../../rx/Publisher.js";
import {
  CacheLike,
  DisposableStreamOf,
  StreamableLike_stream,
} from "../../../streaming.js";
import Stream_delegatingMixin from "../../../streaming/Stream/__internal__/Stream.delegatingMixin.js";
import {
  AssociativeCollectionLike,
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DispatcherLike,
  DisposableLike,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  KeyedCollectionLike_get,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import * as Disposable from "../../../util/Disposable.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import Streamable_create from "./Streamable.create.js";

interface ReactiveCachePersistentStorageLike<T> {
  load(
    keys: ReadonlySet<string>,
  ): ObservableLike<ReadonlyObjectMapLike<string, Optional<T>>>;
  store(
    updates: ReadonlyObjectMapLike<string, Optional<T>>,
  ): ObservableLike<void>;
}

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
) => DisposableStreamOf<CacheLike<T>> = /*@__PURE__*/ (<T>() => {
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
      ): DisposableStreamOf<CacheLike<T>> {
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

        let cleanupJob = Disposable.disposed;

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
              Observable.map(
                (
                  updaters: ReadonlyObjectMapLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                ): [
                  ReadonlyObjectMapLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                  ReadonlyObjectMapLike<string, Optional<T>>,
                ] => [
                  updaters,
                  pipe(
                    updaters,
                    ReadonlyObjectMap.mapWithKey(
                      (_, k: string) => instance.store.get(k) as T,
                    ),
                  ),
                ],
              ),
              isSome(persistentStore)
                ? Observable.concatMap(
                    (
                      next: [
                        ReadonlyObjectMapLike<
                          string,
                          Function1<Optional<T>, Optional<T>>
                        >,
                        ReadonlyObjectMapLike<string, Optional<T>>,
                      ],
                    ) => {
                      const [updaters, values] = next;
                      const keys = pipe(
                        values,
                        ReadonlyObjectMap.keep<unknown, string>(isNone),
                        ReadonlyObjectMap.keySet<string>(),
                      );

                      return keys.size > 0
                        ? pipe(
                            persistentStore.load(keys),
                            Observable.map(persistedValues => [
                              updaters,
                              ReadonlyObjectMap_union(values, persistedValues),
                            ]),
                          )
                        : pipe(next, Observable.fromOptional());
                    },
                  )
                : identity,
              Observable.map(
                ([updaters, values]: [
                  ReadonlyObjectMapLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                  ReadonlyObjectMapLike<string, Optional<T>>,
                ]) =>
                  pipe(
                    updaters,
                    ReadonlyObjectMap.mapWithKey(
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
              Observable.forEach(
                ReadonlyObjectMap.forEachWithKey((v: T, key: string) => {
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
                    observable[EventListenerLike_notify](v);
                    return;
                  }

                  instance.scheduleCleanup(key);
                }),
              ),
              isSome(persistentStore)
                ? Observable.concatMap(bindMethod(persistentStore, "store"))
                : Observable.ignoreElements(),
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

        get [AssociativeCollectionLike_keys](): EnumeratorLike<string> {
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
              const publisher = Publisher.createRefCounted<T>({ replay: 1 });
              subscriptions.set(key, publisher);

              pipe(
                publisher,
                Disposable.onDisposed(_ => {
                  subscriptions.delete(key);
                  scheduleCleanup(key);
                }),
                Disposable.addTo(this, { ignoreChildErrors: true }),
              );

              const initialValue = store.get(key);

              if (isSome(initialValue)) {
                publisher[EventListenerLike_notify](initialValue);
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
    ): ObservableLike<ReadonlyObjectMapLike<string, Optional<T>>>;
    store(updates: ReadonlyObjectMapLike<string, T>): ObservableLike<void>;
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
