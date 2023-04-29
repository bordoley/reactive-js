import {
  Mixin1,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  __ObserverMixin_dispatchSubscription,
  __ObserverMixin_isCompleted,
  __ObserverMixin_queuePublisher,
} from "../../../__internal__/symbols.js";
import {
  IndexedQueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.js";
import {
  Optional,
  call,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  DispatcherLike_complete,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventEmitterLike_addEventListener,
  EventListenerLike,
  EventListenerLike_notify,
  EventPublisherLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Queue_indexedQueueMixin from "../../../util/Queue/__internal__/Queue.indexedQueueMixin.js";

type TObserverBaseMixin<T> = Omit<
  ObserverLike<T>,
  keyof DisposableLike | keyof SchedulerLike | typeof ObserverLike_notify
>;

const Observer_baseMixin: <T>() => Mixin1<
  TObserverBaseMixin<T>,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  }
> = /*@__PURE__*/ (<T>() => {
  const completeEvent: { type: "complete" } = { type: "complete" };
  const drainEvent: { type: "drain" } = { type: "drain" };
  const waitEvent: { type: "wait" } = { type: "wait" };

  type TProperties = {
    [__ObserverMixin_isCompleted]: boolean;
    [__ObserverMixin_dispatchSubscription]: DisposableLike;
    [__ObserverMixin_queuePublisher]: Optional<
      EventPublisherLike<{ type: "wait" | "drain" | "complete" }>
    >;
  };

  const scheduleDrainQueue = (
    observer: TProperties & ObserverLike<T> & IndexedQueueLike<T>,
  ) => {
    if (
      observer[__ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]
    ) {
      const continuation = (scheduler: SchedulerLike) => {
        unsafeCast<TProperties & ObserverLike<T>>(observer);

        while (observer[CollectionLike_count] > 0) {
          const next = observer[QueueLike_dequeue]() as T;
          observer[ObserverLike_notify](next);

          if (observer[CollectionLike_count] > 0) {
            scheduler[SchedulerLike_yield]();
          }
        }

        if (observer[__ObserverMixin_isCompleted]) {
          observer[DisposableLike_dispose]();
        } else {
          observer[__ObserverMixin_queuePublisher]?.[EventListenerLike_notify](
            drainEvent,
          );
        }
      };

      observer[__ObserverMixin_dispatchSubscription] = pipe(
        observer[SchedulerLike_schedule](continuation),
        Disposable_addTo(observer),
      );
    }
  };

  const indexedQueueProtoype = getPrototype(Queue_indexedQueueMixin<T>());

  return returns(
    mix(
      include(Queue_indexedQueueMixin()),
      function ObserverMixin(
        instance: Pick<
          ObserverLike,
          | typeof DispatcherLike_complete
          | typeof EventEmitterLike_addEventListener
        >,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): TObserverBaseMixin<T> {
        init(
          // FIXME: Change this to take a config
          Queue_indexedQueueMixin<T>(),
          instance,
          config[BufferLike_capacity],
          config[QueueableLike_backpressureStrategy],
        );

        return instance;
      },
      props<TProperties>({
        [__ObserverMixin_isCompleted]: false,
        [__ObserverMixin_dispatchSubscription]: Disposable_disposed,
        [__ObserverMixin_queuePublisher]: none,
      }),
      {
        [QueueableLike_enqueue](
          this: TProperties & ObserverLike<T> & IndexedQueueLike<T>,
          next: T,
        ): boolean {
          if (
            !this[__ObserverMixin_isCompleted] &&
            !this[DisposableLike_isDisposed]
          ) {
            const result = call(
              indexedQueueProtoype[QueueableLike_enqueue],
              this,
              next,
            );

            if (!result) {
              this[__ObserverMixin_queuePublisher]?.[EventListenerLike_notify](
                waitEvent,
              );
            }

            scheduleDrainQueue(this);
            return result;
          }
          return true;
        },

        [DispatcherLike_complete](
          this: TProperties & ObserverLike<T> & IndexedQueueLike<T>,
        ) {
          const isCompleted = this[__ObserverMixin_isCompleted];
          this[__ObserverMixin_isCompleted] = true;

          if (!isCompleted) {
            this[__ObserverMixin_queuePublisher]?.[EventListenerLike_notify](
              completeEvent,
            );
          }

          if (
            this[__ObserverMixin_dispatchSubscription][
              DisposableLike_isDisposed
            ] &&
            !isCompleted
          ) {
            this[DisposableLike_dispose]();
          }
        },
        [EventEmitterLike_addEventListener](
          this: TProperties & ObserverLike,
          listener: EventListenerLike<{ type: "wait" | "drain" | "complete" }>,
        ): void {
          const publisher =
            this[__ObserverMixin_queuePublisher] ??
            (() => {
              const publisher = EventPublisher_create<{
                type: "wait" | "drain" | "complete";
              }>();
              this[__ObserverMixin_queuePublisher] = publisher;

              return pipe(publisher, Disposable_addTo(this));
            })();

          publisher[EventEmitterLike_addEventListener](listener);
        },
      },
    ),
  );
})();

export default Observer_baseMixin;
