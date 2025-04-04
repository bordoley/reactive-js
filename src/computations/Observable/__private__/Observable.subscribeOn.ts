import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationOf,
  EventSourceLike_subscribe,
} from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import {
  BackpressureStrategy,
  ObserverLike,
  SchedulerLike,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as ConsumerObservable from "../../__internal__/ConsumerObservable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    scheduler: SchedulerLike,
    options?: {
      backpressureStrategy?: BackpressureStrategy;
      capacity?: number;
    },
  ) =>
  (observable: ComputationOf<Observable.Computation, T>) =>
    DeferredEventSource.create<T, ObserverLike>(
      observer => {
        const consumer = ConsumerObservable.create(options);
        consumer[EventSourceLike_subscribe](observer);

        // FIXME: Conceivably could do some introspection to determine if the observer
        // is using the same scheduler and backpressure config and bypass the intermediary
        pipe(
          observable,
          Observable_toProducer({ scheduler }),
          invoke(EventSourceLike_subscribe, consumer),
        );
      },
      {
        [ComputationLike_isPure]: observable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;
