import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Publisher_observers } from "../../../__internal__/symbols.js";
import { IndexedQueueLike } from "../../../__internal__/util.internal.js";
import {
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../containers.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import {
  error,
  isSome,
  newInstance,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  DispatcherLike_complete,
  HotObservableLike_observerCount,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PublisherLike,
  ReplayableLike_buffer,
} from "../../../rx.js";
import {
  CollectionLike_count,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  KeyedCollectionLike_get,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";

const Publisher_create: <T>(options?: {
  readonly replay?: number;
}) => PublisherLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [Publisher_observers]: Set<ObserverLike<T>>;
    readonly [ReplayableLike_buffer]: IndexedQueueLike<T>;
  };

  const createPublisherInstance = createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function Publisher(
        instance: Pick<
          PublisherLike<T>,
          | typeof ObservableLike_observe
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
          | typeof HotObservableLike_observerCount
          | typeof ReplayableLike_buffer
          | typeof EventListenerLike_notify
        > &
          Mutable<TProperties>,
        replay: number,
      ): PublisherLike<T> {
        init(Disposable_mixin, instance);

        instance[Publisher_observers] = newInstance<Set<ObserverLike>>(Set);
        instance[ReplayableLike_buffer] = IndexedQueue_createFifoQueue(
          replay,
          "drop-oldest",
        );

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
        [ReplayableLike_buffer]: none,
      }),
      {
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        get [HotObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return this[Publisher_observers].size;
        },

        [EventListenerLike_notify](
          this: TProperties & PublisherLike<T>,
          next: T,
        ) {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          this[ReplayableLike_buffer][QueueableLike_enqueue](next);

          for (const observer of this[Publisher_observers]) {
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
          const buffer = this[ReplayableLike_buffer];
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
