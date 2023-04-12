import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../../__internal__/util.js";
import {
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../containers.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import {
  error,
  newInstance,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  CollectionLike_count,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike_addListener,
  EventSourceLike_listenerCount,
  KeyedCollectionLike_get,
  QueueableLike_enqueue,
  ReplayableLike_buffer,
} from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";

const EventPublisher_create: <T>(options?: {
  readonly replay?: number;
}) => EventPublisherLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly l: Set<EventListenerLike<T>>;
    readonly [ReplayableLike_buffer]: IndexedQueueLike<T>;
  };

  const createPublisherInstance = createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function EventPublisher(
        instance: Pick<
          EventPublisherLike<T>,
          | typeof EventSourceLike_addListener
          | typeof EventListenerLike_notify
          | typeof EventSourceLike_listenerCount
        > &
          Mutable<TProperties>,
        replay: number,
      ): EventPublisherLike<T> {
        init(Disposable_mixin, instance);

        instance.l = newInstance<Set<EventListenerLike>>(Set);
        instance[ReplayableLike_buffer] = Queue_createIndexedQueue(
          replay,
          "drop-oldest",
        );

        pipe(
          instance,
          Disposable_onDisposed(e => {
            const enumerator = pipe(instance.l, Iterable_enumerate());

            while (enumerator[EnumeratorLike_move]()) {
              const listener = enumerator[EnumeratorLike_current];
              listener[DisposableLike_dispose](e);
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        l: none,
        [ReplayableLike_buffer]: none,
      }),
      {
        get [EventSourceLike_listenerCount]() {
          unsafeCast<TProperties>(this);
          return this.l.size;
        },

        [EventListenerLike_notify](
          this: TProperties & EventPublisherLike<T>,
          next: T,
        ) {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          this[ReplayableLike_buffer][QueueableLike_enqueue](next);

          for (const listener of this.l) {
            try {
              listener[EventListenerLike_notify](next);
            } catch (e) {
              listener[DisposableLike_dispose](error(e));
            }
          }
        },

        [EventSourceLike_addListener](
          this: TProperties & EventPublisherLike<T>,
          listener: EventListenerLike<T>,
        ) {
          if (!this[DisposableLike_isDisposed]) {
            const { l: listeners } = this;
            listeners.add(listener);

            pipe(
              listener,
              Disposable_onDisposed(_ => {
                listeners.delete(listener);
              }),
            );
          }

          const buffer = this[ReplayableLike_buffer];
          const count = buffer[CollectionLike_count];
          try {
            for (let i = 0; i < count; i++) {
              const next = buffer[KeyedCollectionLike_get](i);
              listener[EventListenerLike_notify](next);
            }
          } catch (e) {
            listener[DisposableLike_dispose](error(e));
          }
        },
      },
    ),
  );

  return (options?: { readonly replay?: number }): EventPublisherLike<T> => {
    const replay = clampPositiveInteger(options?.replay ?? 0);
    return createPublisherInstance(replay);
  };
})();

export default EventPublisher_create;
