import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationOf,
  EventSourceLike_subscribe,
} from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    scheduler: SchedulerLike,
  ) =>
  (observable: ComputationOf<Observable.Computation, T>) =>
    DeferredEventSource.create(
      observer =>
        // FIXME: Conceivably could do some introspection to determine if the observer
        // is using the same scheduler and backpressure config and bypass the intermediary
        pipe(
          observable,
          Observable_toProducer({ scheduler }),
          invoke(EventSourceLike_subscribe, observer),
        ),
      {
        [ComputationLike_isPure]: observable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;
