import { ObservableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_lastAsync from "./Observable.lastAsync.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_firstAsync: Observable.Signature["firstAsync"] = (<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ) =>
  (observable: ObservableLike<T>) =>
    pipe(
      observable,
      Observable_takeFirst<T>(),
      Observable_lastAsync(scheduler, options),
    )) as Observable.Signature["firstAsync"];

export default Observable_firstAsync;
