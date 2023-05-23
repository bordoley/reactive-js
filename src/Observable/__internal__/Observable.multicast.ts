import type * as Observable from "../../Observable.js";
import { Factory } from "../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import Observable_createPublisher from "./Observable.createPublisher.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";

const Observable_multicast: Observable.Signature["multicast"] = <T>(
  schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
  options: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  } = {},
) =>
  Observable_multicastImpl<T>(
    Observable_createPublisher,
    schedulerOrFactory,
    options,
  );

export default Observable_multicast;
