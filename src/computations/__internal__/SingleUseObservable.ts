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
  PublisherLike,
  PureDeferredObservableLike,
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
  DispatcherLike_isCompleted,
  DispatcherLike_onReady,
  DisposableLike,
  ObserverLike,
  QueueLike,
  QueueLike_dequeue,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Publisher from "../Publisher.js";

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
    [DispatcherLike_onReady]: PublisherLike<void>;
    [DispatcherLike_isCompleted]: boolean;
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

      this[DispatcherLike_onReady] = Publisher.create();
      return this;
    },
    props<TProperties>({
      [SingleUseObservableLike_delegate]: none,
      [DispatcherLike_onReady]: none,
      [DispatcherLike_isCompleted]: false,
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

        const isCompleted = this[DispatcherLike_isCompleted];

        let v: Optional<T> = none;
        while (((v = this[QueueLike_dequeue]()), isSome(v))) {
          observer[QueueableLike_enqueue](v);
        }

        if (isCompleted) {
          observer[DispatcherLike_complete]();
        } else {
          observer[DispatcherLike_onReady][EventSourceLike_addEventListener](
            this[DispatcherLike_onReady],
          );
        }
      },

      [DispatcherLike_complete](this: TProperties & DisposableLike) {
        const delegate = this[SingleUseObservableLike_delegate];
        const isAlreadyCompleted = this[DispatcherLike_isCompleted];
        this[DispatcherLike_isCompleted] = true;

        if (isSome(delegate) && !isAlreadyCompleted) {
          delegate[DispatcherLike_complete]();
        }
      },

      [QueueableLike_enqueue](this: TProperties, v: T): boolean {
        const delegate = this[SingleUseObservableLike_delegate];
        const isCompleted = this[DispatcherLike_isCompleted];

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
