import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ProducerLike_consume,
} from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    scheduler: SchedulerLike,
  ) =>
  (observable: ObservableLike<T>) =>
    Observable_createWithConfig<T>(
      observer =>
        // FIXME: Conceivably could do some introspection to determine if the observer
        // is using the same scheduler and backpressure config and bypass the intermediary
        pipe(
          observable,
          Observable_toProducer(scheduler),
          invoke(ProducerLike_consume, observer),
        ),
      {
        [ComputationLike_isPure]: observable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;
