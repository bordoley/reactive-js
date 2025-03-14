import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import Observable_multicast from "./Observable.multicast.js";
import Observable_subscribeOn from "./Observable.subscribeOn.js";

// Intentionally convoluted implementation to match the spec of the type signature.
const Observable_fromObservable: Observable.Signature["fromObservable"] = ((
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ) =>
  obs =>
    Computation.isMulticasted(obs)
      ? Observable_multicast(scheduler, options)(obs)
      : Observable_subscribeOn(
          scheduler,
          options,
        )(obs)) as Observable.Signature["fromObservable"];

export default Observable_fromObservable;
