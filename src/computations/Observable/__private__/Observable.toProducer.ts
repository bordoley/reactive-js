import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ObservableLike_observe,
  ProducerLike,
  ProducerLike_consume,
} from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import * as Consumer from "../../../utils/Consumer.js";
import { ConsumerLike, SchedulerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";

const Observable_toProducer: Observable.Signature["toProducer"] =
  /*@__PURE__*/ (<T>() => {
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
        const observer = pipe(consumer, Consumer.toObserver(this.s));
        this.o[ObservableLike_observe](observer);
      }
    }

    return (scheduler: SchedulerLike) => (observable: ObservableLike<T>) =>
      newInstance(ProducerFromObservable, observable, scheduler);
  })();

export default Observable_toProducer;
