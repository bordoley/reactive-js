import type * as Observable from "../../Observable.js";
import { pipe } from "../../functions.js";
import {
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import Observable_lastAsync from "./Observable.lastAsync.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_firstAsync: Observable.Signature["firstAsync"] =
  <T>(
    scheduler?: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ) =>
  (observable: ObservableLike<T>) =>
    pipe(
      observable,
      Observable_takeFirst(),
      Observable_lastAsync(scheduler as SchedulerLike, options),
    );

export default Observable_firstAsync;
