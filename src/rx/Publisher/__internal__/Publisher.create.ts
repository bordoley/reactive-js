import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DisposableLike_dispose,
  EnumeratorLike_current,
  EnumeratorLike_move,
  Publisher_observers,
  BufferLike_capacity,
} from "../../../__internal__/symbols.js";
import { QueueLike } from "../../../__internal__/util.internal.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import {
  isSome,
  newInstance,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  DispatcherLike_complete,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PublisherLike,
  PublisherLike_publish,
} from "../../../rx.js";
import {
  CollectionLike_count,
  DisposableLike_isDisposed,
  KeyedCollectionLike_get,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";

const Publisher_create: <T>(options?: {
  readonly replay?: number;
}) => PublisherLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [Publisher_observers]: Set<ObserverLike<T>>;
  };

  const createPublisherInstance = createInstanceFactory(
    mix(
      include(Disposable_mixin, IndexedQueue_fifoQueueMixin<T>()),
      function Publisher(
        instance: Pick<
          PublisherLike<T>,
          | typeof ObservableLike_observe
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
          | typeof PublisherLike_publish
        > &
          Mutable<TProperties>,
        replay: number,
      ): PublisherLike<T> {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin<T>(), instance, replay, "drop-oldest");

        instance[Publisher_observers] = newInstance<Set<ObserverLike>>(Set);

        pipe(
          instance,
          Disposable_onDisposed(e => {
            const enumerator = pipe(
              instance[Publisher_observers],
              Iterable_enumerate(),
            );

            while (enumerator[EnumeratorLike_move]()) {
              const observer = enumerator[EnumeratorLike_current];

              if (isSome(e)) {
                observer[DisposableLike_dispose](e);
              } else {
                observer[DispatcherLike_complete]();
              }
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [Publisher_observers]: none,
      }),
      {
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return this[Publisher_observers].size;
        },

        get [MulticastObservableLike_replay]() {
          unsafeCast<QueueLike<T>>(this);
          return this[BufferLike_capacity];
        },

        [PublisherLike_publish](
          this: TProperties & PublisherLike<T> & QueueLike<T>,
          next: T,
        ) {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          this[QueueableLike_enqueue](next);

          for (const observer of this[Publisher_observers]) {
            observer[QueueableLike_enqueue](next);
          }
        },

        [ObservableLike_observe](
          this: TProperties & PublisherLike<T>,
          observer: ObserverLike<T>,
        ) {
          if (!this[DisposableLike_isDisposed]) {
            const { [Publisher_observers]: observers } = this;
            observers.add(observer);

            pipe(
              observer,
              Disposable_onDisposed(_ => {
                observers.delete(observer);
              }),
            );
          }

          // The idea here is that an onSubscribe function may
          // call next from unscheduled sources such as event handlers.
          // So we marshall those events back to the scheduler.
          const count = this[CollectionLike_count];
          for (let i = 0; i < count; i++) {
            const next = this[KeyedCollectionLike_get](i);
            observer[QueueableLike_enqueue](next);
          }
        },
      },
    ),
  );

  return (options?: { readonly replay?: number }): PublisherLike<T> => {
    const replay = clampPositiveInteger(options?.replay ?? 0);
    return createPublisherInstance(replay);
  };
})();

export default Publisher_create;
