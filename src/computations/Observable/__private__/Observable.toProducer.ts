import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike_subscribe,
  ObservableLike,
} from "../../../computations.js";
import { bindMethod, compose } from "../../../functions.js";
import * as DefaultScheduler from "../../../utils/DefaultScheduler.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { SchedulerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Observable_toProducer: Observable.Signature["toProducer"] = ((options?: {
    scheduler: SchedulerLike;
  }) =>
  (observable: ObservableLike) =>
    DeferredEventSource.create(
      compose(
        Consumer.toObserver(options?.scheduler ?? DefaultScheduler.get()),
        bindMethod(observable, EventSourceLike_subscribe),
      ),
      {
        [ComputationLike_isPure]: Computation.isPure(observable),
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["toProducer"];

export default Observable_toProducer;
