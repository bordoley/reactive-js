import {
  Set,
  Set_add,
  Set_delete,
  Set_has,
  Set_size,
} from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import {
  DispatcherLike_complete,
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  SubjectLike,
} from "../concurrent.js";
import {
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
} from "../events.js";
import { error, isSome, newInstance, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import IndexedQueueMixin from "../utils/__mixins__/IndexedQueueMixin.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  IndexedQueueLike,
  IndexedQueueLike_get,
  QueueLike_count,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../utils.js";

export const create: <T>(options?: {
  readonly replay?: number;
  readonly autoDispose?: boolean;
}) => SubjectLike<T> = /*@__PURE__*/ (<T>() => {
  const Subject_autoDispose = Symbol("Subject_autoDispose");
  const Subject_observers = Symbol("Subject_observers");

  type TProperties = {
    readonly [Subject_autoDispose]: boolean;
    readonly [Subject_observers]: Set<ObserverLike<T>>;
  };

  return mixInstanceFactory(
    include(DisposableMixin, IndexedQueueMixin()),
    function Subject(
      instance: Pick<
        SubjectLike<T>,
        | typeof ObservableLike_observe
        | typeof ObservableLike_isDeferred
        | typeof ObservableLike_isMulticasted
        | typeof ObservableLike_isPure
        | typeof ObservableLike_isRunnable
        | typeof EventListenerLike_isErrorSafe
        | typeof EventListenerLike_notify
      > &
        Mutable<TProperties>,
      options?: {
        readonly replay?: number;
        readonly autoDispose?: boolean;
      },
    ): SubjectLike<T> {
      const replay = clampPositiveInteger(options?.replay ?? 0);

      init(DisposableMixin, instance);
      init(IndexedQueueMixin<T>(), instance, {
        [QueueableLike_backpressureStrategy]: DropOldestBackpressureStrategy,
        [QueueableLike_capacity]: replay,
      });

      instance[Subject_observers] = newInstance<Set<ObserverLike>>(Set);
      instance[Subject_autoDispose] = options?.autoDispose ?? false;

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
      [Subject_autoDispose]: false,
      [Subject_observers]: none,
    }),
    {
      [EventListenerLike_isErrorSafe]: true as const,
      [ObservableLike_isDeferred]: false as const,
      [ObservableLike_isMulticasted]: true as const,
      [ObservableLike_isPure]: true as const,
      [ObservableLike_isRunnable]: false as const,

      [EventListenerLike_notify](
        this: TProperties & SubjectLike<T> & IndexedQueueLike<T>,
        next: T,
      ) {
        if (this[DisposableLike_isDisposed]) {
          return;
        }

        this[QueueableLike_enqueue](next);

        for (const observer of this[Subject_observers]) {
          try {
            observer[QueueableLike_enqueue](next);
          } catch (e) {
            observer[DisposableLike_dispose](error(e));
          }
        }
      },

      [ObservableLike_observe](
        this: TProperties & SubjectLike<T> & IndexedQueueLike<T>,
        observer: ObserverLike<T>,
      ) {
        const observers = this[Subject_observers];

        if (isSome(this[DisposableLike_error])) {
          observer[DisposableLike_dispose](this[DisposableLike_error]);
        }

        if (observers[Set_has](observer)) {
          return;
        }

        observers[Set_add](observer);

        pipe(
          observer,
          Disposable.onDisposed(_ => {
            observers[Set_delete](observer);

            if (
              this[Subject_autoDispose] &&
              this[Subject_observers][Set_size] === 0
            ) {
              this[DisposableLike_dispose]();
            }
          }),
        );

        // The idea here is that an onSubscribe function may
        // call next from unscheduled sources such as event handlers.
        // So we marshall those events back to the scheduler.
        const count = this[QueueLike_count];

        for (let i = 0; i < count; i++) {
          const next = this[IndexedQueueLike_get](i);
          observer[QueueableLike_enqueue](next);
        }

        if (this[DisposableLike_isDisposed]) {
          observer[DispatcherLike_complete]();
        }
      },
    },
  );
})();
