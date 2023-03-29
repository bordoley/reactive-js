import { Factory, Optional, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Observable_lastAsync from "./Observable.lastAsync.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_firstAsync =
  <T>(options?: {
    scheduler?: SchedulerLike | Factory<SchedulerLike>;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  }) =>
  (observable: ObservableLike<T>): Promise<Optional<T>> =>
    pipe(
      observable,
      Observable_takeFirst<ObservableLike, T>(),
      Observable_lastAsync(options),
    );

export default Observable_firstAsync;
