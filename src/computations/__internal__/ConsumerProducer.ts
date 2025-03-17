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
  PureProducerLike,
} from "../../computations.js";
import {
  Optional,
  SideEffect1,
  bindMethod,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Queue from "../../utils/Queue.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  DisposableLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  QueueLike,
  QueueLike_dequeue,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as EventSource from "../EventSource.js";
import * as Publisher from "../Publisher.js";

export interface ConsumerProducerLike<out T>
  extends PureProducerLike<T>,
    ConsumerLike,
    DisposableLike {}

export const create: <T>(config?: {
  autoDispose?: boolean;
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerProducerLike<T> = (<T>() => {
  const ConsumerProducer_delegate = Symbol("ConsumerProducer_delegate");
  const ConsumerProducer_onReadyPublisher = Symbol(
    "ConsumerProducer_onReadyPublisher",
  );
  const ConsumerProducer_autoDispose = Symbol("ConsumerProducer_autoDispose");

  type TProperties = {
    [ConsumerProducer_delegate]: ConsumerLike<T>;
    [ConsumerProducer_onReadyPublisher]: PublisherLike<void>;
    [ConsumerProducer_autoDispose]: boolean;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function ConsumerProducer(
      this: Omit<ConsumerProducerLike<T>, keyof DisposableLike> & TProperties,
      config: Optional<{
        autoDispose?: boolean;
      }>,
    ): ConsumerProducerLike<T> {
      init(DisposableMixin, this);

      const onReadyPublisher = pipe(Publisher.create(), Disposable.addTo(this));
      const queue = pipe(
        Queue.create({
          ...(config ?? {}),
          autoDispose: true,
        }),
        Disposable.addTo(this),
      );

      this[ConsumerProducer_delegate] = queue;
      this[ConsumerProducer_onReadyPublisher] = onReadyPublisher;
      this[ConsumerProducer_autoDispose] = config?.autoDispose ?? false;

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
      [ConsumerProducer_autoDispose]: false,
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
        consumer: ConsumerLike<T>,
      ) {
        const oldDelegate = this[ConsumerProducer_delegate];
        this[ConsumerProducer_delegate] = consumer;
        pipe(this, Disposable.bindTo(consumer));

        pipe(
          consumer[ConsumerLike_addOnReadyListener](
            bindMethod(
              this[ConsumerProducer_onReadyPublisher],
              EventListenerLike_notify,
            ),
          ),
          Disposable.addTo(this),
        );

        if (isSome((oldDelegate as any)[QueueLike_dequeue])) {
          unsafeCast<QueueLike<T>>(oldDelegate);

          let v: Optional<T> = none;
          while (((v = oldDelegate[QueueLike_dequeue]()), isSome(v))) {
            consumer[EventListenerLike_notify](v);
          }
        }

        if (oldDelegate[SinkLike_isCompleted]) {
          consumer[SinkLike_complete]();
        }

        oldDelegate[SinkLike_complete]();
      },

      [SinkLike_complete](this: TProperties & DisposableLike) {
        this[ConsumerProducer_delegate][SinkLike_complete]();

        if (this[ConsumerProducer_autoDispose]) {
          this[DisposableLike_dispose]();
        }
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
