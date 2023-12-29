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
import {
  DispatcherLike_complete,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  SubjectLike,
  SubjectLike_observerCount,
} from "../../../concurrent.js";
import {
  EventListenerLike_isErrorSafe,
  SinkLike_notify,
} from "../../../events.js";
import { error, isSome, newInstance, none, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  IndexedQueueLike,
  IndexedQueueLike_get,
  QueueableLike_count,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Subject from "../../Subject.js";

const Subject_create: Subject.Signature["create"] = /*@__PURE__*/ (<T>() => {
  const Subject_observers = Symbol("Subject_observers");
  const Subject_buffer = Symbol("Subject_observers");

  type TProperties = {
    readonly [Subject_observers]: Set<ObserverLike<T>>;
    readonly [Subject_buffer]: IndexedQueueLike<T>;
  };

  const createSubjectInstance = createInstanceFactory(
    mix(
      include(DisposableMixin),
      function Subject(
        instance: Pick<
          SubjectLike<T>,
          | typeof ObservableLike_observe
          | typeof ObservableLike_isDeferred
          | typeof ObservableLike_isPure
          | typeof ObservableLike_isRunnable
          | typeof SubjectLike_observerCount
          | typeof EventListenerLike_isErrorSafe
          | typeof SinkLike_notify
        > &
          Mutable<TProperties>,
        replay: number,
      ): SubjectLike<T> {
        init(DisposableMixin, instance);

        instance[Subject_observers] = newInstance<Set<ObserverLike>>(Set);
        instance[Subject_buffer] = IndexedQueue.create({
          capacity: replay,
          backpressureStrategy: "drop-oldest",
        });

        pipe(
          instance,
          Disposable.onDisposed(e => {
            for (const observer of instance[Subject_observers]) {
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
        [Subject_observers]: none,
        [Subject_buffer]: none,
      }),
      {
        [EventListenerLike_isErrorSafe]: true as const,
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isPure]: true as const,
        [ObservableLike_isRunnable]: false as const,

        get [SubjectLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return this[Subject_observers].size;
        },

        [SinkLike_notify](this: TProperties & SubjectLike<T>, next: T) {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          this[Subject_buffer][QueueableLike_enqueue](next);

          for (const observer of this[Subject_observers]) {
            try {
              observer[QueueableLike_enqueue](next);
            } catch (e) {
              observer[DisposableLike_dispose](error(e));
            }
          }
        },

        [ObservableLike_observe](
          this: TProperties & SubjectLike<T>,
          observer: ObserverLike<T>,
        ) {
          const { [Subject_observers]: observers } = this;

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
          const buffer = this[Subject_buffer];
          const count = buffer[QueueableLike_count];

          for (let i = 0; i < count; i++) {
            const next = buffer[IndexedQueueLike_get](i);
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
    return createSubjectInstance(replay);
  };
})();

export default Subject_create;
