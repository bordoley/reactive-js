import {
  Set,
  Set_add,
  Set_delete,
  Set_has,
  Set_size,
} from "../__internal__/constants.js";
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
  ObservableLike_observe,
  SubjectLike,
} from "../computations.js";
import {
  Method,
  Optional,
  error,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
} from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../utils/__mixins__/QueueMixin.js";
import {
  DispatcherLike_complete,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueableLike_enqueue,
} from "../utils.js";
import * as Iterable from "./Iterable.js";

export const create: <T>(options?: {
  readonly replay?: number;
  readonly autoDispose?: boolean;
}) => SubjectLike<T> = /*@__PURE__*/ (<T>() => {
  const Subject_observers = Symbol("Subject_observers");
  const Subject_onObserverDisposed = Symbol("Subject_onObserverDisposed");

  type TProperties = {
    [Subject_observers]: Optional<
      Set<ObserverLike<T>> | Optional<ObserverLike<T>>
    >;
    readonly [Subject_onObserverDisposed]: Method<ObserverLike<T>>;
  };

  function onSubjectDisposed(this: TProperties, e: Optional<Error>) {
    const maybeObservers = this[Subject_observers];
    const observers =
      maybeObservers instanceof Set
        ? maybeObservers
        : isSome(maybeObservers)
          ? [maybeObservers]
          : [];

    for (const observer of observers) {
      if (isSome(e)) {
        observer[DisposableLike_dispose](e);
      } else {
        observer[DisposableLike_dispose]();
      }
    }
    this[Subject_observers] = none;
  }

  return mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Subject(
      this: Pick<
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

      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, {
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity: replay,
      });

      this[Subject_observers] = newInstance<Set<ObserverLike>>(Set);

      const autoDispose = options?.autoDispose ?? false;

      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const instance = this;
      this[Subject_onObserverDisposed] = function onObserverDisposed(
        this: ObserverLike<T>,
      ) {
        const maybeObservers = instance[Subject_observers];

        if (maybeObservers instanceof Set) {
          maybeObservers[Set_delete](this);
        } else if (maybeObservers === this) {
          instance[Subject_observers] = none;
        }

        if (maybeObservers instanceof Set && maybeObservers[Set_size] == 1) {
          instance[Subject_observers] =
            Iterable.first<ObserverLike<T>>()(maybeObservers);
        }

        if (autoDispose && isNone(instance[Subject_observers])) {
          instance[DisposableLike_dispose]();
          instance[Subject_observers] = none;
        }
      };

      pipe(this, DisposableContainer.onDisposed(onSubjectDisposed));

      return this;
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

        const maybeObservers = this[Subject_observers];
        const observers =
          maybeObservers instanceof Set
            ? maybeObservers
            : isSome(maybeObservers)
              ? [maybeObservers]
              : [];

        for (const observer of observers) {
          try {
            observer[QueueableLike_enqueue](next);
          } catch (e) {
            observer[DisposableLike_dispose](error(e));
          }
        }
      },

      [ObservableLike_observe](
        this: TProperties & SubjectLike<T> & QueueLike<T>,
        observer: ObserverLike<T>,
      ) {
        const maybeObservers = this[Subject_observers];

        if (
          (maybeObservers instanceof Set &&
            maybeObservers[Set_has](observer)) ||
          maybeObservers === observer
        ) {
          return;
        }

        if (isSome(this[DisposableLike_error])) {
          observer[DisposableLike_dispose](this[DisposableLike_error]);
          return;
        }

        if (!this[DisposableLike_isDisposed]) {
          if (maybeObservers instanceof Set) {
            maybeObservers[Set_add](observer);
          } else if (isSome(maybeObservers)) {
            const listeners = (this[Subject_observers] =
              newInstance<Set<ObserverLike<T>>>(Set));
            listeners[Set_add](maybeObservers);
            listeners[Set_add](observer);
          } else {
            this[Subject_observers] = observer;
          }

          pipe(
            observer,
            DisposableContainer.onDisposed(this[Subject_onObserverDisposed]),
          );
        }

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
