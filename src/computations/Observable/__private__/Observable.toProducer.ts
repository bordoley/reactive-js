import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { bindMethod, compose } from "../../../functions.js";
import * as DefaultScheduler from "../../../utils/DefaultScheduler.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { SchedulerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";

const Observable_toProducer: Observable.Signature["toProducer"] = ((options?: {
    scheduler: SchedulerLike;
  }) =>
  (observable: ObservableLike) =>
    Source.create(
      compose(
        Consumer.toObserver(options?.scheduler ?? DefaultScheduler.get()),
        bindMethod(observable, SourceLike_subscribe),
      ),
      {
        [ComputationLike_isPure]: Computation.isPure(observable),
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["toProducer"];

export default Observable_toProducer;
