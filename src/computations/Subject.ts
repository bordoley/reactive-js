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
  super_,
} from "../__internal__/mixins.js";
import {
  BroadcasterLike_connect,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  SubjectLike,
} from "../computations.js";
import {
  Method,
  Optional,
  call,
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
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  QueueLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../utils.js";
import * as Iterable from "./Iterable.js";

export const create: <T>(options?: {
  readonly replay?: number;
  readonly autoDispose?: boolean;
}) => SubjectLike<T> = /*@__PURE__*/ (<T>() => {
  const Subject_consumers = Symbol("Subject_consumers");
  const Subject_onConsumerDisposed = Symbol("Subject_onConsumerDisposed");

  type TProperties = {
    [Subject_consumers]: Optional<Set<SinkLike<T>> | Optional<SinkLike<T>>>;
    readonly [Subject_onConsumerDisposed]: Method<SinkLike<T>>;
  };

  function onSubjectDisposed(this: TProperties, e: Optional<Error>) {
    const maybeSinks = this[Subject_consumers];
    const consumers =
      maybeSinks instanceof Set
        ? maybeSinks
        : isSome(maybeSinks)
          ? [maybeSinks]
          : [];

    for (const sink of consumers) {
      if (isSome(e)) {
        sink[DisposableLike_dispose](e);
      } else {
        sink[SinkLike_complete]();
      }
    }
    this[Subject_consumers] = none;
  }

  return mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Subject(
      this: Pick<
        SubjectLike<T>,
        | typeof BroadcasterLike_connect
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

      this[Subject_consumers] = newInstance<Set<SinkLike>>(Set);

      const autoDispose = options?.autoDispose ?? false;

      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const instance = this;
      this[Subject_onConsumerDisposed] = function onConsumerDisposed(
        this: SinkLike<T>,
      ) {
        const maybeSinks = instance[Subject_consumers];

        if (maybeSinks instanceof Set) {
          maybeSinks[Set_delete](this);
        } else if (maybeSinks === this) {
          instance[Subject_consumers] = none;
        }

        if (maybeSinks instanceof Set && maybeSinks[Set_size] == 1) {
          instance[Subject_consumers] =
            Iterable.first<SinkLike<T>>()(maybeSinks);
        }

        if (autoDispose && isNone(instance[Subject_consumers])) {
          instance[DisposableLike_dispose]();
          instance[Subject_consumers] = none;
        }
      };

      pipe(this, DisposableContainer.onDisposed(onSubjectDisposed));

      return this;
    },
    props<TProperties>({
      [Subject_consumers]: none,
      [Subject_onConsumerDisposed]: none,
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

        super_(QueueMixin<T>(), this, EventListenerLike_notify, next);

        const maybeSinks = this[Subject_consumers];
        const consumers =
          maybeSinks instanceof Set
            ? maybeSinks
            : isSome(maybeSinks)
              ? [maybeSinks]
              : [];

        for (const sink of consumers) {
          if (sink[SinkLike_isCompleted]) {
            // be sure to remove completed consumers
            // ideally we would get notified when an sink
            // is completed but this api does not yet exist.
            call(this[Subject_onConsumerDisposed], sink);
            continue;
          }
          try {
            sink[EventListenerLike_notify](next);
          } catch (e) {
            sink[DisposableLike_dispose](error(e));
          }
        }
      },

      [BroadcasterLike_connect](
        this: TProperties & SubjectLike<T> & QueueLike<T>,
        sink: SinkLike<T>,
      ) {
        const maybeSinks = this[Subject_consumers];

        if (
          (maybeSinks instanceof Set && maybeSinks[Set_has](sink)) ||
          maybeSinks === sink
        ) {
          return;
        }

        if (isSome(this[DisposableLike_error])) {
          sink[DisposableLike_dispose](this[DisposableLike_error]);
          return;
        }

        if (!this[DisposableLike_isDisposed]) {
          if (maybeSinks instanceof Set) {
            maybeSinks[Set_add](sink);
          } else if (isSome(maybeSinks)) {
            const listeners = (this[Subject_consumers] =
              newInstance<Set<SinkLike<T>>>(Set));
            listeners[Set_add](maybeSinks);
            listeners[Set_add](sink);
          } else {
            this[Subject_consumers] = sink;
          }

          pipe(
            sink,
            DisposableContainer.onDisposed(this[Subject_onConsumerDisposed]),
          );
        }

        for (const next of this) {
          sink[EventListenerLike_notify](next);
        }

        if (this[SinkLike_complete]) {
          sink[SinkLike_complete]();
        }
      },
    },
  );
})();
