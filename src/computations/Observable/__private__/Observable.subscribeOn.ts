import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationOf,
  SourceLike_subscribe,
} from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    scheduler: SchedulerLike,
  ) =>
  (observable: ComputationOf<Observable.Computation, T>) =>
    Source.create(
      observer =>
        // FIXME: Conceivably could do some introspection to determine if the observer
        // is using the same scheduler and backpressure config and bypass the intermediary
        pipe(
          observable,
          Observable_toProducer({ scheduler }),
          invoke(SourceLike_subscribe, observer),
        ),
      {
        [ComputationLike_isPure]: observable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;
