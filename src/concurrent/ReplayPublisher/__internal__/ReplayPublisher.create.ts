import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import { CollectionLike_count, KeyedLike_get } from "../../../collections.js";
import {
  DispatcherLike_complete,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ReplayObservableLike_buffer,
  ReplayPublisherLike,
  ReplayPublisherLike_observerCount,
} from "../../../concurrent.js";
import { EventListenerLike_isErrorSafe } from "../../../events.js";
import { error, isSome, newInstance, none, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  IndexedQueueLike,
  QueueableLike_enqueue,
  SinkLike_notify,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Queue_createIndexedQueue from "../../../utils/Queue/__internal__/Queue.createIndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as ReplayPublisher from "../../ReplayPublisher.js";

const ReplayPublisher_create: ReplayPublisher.Signature["create"] =
  /*@__PURE__*/ (<T>() => {
    const ReplayPublisher_observers = Symbol("ReplayPublisher_observers");

    type TProperties = {
      readonly [ReplayPublisher_observers]: Set<ObserverLike<T>>;
      readonly [ReplayObservableLike_buffer]: IndexedQueueLike<T>;
    };

    const createReplayPublisherInstance = createInstanceFactory(
      mix(
        include(DisposableMixin),
        function ReplayPublisher(
          instance: Pick<
            ReplayPublisherLike<T>,
            | typeof ObservableLike_observe
            | typeof ObservableLike_isDeferred
            | typeof ObservableLike_isPure
            | typeof ObservableLike_isRunnable
            | typeof ReplayPublisherLike_observerCount
            | typeof ReplayObservableLike_buffer
            | typeof EventListenerLike_isErrorSafe
            | typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          replay: number,
        ): ReplayPublisherLike<T> {
          init(DisposableMixin, instance);

          instance[ReplayPublisher_observers] =
            newInstance<Set<ObserverLike>>(Set);
          instance[ReplayObservableLike_buffer] = Queue_createIndexedQueue(
            replay,
            "drop-oldest",
          );

          pipe(
            instance,
            Disposable.onDisposed(e => {
              for (const observer of instance[ReplayPublisher_observers]) {
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
          [ReplayPublisher_observers]: none,
          [ReplayObservableLike_buffer]: none,
        }),
        {
          [EventListenerLike_isErrorSafe]: true as const,
          [ObservableLike_isDeferred]: false as const,
          [ObservableLike_isPure]: true as const,
          [ObservableLike_isRunnable]: false as const,

          get [ReplayPublisherLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return this[ReplayPublisher_observers].size;
          },

          [SinkLike_notify](
            this: TProperties & ReplayPublisherLike<T>,
            next: T,
          ) {
            if (this[DisposableLike_isDisposed]) {
              return;
            }

            this[ReplayObservableLike_buffer][QueueableLike_enqueue](next);

            for (const observer of this[ReplayPublisher_observers]) {
              try {
                observer[QueueableLike_enqueue](next);
              } catch (e) {
                observer[DisposableLike_dispose](error(e));
              }
            }
          },

          [ObservableLike_observe](
            this: TProperties & ReplayPublisherLike<T>,
            observer: ObserverLike<T>,
          ) {
            const { [ReplayPublisher_observers]: observers } = this;

            if (isSome(this[DisposableLike_error])) {
              observer[DisposableLike_dispose](this[DisposableLike_error]);
            }

            if (observers.has(observer)) {
              return;
            }

            observers.add(observer);

            pipe(
              observer,
              Disposable.onDisposed(_ => {
                observers.delete(observer);
              }),
            );

            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            const buffer = this[ReplayObservableLike_buffer];
            const count = buffer[CollectionLike_count];

            for (let i = 0; i < count; i++) {
              const next = buffer[KeyedLike_get](i);
              observer[QueueableLike_enqueue](next);
            }

            if (this[DisposableLike_isDisposed]) {
              observer[DispatcherLike_complete]();
            }
          },
        },
      ),
    );

    return (options?: { readonly replay?: number }) => {
      const replay = clampPositiveInteger(options?.replay ?? 0);
      return createReplayPublisherInstance(replay);
    };
  })();

export default ReplayPublisher_create;
