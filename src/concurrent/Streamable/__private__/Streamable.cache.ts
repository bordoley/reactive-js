import {
  MAX_SAFE_INTEGER,
  Map,
  Map_delete,
  Map_get,
  Map_set,
  Map_size,
  Set_delete,
  Set_has,
  Set_size,
} from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { ReadonlyObjectMapCollection } from "../../../collections/ReadonlyObjectMap.js";
import { ReadonlyObjectMapLike, keySet } from "../../../collections.js";
import {
  CacheLike,
  CacheLike_get,
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DeferredObservableLike,
  ObservableLike,
  SchedulerLike,
  SchedulerLike_schedule,
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
  SubjectLike,
} from "../../../concurrent.js";
import { EventListenerLike_notify } from "../../../events.js";
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
  newInstance,
  none,
  pipe,
  tuple,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Queue from "../../../utils/Queue.js";
import {
  BackpressureStrategy,
  DisposableLike,
  DisposableLike_isDisposed,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../../../utils.js";
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

const cacheStream: <T>(
  scheduler: SchedulerLike,
  options: Optional<{
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: BackpressureStrategy;
  }>,
  capacity: number,
  cleanupScheduler: SchedulerLike,
  persistentStore: Optional<ReactiveCachePersistentStorageLike<T>>,
) => CacheLike<T> = /*@__PURE__*/ (<T>() => {
  const CacheStream_delegate = Symbol("CacheStream_delegate");
  const CacheStream_scheduleCleanup = Symbol("CacheStream_scheduleCleanup");
  const CacheStream_store = Symbol("CacheStream_store");
  const CacheStream_subscriptions = Symbol("CacheStream_subscriptions");

  type TProperties<T> = {
    [CacheStream_delegate]: StreamLike<
      ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
      never
    >;
    [CacheStream_scheduleCleanup]: SideEffect1<string>;
    [CacheStream_store]: Map<string, T>;
    [CacheStream_subscriptions]: Map<string, SubjectLike<Optional<T>>>;
  };

  return mixInstanceFactory(
    include(
      DelegatingStreamMixin<
        ReadonlyObjectMapLike<string, Function1<Optional<T>, T>>,
        never
      >(),
    ),
    function CacheStream(
      instance: TProperties<T> & Pick<CacheLike<T>, typeof CacheLike_get>,
      scheduler: SchedulerLike,
      options: Optional<{
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
      }>,
      capacity: number,
      cleanupScheduler: SchedulerLike,
      persistentStore: Optional<ReactiveCachePersistentStorageLike<T>>,
    ): CacheLike<T> {
      const store = newInstance<Map<string, T>>(Map);
      const subscriptions =
        newInstance<Map<string, SubjectLike<Optional<T>>>>(Map);
      const cleanupQueue = Queue.create<string>();

      const cleanupContinuation = (ctx: ContinuationContextLike) => {
        while (store[Map_size] > capacity) {
          const key = cleanupQueue[QueueLike_dequeue]();
          if (isNone(key)) {
            break;
          }

          if (!subscriptions[Set_has](key)) {
            store[Set_delete](key);
          }
          ctx[ContinuationContextLike_yield]();
        }
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
                      (_, k: string) =>
                        instance[CacheStream_store][Map_get](k) as T,
                    ),
                  ),
                ),
            ),
            isSome(persistentStore)
              ? Observable.concatMap(
                  next => {
                    const [updaters, values] = next;
                    const keys = pipe(
                      values,
                      ReadonlyObjectMap.keep<unknown, string>(isNone),
                      keySet<ReadonlyObjectMapCollection>(
                        ReadonlyObjectMap.keys,
                      ),
                    );

                    return keys[Set_size] > 0
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
                      : pipe(next, Observable.fromValue());
                  },
                  {
                    innerType: Observable.DeferredObservableWithSideEffectsType,
                  },
                )
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
                    (updater: Function1<Optional<T>, Optional<T>>, k: string) =>
                      // This could be the cached value or the value
                      // loaded from a persistent store.
                      updater(values[k]),
                  ),
                ),
            ),
            Observable.forEach(
              ReadonlyObjectMap.forEach((v: T, key: string) => {
                const oldValue = instance[CacheStream_store][Map_get](key);

                if (isNone(v)) {
                  instance[CacheStream_store][Map_delete](key);
                } else {
                  instance[CacheStream_store][Map_set](key, v);
                }

                const subject =
                  instance[CacheStream_subscriptions][Map_get](key);

                // We want to publish none, when the cache does not have the value
                // when initially subscribing to the key.
                const shouldPublish = isNone(v) || oldValue !== v;

                if (isSome(subject) && shouldPublish) {
                  subject[EventListenerLike_notify](v);
                  return;
                }

                instance[CacheStream_scheduleCleanup](key);
              }),
            ),
            isSome(persistentStore)
              ? Observable.concatMap(bindMethod(persistentStore, "store"), {
                  innerType: Observable.DeferredObservableWithSideEffectsType,
                })
              : Observable.ignoreElements(),
          ),
        ),
        invoke(StreamableLike_stream, scheduler, options),
      );

      let cleanupJob = Disposable.disposed;

      instance[CacheStream_delegate] = delegate;
      instance[CacheStream_store] = store;
      instance[CacheStream_subscriptions] = subscriptions;
      instance[CacheStream_scheduleCleanup] = (key: string) => {
        if (isNone(instance[CacheStream_store][Map_get](key))) {
          return;
        }

        cleanupQueue[QueueableLike_enqueue](key);

        if (!cleanupJob[DisposableLike_isDisposed]) {
          return;
        }

        cleanupJob =
          cleanupScheduler[SchedulerLike_schedule](cleanupContinuation);
      };

      init(
        DelegatingStreamMixin<
          ReadonlyObjectMapLike<string, Function1<Optional<T>, T>>,
          never
        >(),
        instance,
        delegate,
      );

      return instance;
    },
    props<TProperties<T>>({
      [CacheStream_delegate]: none,
      [CacheStream_scheduleCleanup]: none,
      [CacheStream_store]: none,
      [CacheStream_subscriptions]: none,
    }),
    {
      [CacheLike_get](
        this: TProperties<T> & DisposableLike,
        key: string,
      ): ObservableLike<T> {
        const {
          [CacheStream_scheduleCleanup]: scheduleCleanup,
          [CacheStream_store]: store,
          [CacheStream_subscriptions]: subscriptions,
          [CacheStream_delegate]: delegate,
        } = this;

        return (
          subscriptions[Map_get](key) ??
          (() => {
            const subject = Subject.create<T>({
              autoDispose: true,
              replay: 1,
            });
            subscriptions[Map_set](key, subject);

            pipe(
              subject,
              DisposableContainer.onDisposed(_ => {
                subscriptions[Map_delete](key);
                scheduleCleanup(key);
              }),
              Disposable.addToContainer(this),
            );

            const initialValue = store[Map_get](key);

            if (isSome(initialValue)) {
              subject[EventListenerLike_notify](initialValue);
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
  );
})();

const Streamable_cache = <T>(
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
): StreamableLike<
  ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
  never,
  CacheLike<T>
> => ({
  [StreamableLike_stream]: (scheduler, streamOptions) =>
    cacheStream(
      scheduler,
      streamOptions,
      options.capacity ?? MAX_SAFE_INTEGER,
      options.cleanupScheduler ?? scheduler,
      persistentStore,
    ),
});

export default Streamable_cache;
