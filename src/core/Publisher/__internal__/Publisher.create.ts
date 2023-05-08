import { IndexedQueueLike } from "../../../__internal__/core.js";
import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __Publisher_observers } from "../../../__internal__/symbols.js";
import {
  CollectionLike_count,
  DispatcherLike_complete,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_move,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  KeyedCollectionLike_get,
  MulticastObservableLike_buffer,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PublisherLike,
  PublisherLike_observerCount,
  QueueableLike_enqueue,
} from "../../../core.js";
import Disposable_mixin from "../../../core/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../core/Disposable/__internal__/Disposable.onDisposed.js";
import Iterable_enumerate from "../../../core/Iterable/__internal__/Iterable.enumerate.js";
import Queue_createIndexedQueue from "../../../core/Queue/__internal__/Queue.createIndexedQueue.js";
import {
  error,
  isSome,
  newInstance,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";

const Publisher_create: <T>(options?: {
  readonly replay?: number;
}) => PublisherLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [__Publisher_observers]: Set<ObserverLike<T>>;
    readonly [MulticastObservableLike_buffer]: IndexedQueueLike<T>;
  };

  const createPublisherInstance = createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function Publisher(
        instance: Pick<
          PublisherLike<T>,
          | typeof ObservableLike_observe
          | typeof ObservableLike_isDeferred
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
          | typeof PublisherLike_observerCount
          | typeof MulticastObservableLike_buffer
          | typeof EventListenerLike_isErrorSafe
          | typeof EventListenerLike_notify
        > &
          Mutable<TProperties>,
        replay: number,
      ): PublisherLike<T> {
        init(Disposable_mixin, instance);

        instance[__Publisher_observers] = newInstance<Set<ObserverLike>>(Set);
        instance[MulticastObservableLike_buffer] = Queue_createIndexedQueue(
          replay,
          "drop-oldest",
        );

        pipe(
          instance,
          Disposable_onDisposed(e => {
            const enumerator = pipe(
              instance[__Publisher_observers],
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
        [__Publisher_observers]: none,
        [MulticastObservableLike_buffer]: none,
      }),
      {
        [EventListenerLike_isErrorSafe]: true as const,
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        get [PublisherLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return this[__Publisher_observers].size;
        },

        [EventListenerLike_notify](
          this: TProperties & PublisherLike<T>,
          next: T,
        ) {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          this[MulticastObservableLike_buffer][QueueableLike_enqueue](next);

          for (const observer of this[__Publisher_observers]) {
            try {
              observer[QueueableLike_enqueue](next);
            } catch (e) {
              observer[DisposableLike_dispose](error(e));
            }
          }
        },

        [ObservableLike_observe](
          this: TProperties & PublisherLike<T>,
          observer: ObserverLike<T>,
        ) {
          if (!this[DisposableLike_isDisposed]) {
            const { [__Publisher_observers]: observers } = this;
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
          const buffer = this[MulticastObservableLike_buffer];
          const count = buffer[CollectionLike_count];

          try {
            for (let i = 0; i < count; i++) {
              const next = buffer[KeyedCollectionLike_get](i);
              observer[QueueableLike_enqueue](next);
            }
          } catch (e) {
            observer[DisposableLike_dispose](error(e));
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
