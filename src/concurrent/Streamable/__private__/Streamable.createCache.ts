import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  AssociativeLike,
  AssociativeLike_keys,
  CollectionLike_count,
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike,
  KeyedLike_get,
  ReadonlyObjectMapLike,
} from "../../../collections.js";
import Enumerator_fromIterator from "../../../collections/Enumerator/__private__/Enumerator.fromIterator.js";
import * as ReadonlyMap from "../../../collections/ReadonlyMap.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import {
  DeferredObservableLike,
  ObservableLike,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
  StreamLike,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
  SubjectLike,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
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
  tuple,
} from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  QueueLike_dequeue,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import DelegatingStreamMixin from "../../__mixins__/DelegatingStreamMixin.js";
import Streamable_create from "./Streamable.create.js";

interface ReactiveCachePersistentStorageLike<T> {
  load(
    keys: ReadonlySet<string>,
  ): DeferredObservableLike<ReadonlyObjectMapLike<string, Optional<T>>>;
  store(
    updates: ReadonlyObjectMapLike<string, Optional<T>>,
  ): DeferredObservableLike<void>;
}

type CacheLike<T> = StreamableLike<
  ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
  never,
  StreamLike<
    ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
    never
  > &
    AssociativeLike<string, ObservableLike<T>>
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
) => StreamOf<CacheLike<T>> = /*@__PURE__*/ (<T>() => {
  type TProperties<T> = {
    delegate: StreamLike<
      ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
      never
    >;
    scheduleCleanup: SideEffect1<string>;
    store: Map<string, T>;
    subscriptions: Map<string, SubjectLike<Optional<T>>>;
  };

  return createInstanceFactory(
    mix(
      include(
        DelegatingStreamMixin<
          ReadonlyObjectMapLike<string, Function1<Optional<T>, T>>,
          never
        >(),
      ),
      function CacheStream(
        instance: TProperties<T> &
          Pick<
            AssociativeLike<string, ObservableLike<T>>,
            | typeof KeyedLike_get
            | typeof CollectionLike_count
            | typeof AssociativeLike_keys
            | typeof Symbol.iterator
            | typeof EnumerableLike_enumerate
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
      ): StreamOf<CacheLike<T>> {
        instance.store = new Map();
        instance.subscriptions = new Map();

        const cleanupQueue = IndexedQueue.create<string>(
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
                ) =>
                  tuple(
                    updaters,
                    pipe(
                      updaters,
                      ReadonlyObjectMap.map(
                        (_, k: string) => instance.store.get(k) as T,
                      ),
                    ),
                  ),
              ),
              isSome(persistentStore)
                ? Observable.concatMap(next => {
                    const [updaters, values] = next;
                    const keys = pipe(
                      values,
                      ReadonlyObjectMap.keep<unknown, string>(isNone),
                      ReadonlyObjectMap.keySet<string>(),
                    );

                    return keys.size > 0
                      ? pipe(
                          persistentStore.load(keys),
                          Observable.map(
                            (
                              persistedValues: ReadonlyObjectMapLike<
                                string,
                                Optional<T>
                              >,
                            ) =>
                              tuple(
                                updaters,
                                pipe(
                                  values,
                                  ReadonlyObjectMap.union(persistedValues),
                                ),
                              ),
                          ),
                        )
                      : (pipe(
                          next,
                          Observable.fromOptional(),
                        ) as DeferredObservableLike);
                  })
                : (identity as Function1<
                    DeferredObservableLike,
                    DeferredObservableLike
                  >),
              Observable.map(
                ([updaters, values]: Tuple2<
                  ReadonlyObjectMapLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                  ReadonlyObjectMapLike<string, Optional<T>>
                >) =>
                  pipe(
                    updaters,
                    ReadonlyObjectMap.map(
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
                ReadonlyObjectMap.forEach((v: T, key: string) => {
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
                ? Observable.concatMap(bindMethod(persistentStore, "store"))
                : Observable.ignoreElements(),
            ),
          ),
          invoke(StreamableLike_stream, scheduler, options),
        );

        init(
          DelegatingStreamMixin<
            ReadonlyObjectMapLike<string, Function1<Optional<T>, T>>,
            never
          >(),
          instance,
          delegate,
        );

        instance.delegate = delegate;

        return instance;
      },
      props<TProperties<T>>({
        delegate: none,
        scheduleCleanup: none,
        store: none,
        subscriptions: none,
      }),
      {
        get [CollectionLike_count]() {
          unsafeCast<TProperties<T>>(this);
          return this.store.size;
        },

        get [AssociativeLike_keys](): EnumerableLike<string> {
          unsafeCast<TProperties<T>>(this);
          return pipe(this.store, ReadonlyMap.keys());
        },

        [Symbol.iterator](): Iterator<ObservableLike<T>> {
          unsafeCast<TProperties<T>>(this);
          return pipe(this.subscriptions, ReadonlyMap.values())[
            Symbol.iterator
          ]() as Iterator<ObservableLike<T>>;
        },

        [EnumerableLike_enumerate](): EnumeratorLike<ObservableLike<T>> {
          return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
        },

        [KeyedLike_get](
          this: TProperties<T> & DisposableLike,
          key: string,
        ): ObservableLike<T> {
          const { scheduleCleanup, store, subscriptions, delegate } = this;

          return (
            subscriptions.get(key) ??
            (() => {
              const publisher = Subject.createRefCounted<T>({
                replay: 1,
              });
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
    ): DeferredObservableLike<ReadonlyObjectMapLike<string, Optional<T>>>;
    store(
      updates: ReadonlyObjectMapLike<string, T>,
    ): DeferredObservableLike<void>;
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
