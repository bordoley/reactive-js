import {
  MAX_SAFE_INTEGER,
  Map_delete,
  Map_get,
  Map_set,
  Map_size,
  Set_delete,
  Set_has,
  Set_size,
} from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import * as Collection from "../collections/Collection.js";
import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import { ReadonlyObjectMapCollection } from "../collections/ReadonlyObjectMap.js";
import * as ReadonlyObjectMap from "../collections/ReadonlyObjectMap.js";
import { ReadonlyObjectMapLike } from "../collections.js";
import * as Computation from "../computations/Computation.js";
import {
  DeferredComputationWithSideEffects,
  DeferredComputationWithSideEffectsLike,
  DeferredObservableLike,
  ObservableLike,
  SubjectLike,
} from "../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  Tuple2,
  Updater,
  alwaysNone,
  bindMethod,
  identity,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  returns,
  tuple,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Queue from "../utils/Queue.js";
import DelegatingQueueableMixin from "../utils/__mixins__/DelegatingQueueableMixin.js";
import {
  BackpressureStrategy,
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableContainerLike,
  DisposableLike,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  QueueLike_dequeue,
  QueueableLike,
  SchedulerLike,
  SchedulerLike_schedule,
} from "../utils.js";
import * as Observable from "./Observable.js";
import * as Subject from "./Subject.js";
import * as QueueableObservable from "./__internal__/QueueableObservable.js";

export const CacheLike_get = Symbol("CacheLike_get");

/**
 * @noInheritDoc
 */
export interface CacheLike<T>
  extends QueueableLike<ReadonlyObjectMapLike<string, Updater<Optional<T>>>>,
    DisposableContainerLike {
  [CacheLike_get](index: string): ObservableLike<T>;
}

interface CacheModule {
  create<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly cleanupScheduler?: SchedulerLike;
      readonly maxEntries?: number;
      readonly persistentStore?: {
        load(
          keys: ReadonlySet<string>,
        ): DeferredObservableLike<
          Readonly<ReadonlyObjectMapLike<string, Optional<T>>>
        >;
        store(
          updates: Readonly<ReadonlyObjectMapLike<string, T>>,
        ): DeferredObservableLike<void>;
      };
    },
  ): CacheLike<T> & DisposableLike;
  get<T>(cache: CacheLike<T>, key: string): ObservableLike<T>;
  remove<T>(cache: CacheLike<T>, key: string): void;
  removeMany<T>(cache: CacheLike<T>, keys: ReadonlyArray<string>): void;
  set<T>(cache: CacheLike<T>, key: string, v: Optional<T>): void;
  setMany<T>(
    cache: CacheLike<T>,
    keyValues: ReadonlyObjectMapLike<string, Optional<T>>,
  ): void;
  update<T>(
    cache: CacheLike<T>,
    key: string,
    updater: Updater<Optional<T>>,
  ): void;
  updateMany<T>(
    cache: CacheLike<T>,
    keyValues: ReadonlyObjectMapLike<string, Updater<Optional<T>>>,
  ): void;
}

export type Signature = CacheModule;

export const create: CacheModule["create"] = /*@__PURE__*/ (<T>() => {
  const CacheStream_scheduleCleanup = Symbol("CacheStream_scheduleCleanup");
  const CacheStream_store = Symbol("CacheStream_store");
  const CacheStream_subscriptions = Symbol("CacheStream_subscriptions");

  const ObservableModule = {
    concatAll: Observable.concatAll,
    keep: Observable.keep,
    map: Observable.map,
  };

  type TProperties<T> = {
    [CacheStream_scheduleCleanup]: SideEffect1<string>;
    [CacheStream_store]: Map<string, T>;
    [CacheStream_subscriptions]: Map<string, SubjectLike<Optional<T>>>;
  };

  return mixInstanceFactory(
    include(
      DelegatingQueueableMixin<
        ReadonlyObjectMapLike<
          string,
          ReadonlyObjectMapLike<string, Updater<Optional<T>>>
        >
      >(),
    ),
    function Cache(
      this: TProperties<T> & Pick<CacheLike<T>, typeof CacheLike_get>,
      scheduler: SchedulerLike,
      options: Optional<{
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly cleanupScheduler?: SchedulerLike;
        readonly maxEntries?: number;
        readonly persistentStore?: {
          load(
            keys: ReadonlySet<string>,
          ): DeferredObservableLike<
            Readonly<ReadonlyObjectMapLike<string, Optional<T>>>
          >;
          store(
            updates: Readonly<ReadonlyObjectMapLike<string, T>>,
          ): DeferredObservableLike<void>;
        };
      }>,
    ): CacheLike<T> & DisposableLike {
      const {
        maxEntries = MAX_SAFE_INTEGER,
        cleanupScheduler = scheduler,
        persistentStore,
      } = options ?? {};

      const queue =
        QueueableObservable.create<
          ReadonlyObjectMapLike<string, Updater<Optional<T>>>
        >(options);

      const store = newInstance<Map<string, T>>(Map);
      const subscriptions =
        newInstance<Map<string, SubjectLike<Optional<T>>>>(Map);
      const cleanupQueue = pipe(
        Queue.create<string>(),
        Disposable.addTo(queue),
      );

      const cleanupContinuation = (ctx: ContinuationContextLike) => {
        while (store[Map_size] > maxEntries) {
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

      pipe(
        queue,
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
                  (_, k: string) => this[CacheStream_store][Map_get](k) as T,
                ),
              ),
            ),
        ),
        isSome(persistentStore)
          ? Computation.concatMap(ObservableModule)<
              Tuple2<
                ReadonlyObjectMapLike<
                  string,
                  Function1<Optional<T>, Optional<T>>
                >,
                ReadonlyObjectMapLike<string, T>
              >,
              Tuple2<
                ReadonlyObjectMapLike<
                  string,
                  Function1<Optional<T>, Optional<T>>
                >,
                ReadonlyObjectMapLike<string, T>
              >,
              DeferredComputationWithSideEffectsLike
            >(
              next => {
                const [updaters, values] = next;
                const keys = pipe(
                  values,
                  ReadonlyObjectMap.keep<unknown, string>(isNone),
                  Collection.keySet<ReadonlyObjectMapCollection>(
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
                innerType: DeferredComputationWithSideEffects,
              },
            )
          : (identity as Function1<
              DeferredObservableLike,
              DeferredObservableLike
            >),
        Observable.map(
          ([updaters, values]: Tuple2<
            ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>,
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
            const oldValue = this[CacheStream_store][Map_get](key);

            if (isNone(v)) {
              this[CacheStream_store][Map_delete](key);
            } else {
              this[CacheStream_store][Map_set](key, v);
            }

            const subject = this[CacheStream_subscriptions][Map_get](key);

            // We want to publish none, when the cache does not have the value
            // when initially subscribing to the key.
            const shouldPublish = isNone(v) || oldValue !== v;

            if (isSome(subject) && shouldPublish) {
              subject[EventListenerLike_notify](v);
              return;
            }

            this[CacheStream_scheduleCleanup](key);
          }),
        ),
        isSome(persistentStore)
          ? Computation.concatMap(ObservableModule)(
              bindMethod(persistentStore, "store"),
              {
                innerType: DeferredComputationWithSideEffects,
              },
            )
          : Computation.ignoreElements(ObservableModule)(),
        Observable.subscribe(scheduler),
        Disposable.addTo(queue),
      );

      let cleanupJob = Disposable.disposed;

      this[CacheStream_store] = store;
      this[CacheStream_subscriptions] = subscriptions;
      this[CacheStream_scheduleCleanup] = (key: string) => {
        if (isNone(this[CacheStream_store][Map_get](key))) {
          return;
        }

        cleanupQueue[EventListenerLike_notify](key);

        if (!cleanupJob[DisposableLike_isDisposed]) {
          return;
        }

        cleanupJob =
          cleanupScheduler[SchedulerLike_schedule](cleanupContinuation);
      };

      init(
        DelegatingQueueableMixin<
          ReadonlyObjectMapLike<string, Function1<Optional<T>, T>>
        >(),
        this,
        queue,
      );

      return this;
    },
    props<TProperties<T>>({
      [CacheStream_scheduleCleanup]: none,
      [CacheStream_store]: none,
      [CacheStream_subscriptions]: none,
    }),
    {
      [CacheLike_get](
        this: TProperties<T> & CacheLike<T>,
        key: string,
      ): ObservableLike<T> {
        const {
          [CacheStream_scheduleCleanup]: scheduleCleanup,
          [CacheStream_store]: store,
          [CacheStream_subscriptions]: subscriptions,
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
              this[EventListenerLike_notify]({
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

export const get = <T>(cache: CacheLike<T>, key: string): ObservableLike<T> =>
  cache[CacheLike_get](key);

export const remove = <T>(cache: CacheLike<T>, key: string) =>
  updateMany(cache, { [key]: alwaysNone });

export const removeMany = <T>(
  cache: CacheLike<T>,
  keys: ReadonlyArray<string>,
) =>
  updateMany(
    cache,
    pipe(
      keys,
      ReadonlyArray.map<string, Tuple2<string, Updater<any>>>(key => [
        key,
        alwaysNone,
      ]),
      ReadonlyObjectMap.fromEntries(),
    ),
  );

export const set = <T>(cache: CacheLike<T>, key: string, v: Optional<T>) =>
  update(cache, key, returns(v));

export const setMany = <T>(
  cache: CacheLike<T>,
  keyValues: ReadonlyObjectMapLike<string, Optional<T>>,
) =>
  updateMany(
    cache,
    pipe(
      keyValues,
      ReadonlyObjectMap.map(v => returns(v)),
    ),
  );

export const update = <T>(
  cache: CacheLike<T>,
  key: string,
  updater: Updater<Optional<T>>,
) => updateMany(cache, { [key]: updater });

export const updateMany = <T>(
  cache: CacheLike<T>,
  keyValues: ReadonlyObjectMapLike<string, Updater<Optional<T>>>,
) => cache[EventListenerLike_notify](keyValues);
