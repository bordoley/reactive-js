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
  DisposableLike,
  ObserverLike,
  QueueLike,
  QueueLike_dequeue,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_complete,
  QueueableLike_enqueue,
  QueueableLike_isCompleted,
  QueueableLike_isReady,
  QueueableLike_onReady,
} from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as Publisher from "../Publisher.js";

export interface SingleUseObservableLike<out T>
  extends PureDeferredObservableLike<T>,
    QueueableLike,
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
    [QueueableLike_onReady]: PublisherLike<void>;
    [QueueableLike_isCompleted]: boolean;
    [QueueableLike_isReady]: boolean;
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

      const publisher = (this[QueueableLike_onReady] = Publisher.create());

      pipe(
        publisher,
        EventSource.addEventHandler(() => {
          this[QueueableLike_isReady] = true;
        }),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [SingleUseObservableLike_delegate]: none,
      [QueueableLike_onReady]: none,
      [QueueableLike_isCompleted]: false,
      [QueueableLike_isReady]: true,
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

        const isCompleted = this[QueueableLike_isCompleted];

        let v: Optional<T> = none;
        while (((v = this[QueueLike_dequeue]()), isSome(v))) {
          observer[QueueableLike_enqueue](v);
        }

        if (isCompleted) {
          observer[QueueableLike_complete]();
        } else {
          this[QueueableLike_isReady] = observer[QueueableLike_isReady];
          observer[QueueableLike_onReady][EventSourceLike_addEventListener](
            this[QueueableLike_onReady],
          );
        }
      },

      [QueueableLike_complete](this: TProperties & DisposableLike) {
        const delegate = this[SingleUseObservableLike_delegate];
        const isAlreadyCompleted = this[QueueableLike_isCompleted];
        this[QueueableLike_isCompleted] = true;

        if (isSome(delegate) && !isAlreadyCompleted) {
          delegate[QueueableLike_complete]();
        }
      },

      [QueueableLike_enqueue](this: TProperties, v: T): boolean {
        const delegate = this[SingleUseObservableLike_delegate];
        const isCompleted = this[QueueableLike_isCompleted];

        const result =
          isCompleted ||
          (isSome(delegate)
            ? delegate[QueueableLike_enqueue](v)
            : call(queueProtoype[QueueableLike_enqueue], this, v));

        this[QueueableLike_isReady] = result;
        return result;
      },
    },
  );
})();
