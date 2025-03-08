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
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  DispatcherLike_complete,
  EventListenerLike_notify,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
  SubjectLike,
} from "../computations.js";
import {
  Method,
  Optional,
  error,
  isSome,
  newInstance,
  none,
  pipe,
} from "../functions.js";
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
  SchedulerLike_inContinuation,
} from "../utils.js";

export const create: <T>(options?: {
  readonly replay?: number;
  readonly autoDispose?: boolean;
}) => SubjectLike<T> = /*@__PURE__*/ (<T>() => {
  const Subject_observers = Symbol("Subject_observers");
  const Subject_onObserverDisposed = Symbol("Subject_onObserverDisposed");

  type TProperties = {
    readonly [Subject_observers]: Set<ObserverLike<T>>;
    readonly [Subject_onObserverDisposed]: Method<ObserverLike<T>>;
  };

  function onSubjectDisposed(this: TProperties, e: Optional<Error>) {
    for (const observer of this[Subject_observers]) {
      if (isSome(e)) {
        observer[DisposableLike_dispose](e);
      } else {
        observer[DispatcherLike_complete]();
      }
    }
  }

  return mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Subject(
      instance: Pick<
        SubjectLike<T>,
        | typeof ObservableLike_observe
        | typeof ComputationLike_isDeferred
        | typeof ComputationLike_isPure
        | typeof ComputationLike_isSynchronous
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

      const autoDispose = options?.autoDispose ?? false;
      instance[Subject_onObserverDisposed] = function onObserverDisposed(
        this: ObserverLike<T>,
      ) {
        const observers = instance[Subject_observers];
        observers[Set_delete](this);

        if (autoDispose && instance[Subject_observers][Set_size] === 0) {
          instance[DisposableLike_dispose]();
        }
      };

      pipe(instance, DisposableContainer.onDisposed(onSubjectDisposed));

      return instance;
    },
    props<TProperties>({
      [Subject_observers]: none,
      [Subject_onObserverDisposed]: none,
    }),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

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

        if (observers[Set_has](observer)) {
          return;
        }

        if (isSome(this[DisposableLike_error])) {
          observer[DisposableLike_dispose](this[DisposableLike_error]);
          return;
        }

        observers[Set_add](observer);

        pipe(
          observer,
          DisposableContainer.onDisposed(this[Subject_onObserverDisposed]),
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
