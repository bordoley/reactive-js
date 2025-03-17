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
import DelegatingConsumerMixin from "../../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import { ConsumerLike, ObserverLike, SchedulerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";

const Observable_toProducer: Observable.Signature["toProducer"] =
  /*@__PURE__*/ (<T>() => {
    const createProducerConsumerObserver = mixInstanceFactory(
      include(
        DelegatingDisposableMixin,
        DelegatingSchedulerMixin,
        DelegatingConsumerMixin(),
      ),
      function ProducerConsumerObserver(
        this: unknown,
        scheduler: SchedulerLike,
        consumer: ConsumerLike<T>,
      ): ObserverLike<T> {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(DelegatingConsumerMixin(), this, consumer);

        return this;
      },
    );

    class ProducerFromObservable implements ProducerLike<T> {
      public readonly [ComputationLike_isPure]?: boolean;
      public readonly [ComputationLike_isDeferred]?: true;
      public readonly [ComputationLike_isSynchronous]?: boolean;

      constructor(
        private readonly o: ObservableLike<T>,
        private readonly s: SchedulerLike,
      ) {
        this[ComputationLike_isPure] = Computation.isPure(o);
        this[ComputationLike_isSynchronous] = Computation.isSynchronous(o);
      }

      [ProducerLike_consume](consumer: ConsumerLike<T>): void {
        const observer = createProducerConsumerObserver(this.s, consumer);
        this.o[ObservableLike_observe](observer);
      }
    }

    return (scheduler: SchedulerLike) => (observable: ObservableLike<T>) =>
      newInstance(ProducerFromObservable, observable, scheduler);
  })();

export default Observable_toProducer;
