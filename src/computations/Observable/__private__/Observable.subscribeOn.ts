import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
} from "../../../computations.js";
import { pipe } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    scheduler: SchedulerLike,
  ) =>
  (observable: ObservableLike<T>) =>
    Observable_createWithConfig<T>(
      subscriber =>
        // FIXME: Conceivably could do some introspection to determine if the observer
        // is using the same scheduler and backpressure config and bypass the intermediary
        pipe(observable, Observable_subscribe(scheduler, { subscriber })),
      {
        [ComputationLike_isPure]: observable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;
