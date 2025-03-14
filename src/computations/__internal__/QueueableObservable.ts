import {
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  ObservableLike_observe,
  PublisherLike,
  PureDeferredObservableLike,
} from "../../computations.js";
import { Optional, bindMethod, isSome, none, pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Queue from "../../utils/Queue.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike,
  EventListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueLike_dequeue,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  QueueableLike_onReady,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as Publisher from "../Publisher.js";

export interface QueueableObservableLike<out T>
  extends PureDeferredObservableLike<T>,
    QueueableLike,
    DisposableLike {}

export const create: <T>(config?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => QueueableObservableLike<T> = (<T>() => {
  const QueueableObservable_delegate = Symbol("QueueableObservable_delegate");

  type TProperties = {
    [QueueableObservable_delegate]: QueueableLike<T>;
    [QueueableLike_onReady]: PublisherLike<void>;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function QueueableObservable(
      this: Omit<QueueableObservableLike<T>, keyof DisposableLike> &
        TProperties,
      config: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): QueueableObservableLike<T> {
      init(DisposableMixin, this);

      const onReadyPublisher = pipe(Publisher.create(), Disposable.addTo(this));
      this[QueueableLike_onReady] = onReadyPublisher;

      const queue = pipe(Queue.create(config), Disposable.addTo(this));
      this[QueueableObservable_delegate] = queue;

      pipe(
        queue[QueueableLike_onReady],
        EventSource.addEventHandler(
          bindMethod(onReadyPublisher, EventListenerLike_notify),
        ),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [QueueableObservable_delegate]: none,
      [QueueableLike_onReady]: none,
    }),
    {
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      get [QueueableLike_backpressureStrategy]() {
        unsafeCast<TProperties>(this);
        return this[QueueableObservable_delegate][
          QueueableLike_backpressureStrategy
        ];
      },

      get [QueueableLike_capacity]() {
        unsafeCast<TProperties>(this);
        return this[QueueableObservable_delegate][QueueableLike_capacity];
      },

      get [QueueableLike_isReady]() {
        unsafeCast<TProperties>(this);
        return this[QueueableObservable_delegate][QueueableLike_isReady];
      },

      get [SinkLike_isCompleted]() {
        unsafeCast<TProperties>(this);
        return this[QueueableObservable_delegate][SinkLike_isCompleted];
      },

      [ObservableLike_observe](
        this: QueueableObservableLike<T> & TProperties,
        observer: ObserverLike<T>,
      ) {
        const oldDelegate = this[QueueableObservable_delegate];
        this[QueueableObservable_delegate] = observer;
        pipe(this, Disposable.bindTo(observer));

        pipe(
          observer[QueueableLike_onReady],
          EventSource.addEventHandler(
            bindMethod(this[QueueableLike_onReady], EventListenerLike_notify),
          ),
          Disposable.addTo(this),
        );

        if (isSome((oldDelegate as any)[QueueLike_dequeue])) {
          unsafeCast<QueueLike<T>>(oldDelegate);

          let v: Optional<T> = none;
          while (((v = oldDelegate[QueueLike_dequeue]()), isSome(v))) {
            observer[EventListenerLike_notify](v);
          }
        }

        if (oldDelegate[SinkLike_isCompleted]) {
          observer[SinkLike_complete]();
        }

        oldDelegate[SinkLike_complete]();
      },

      [SinkLike_complete](this: TProperties & DisposableLike) {
        this[QueueableObservable_delegate][SinkLike_complete]();
      },

      [EventListenerLike_notify](this: TProperties, v: T): void {
        this[QueueableObservable_delegate][EventListenerLike_notify](v);
      },
    },
  );
})();
