import {
  include,
  init,
  mixInstanceFactory,
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
import { newInstance } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingQueueableMixin from "../../../utils/__mixins__/DelegatingQueueableMixin.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import { ObserverLike, QueueableLike, SchedulerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";

const Observable_toProducer: Observable.Signature["toProducer"] =
  /*@__PURE__*/ (<T>() => {
    const createProducerConsumerObserver = mixInstanceFactory(
      include(
        DelegatingDisposableMixin,
        DelegatingSchedulerMixin,
        DelegatingQueueableMixin(),
      ),
      function ProducerConsumerObserver(
        this: unknown,
        scheduler: SchedulerLike,
        consumer: QueueableLike<T>,
      ): ObserverLike<T> {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(DelegatingQueueableMixin(), this, consumer);

        return this;
      },
    );

    class Producer implements ProducerLike<T> {
      public readonly [ComputationLike_isPure]?: boolean;
      public readonly [ComputationLike_isDeferred]?: boolean;
      public readonly [ComputationLike_isSynchronous]?: boolean;

      constructor(
        private readonly o: ObservableLike<T>,
        private readonly s: SchedulerLike,
      ) {
        this[ComputationLike_isPure] = Computation.isPure(o);
        this[ComputationLike_isDeferred] = Computation.isDeferred(o);
        this[ComputationLike_isSynchronous] = Computation.isSynchronous(o);
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
