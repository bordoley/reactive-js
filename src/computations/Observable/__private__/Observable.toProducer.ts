import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ObservableLike_observe,
  ProducerLike,
  ProducerLike_consume,
} from "../../../computations.js";
import { SideEffect1, newInstance, none } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  ObserverLike,
  QueueableLike,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SchedulerLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";

const Observable_toProducer: Observable.Signature["toProducer"] =
  /*@__PURE__*/ (<T>() => {
    const ProducerConsumerObserver_consumer = Symbol(
      "ProducerConsumerObserver_consumer",
    );

    type TProperties = {
      [ProducerConsumerObserver_consumer]: QueueableLike<T>;
    };

    const createProducerConsumerObserver = mixInstanceFactory(
      include(DelegatingDisposableMixin, DelegatingSchedulerMixin),
      function ProducerConsumerObserver(
        this: TProperties &
          Omit<ObserverLike<T>, keyof DisposableLike | keyof SchedulerLike>,
        scheduler: SchedulerLike,
        consumer: QueueableLike<T>,
      ): ObserverLike<T> {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        this[ProducerConsumerObserver_consumer] = consumer;

        return this;
      },
      props<TProperties>({
        [ProducerConsumerObserver_consumer]: none,
      }),
      proto({
        get [QueueableLike_capacity]() {
          unsafeCast<DisposableLike & TProperties>(this);
          return this[ProducerConsumerObserver_consumer][
            QueueableLike_capacity
          ];
        },

        get [QueueableLike_backpressureStrategy]() {
          unsafeCast<DisposableLike & TProperties>(this);
          return this[ProducerConsumerObserver_consumer][
            QueueableLike_backpressureStrategy
          ];
        },

        get [SinkLike_isCompleted]() {
          unsafeCast<DisposableLike & TProperties>(this);
          return this[ProducerConsumerObserver_consumer][SinkLike_isCompleted];
        },

        get [QueueableLike_isReady](): boolean {
          unsafeCast<QueueableLike & TProperties>(this);
          return this[ProducerConsumerObserver_consumer][QueueableLike_isReady];
        },

        [QueueableLike_addOnReadyListener](
          this: TProperties,
          callback: SideEffect1<void>,
        ): DisposableLike {
          return this[ProducerConsumerObserver_consumer][
            QueueableLike_addOnReadyListener
          ](callback);
        },

        [EventListenerLike_notify](this: TProperties, next: T) {
          this[ProducerConsumerObserver_consumer][EventListenerLike_notify](
            next,
          );
        },

        [SinkLike_complete](this: DisposableLike & TProperties) {
          this[ProducerConsumerObserver_consumer][SinkLike_complete]();
        },
      }),
    );

    class Producer implements ProducerLike<T> {
      public readonly [ComputationLike_isDeferred]: true = true as const;
      public readonly [ComputationLike_isSynchronous]: false = false as const;

      public readonly [ComputationLike_isPure]?: boolean;

      constructor(
        private readonly o: ObservableLike<T>,
        private readonly s: SchedulerLike,
      ) {
        this[ComputationLike_isPure] = Computation.isPure(o);
      }

      [ProducerLike_consume](consumer: QueueableLike<T>): void {
        const observer = createProducerConsumerObserver(this.s, consumer);
        this.o[ObservableLike_observe](observer);
      }
    }

    return (scheduler: SchedulerLike) => (observable: ObservableLike<T>) =>
      newInstance(Producer, observable, scheduler);
  })();

export default Observable_toProducer;
