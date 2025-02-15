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
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike_inContinuation,
  SubjectLike,
} from "../concurrent.js";
import { EventListenerLike_notify } from "../events.js";
import { error, isSome, newInstance, none, pipe } from "../functions.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../utils/__mixins__/QueueMixin.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  QueueLike,
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
    include(DisposableMixin, QueueMixin()),
    function Subject(
      instance: Pick<
        SubjectLike<T>,
        | typeof ObservableLike_observe
        | typeof ObservableLike_isDeferred
        | typeof ObservableLike_isPure
        | typeof ObservableLike_isRunnable
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
      init(QueueMixin<T>(), instance, {
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity: replay,
      });

      instance[Subject_observers] = newInstance<Set<ObserverLike>>(Set);
      instance[Subject_autoDispose] = options?.autoDispose ?? false;

      pipe(
        instance,
        DisposableContainer.onDisposed(e => {
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
      [ObservableLike_isDeferred]: false as const,
      [ObservableLike_isPure]: true as const,
      [ObservableLike_isRunnable]: false as const,

      [EventListenerLike_notify](
        this: TProperties & SubjectLike<T> & QueueLike<T>,
        next: T,
      ) {
        if (this[DisposableLike_isDisposed]) {
          return;
        }

        this[QueueableLike_enqueue](next);

        for (const observer of this[Subject_observers]) {
          try {
            if (observer[SchedulerLike_inContinuation]) {
              observer[ObserverLike_notify](next);
            } else {
              observer[QueueableLike_enqueue](next);
            }
          } catch (e) {
            observer[DisposableLike_dispose](error(e));
          }
        }
      },

      [ObservableLike_observe](
        this: TProperties & SubjectLike<T> & QueueLike<T>,
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
          DisposableContainer.onDisposed(_ => {
            observers[Set_delete](observer);

            if (
              this[Subject_autoDispose] &&
              this[Subject_observers][Set_size] === 0
            ) {
              this[DisposableLike_dispose]();
            }
          }),
        );

        for (const next of this) {
          observer[QueueableLike_enqueue](next);
        }

        if (this[DisposableLike_isDisposed]) {
          observer[DispatcherLike_complete]();
        }
      },
    },
  );
})();
