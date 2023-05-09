import { ObservableContainer } from "../../containers.js";
import { Optional, pipe } from "../../functions.js";
import {
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import Observable_lastAsync from "./Observable.lastAsync.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_firstAsync =
  <T>(
    scheduler?: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ) =>
  (observable: ObservableLike<T>): Promise<Optional<T>> =>
    pipe(
      observable,
      Observable_takeFirst<ObservableContainer.Type, T>(),
      Observable_lastAsync(scheduler, options),
    );

export default Observable_firstAsync;
