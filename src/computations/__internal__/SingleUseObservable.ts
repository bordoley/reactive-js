import {
  getPrototype,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventSourceLike_addEventListener,
  ObservableLike_observe,
  PureDeferredObservableLike,
  StoreLike_value,
  WritableStoreLike,
} from "../../computations.js";
import {
  Optional,
  call,
  isSome,
  none,
  pipe,
  raiseIf,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../../utils/__mixins__/QueueMixin.js";
import {
  BackpressureStrategy,
  DispatcherLike,
  DispatcherLike_complete,
  DispatcherLike_state,
  DispatcherState,
  DispatcherState_completed,
  DispatcherState_ready,
  DisposableLike,
  ObserverLike,
  QueueLike,
  QueueLike_dequeue,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as WritableStore from "../WritableStore.js";

export interface SingleUseObservableLike<out T>
  extends PureDeferredObservableLike<T>,
    DispatcherLike,
    DisposableLike {}

export const create: <T>(config?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => SingleUseObservableLike<T> = (<T>() => {
  const SingleUseObservableLike_delegate = Symbol(
    "SingleUseObservableLike_delegate",
  );

  type TProperties = {
    [SingleUseObservableLike_delegate]: ObserverLike<T>;
    [DispatcherLike_state]: WritableStoreLike<DispatcherState>;
  };

  const queueProtoype = getPrototype(QueueMixin<T>());

  return mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function SingleUseObservable(
      this: Omit<
        SingleUseObservableLike<T>,
        | keyof DisposableLike
        | typeof QueueableLike_backpressureStrategy
        | typeof QueueableLike_capacity
      > &
        TProperties,
      config: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): SingleUseObservableLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, config);

      this[DispatcherLike_state] = WritableStore.create(DispatcherState_ready);
      return this;
    },
    props<TProperties>({
      [SingleUseObservableLike_delegate]: none,
      [DispatcherLike_state]: none,
    }),
    {
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      [ObservableLike_observe](
        this: SingleUseObservableLike<T> & TProperties & QueueLike<T>,
        observer: ObserverLike<T>,
      ) {
        raiseIf(
          isSome(this[SingleUseObservableLike_delegate]),
          "SingleUseObservable already subscribed.",
        );

        this[SingleUseObservableLike_delegate] = observer;
        pipe(this, Disposable.bindTo(observer));

        const isCompleted =
          this[DispatcherLike_state][StoreLike_value] ===
          DispatcherState_completed;

        let v: Optional<T> = none;
        while (((v = this[QueueLike_dequeue]()), isSome(v))) {
          observer[QueueableLike_enqueue](v);
        }

        if (isCompleted) {
          observer[DispatcherLike_complete]();
        } else {
          observer[DispatcherLike_state][EventSourceLike_addEventListener](
            this[DispatcherLike_state],
          );
        }
      },

      [DispatcherLike_complete](this: TProperties & DisposableLike) {
        const delegate = this[SingleUseObservableLike_delegate];
        const isAlreadyCompleted =
          this[DispatcherLike_state][StoreLike_value] ===
          DispatcherState_completed;

        if (isSome(delegate) && !isAlreadyCompleted) {
          delegate[DispatcherLike_complete]();
        } else if (!isAlreadyCompleted) {
          this[DispatcherLike_state][StoreLike_value] =
            DispatcherState_completed;
        }
      },

      [QueueableLike_enqueue](this: TProperties, v: T): boolean {
        const delegate = this[SingleUseObservableLike_delegate];
        const isCompleted =
          this[DispatcherLike_state][StoreLike_value] ===
          DispatcherState_completed;

        return (
          isCompleted ||
          (isSome(delegate)
            ? delegate[QueueableLike_enqueue](v)
            : call(queueProtoype[QueueableLike_enqueue], this, v))
        );
      },
    },
  );
})();
