import { ObservableLike, SchedulerLike } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_lastAsync from "./Observable.lastAsync.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_firstAsync: Observable.Signature["firstAsync"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ) =>
  (observable: ObservableLike<T>) =>
    pipe(
      observable,
      Observable_takeFirst(),
      Observable_lastAsync(scheduler, options),
    );

export default Observable_firstAsync;
