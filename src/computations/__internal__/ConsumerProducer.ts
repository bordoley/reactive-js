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
  ProducerLike_consume,
  PublisherLike,
  PureDeferredProducerLike,
} from "../../computations.js";
import {
  Optional,
  SideEffect1,
  bindMethod,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import * as Consumer from "../../utils/Consumer.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  DisposableLike,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  QueueLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as Publisher from "../Publisher.js";

export interface ConsumerProducerLike<out T>
  extends PureDeferredProducerLike<T>,
    ConsumerLike,
    DisposableLike {}

export const create: <T>(config?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerProducerLike<T> = (<T>() => {
  const ConsumerProducer_delegate = Symbol("ConsumerProducer_delegate");
  const ConsumerProducer_onReadyPublisher = Symbol(
    "ConsumerProducer_onReadyPublisher",
  );

  type TProperties = {
    [ConsumerProducer_delegate]: ConsumerLike<T>;
    [ConsumerProducer_onReadyPublisher]: PublisherLike<void>;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function ConsumerProducer(
      this: Omit<ConsumerProducerLike<T>, keyof DisposableLike> & TProperties,
      config: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ConsumerProducerLike<T> {
      init(DisposableMixin, this);

      const onReadyPublisher = pipe(Publisher.create(), Disposable.addTo(this));
      const queue = pipe(Consumer.create(config), Disposable.addTo(this));

      this[ConsumerProducer_delegate] = queue;
      this[ConsumerProducer_onReadyPublisher] = onReadyPublisher;

      pipe(
        queue[ConsumerLike_addOnReadyListener](
          bindMethod(onReadyPublisher, EventListenerLike_notify),
        ),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [ConsumerProducer_delegate]: none,
      [ConsumerProducer_onReadyPublisher]: none,
    }),
    {
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      get [ConsumerLike_backpressureStrategy]() {
        unsafeCast<TProperties>(this);
        return this[ConsumerProducer_delegate][
          ConsumerLike_backpressureStrategy
        ];
      },

      get [ConsumerLike_capacity]() {
        unsafeCast<TProperties>(this);
        return this[ConsumerProducer_delegate][ConsumerLike_capacity];
      },

      get [ConsumerLike_isReady]() {
        unsafeCast<TProperties>(this);
        return this[ConsumerProducer_delegate][ConsumerLike_isReady];
      },

      get [SinkLike_isCompleted]() {
        unsafeCast<TProperties>(this);
        return this[ConsumerProducer_delegate][SinkLike_isCompleted];
      },

      [ProducerLike_consume](
        this: ConsumerProducerLike<T> & TProperties,
        observer: ConsumerLike<T>,
      ) {
        const oldDelegate = this[ConsumerProducer_delegate];
        this[ConsumerProducer_delegate] = observer;
        pipe(this, Disposable.bindTo(observer));

        pipe(
          observer[ConsumerLike_addOnReadyListener](
            bindMethod(
              this[ConsumerProducer_onReadyPublisher],
              EventListenerLike_notify,
            ),
          ),
          Disposable.addTo(this),
        );

        if (isSome((oldDelegate as any)[EnumeratorLike_moveNext])) {
          unsafeCast<QueueLike<T>>(oldDelegate);

          while (oldDelegate[EnumeratorLike_moveNext]()) {
            const v = oldDelegate[EnumeratorLike_current];
            observer[EventListenerLike_notify](v);
          }
        }

        if (oldDelegate[SinkLike_isCompleted]) {
          observer[SinkLike_complete]();
        }

        oldDelegate[SinkLike_complete]();
      },

      [SinkLike_complete](this: TProperties & DisposableLike) {
        this[ConsumerProducer_delegate][SinkLike_complete]();
      },

      [EventListenerLike_notify](this: TProperties, v: T): void {
        this[ConsumerProducer_delegate][EventListenerLike_notify](v);
      },

      [ConsumerLike_addOnReadyListener](
        this: TProperties & DisposableLike,
        callback: SideEffect1<void>,
      ) {
        return pipe(
          this[ConsumerProducer_onReadyPublisher],
          EventSource.addEventHandler(callback),
          Disposable.addTo(this),
        );
      },
    },
  );
})();
