import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { QueueLike_dequeue } from "../../../__internal__/util.internal.js";
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
} from "../../../functions.js";
import { ReadonlyRecordLike } from "../../../keyedcontainers.js";
import * as ReadonlyRecord from "../../../keyedcontainers/ReadonlyRecord.js";
import ReadonlyRecord_union from "../../../keyedcontainers/ReadonlyRecord/__internal__/ReadonlyRecord.union.js";
import {
  DispatcherLike,
  ObservableLike,
  PublisherLike,
  PublisherLike_publish,
} from "../../../rx.js";
import * as Observable from "../../../rx/Observable.js";
import * as Publisher from "../../../rx/Publisher.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  SchedulerLike,
  SchedulerLike_schedule,
} from "../../../scheduling.js";
import {
  CacheLike,
  CacheStreamLike,
  CacheStreamLike_get,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../../../streaming.js";
import Stream_delegatingMixin from "../../../streaming/Stream/__internal__/Stream.delegatingMixin.js";
import {
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import * as Disposable from "../../../util/Disposable.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Streamable_create from "./Streamable.create.js";

interface ReactiveCachePersistentStorageLike<T> {
  load(
    keys: ReadonlySet<string>,
  ): ObservableLike<ReadonlyRecordLike<string, Optional<T>>>;
  store(updates: ReadonlyRecordLike<string, Optional<T>>): ObservableLike<void>;
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
) => CacheStreamLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties<T> = {
    scheduleCleanup: SideEffect1<string>;
    store: Map<string, T>;
    subscriptions: Map<string, PublisherLike<Optional<T>>>;
  };

  return createInstanceFactory(
    mix(
      include(
        Stream_delegatingMixin<
          ReadonlyRecordLike<string, Function1<Optional<T>, T>>,
          never
        >(),
      ),
      function CacheStream(
        instance: TProperties<T> &
          Pick<CacheStreamLike<T>, typeof CacheStreamLike_get>,
        scheduler: SchedulerLike,
        options: Optional<{
          readonly replay?: number;
          readonly capacity?: number;
          readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }>,
        capacity: number,
        cleanupScheduler: SchedulerLike,
        persistentStore: Optional<ReactiveCachePersistentStorageLike<T>>,
      ): CacheStreamLike<T> {
        instance.store = new Map();
        instance.subscriptions = new Map();

        const cleanupQueue = IndexedQueue_createFifoQueue<string>(
          MAX_SAFE_INTEGER,
          "overflow",
        );

        const cleanupContinuation = (ctx: ContinuationContextLike) => {
          const { store, subscriptions } = instance;

          while (store.size > capacity) {
            const key = cleanupQueue[QueueLike_dequeue]();
            if (isNone(key)) {
              break;
            }

            if (!subscriptions.has(key)) {
              store.delete(key);
            }
            ctx[ContinuationContextLike_yield]();
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
            ReadonlyRecordLike<string, Function1<Optional<T>, Optional<T>>>,
            never
          >(
            compose(
              Observable.map(
                (
                  updaters: ReadonlyRecordLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                ): [
                  ReadonlyRecordLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                  ReadonlyRecordLike<string, Optional<T>>,
                ] => [
                  updaters,
                  pipe(
                    updaters,
                    ReadonlyRecord.mapWithKey<unknown, T, string>(
                      (_, k: string) => instance.store.get(k) as T,
                    ),
                  ),
                ],
              ),
              isSome(persistentStore)
                ? Observable.concatMap(
                    (
                      next: [
                        ReadonlyRecordLike<
                          string,
                          Function1<Optional<T>, Optional<T>>
                        >,
                        ReadonlyRecordLike<string, Optional<T>>,
                      ],
                    ) => {
                      const [updaters, values] = next;
                      const keys = pipe(
                        values,
                        ReadonlyRecord.keep<unknown, string>(isNone),
                        ReadonlyRecord.keySet<string>(),
                      );

                      return keys.size > 0
                        ? pipe(
                            persistentStore.load(keys),
                            Observable.map(persistedValues => [
                              updaters,
                              ReadonlyRecord_union(values, persistedValues),
                            ]),
                          )
                        : pipe(next, Observable.fromOptional());
                    },
                  )
                : identity,
              Observable.map(
                ([updaters, values]: [
                  ReadonlyRecordLike<
                    string,
                    Function1<Optional<T>, Optional<T>>
                  >,
                  ReadonlyRecordLike<string, Optional<T>>,
                ]) =>
                  pipe(
                    updaters,
                    ReadonlyRecord.mapWithKey(
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
                ReadonlyRecord.forEachWithKey((v: T, key: string) => {
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
                    observable[PublisherLike_publish](v);
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
            ReadonlyRecordLike<string, Function1<Optional<T>, T>>,
            never
          >(),
          instance,
          delegate,
        );

        return instance;
      },
      props<TProperties<T>>({
        scheduleCleanup: none,
        store: none,
        subscriptions: none,
      }),
      {
        [CacheStreamLike_get](
          this: TProperties<T> &
            CacheStreamLike<T> &
            DelegatingLike<
              DispatcherLike<
                Record<string, Function1<Optional<T>, Optional<T>>>
              >
            >,
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
              const subject = Publisher.createRefCounted<T>({ replay: 1 });
              subscriptions.set(key, subject);

              pipe(
                subject,
                Disposable.onDisposed(_ => {
                  subscriptions.delete(key);
                  scheduleCleanup(key);
                }),
                Disposable.addToIgnoringChildErrors(this),
              );

              const initialValue = store.get(key);

              if (isSome(initialValue)) {
                subject[PublisherLike_publish](initialValue);
              } else {
                // Try to load the value from the persistence store
                delegate[QueueableLike_enqueue]({
                  [key]: identity,
                });
              }

              return subject;
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
    ): ObservableLike<ReadonlyRecordLike<string, Optional<T>>>;
    store(updates: ReadonlyRecordLike<string, T>): ObservableLike<void>;
  }>,
  options: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
  } = {},
): CacheLike<T> => ({
  [StreamableLike_isEnumerable]: false,
  [StreamableLike_isInteractive]: false,
  [StreamableLike_isRunnable]: false,
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
