import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_createPublisher from "../../Observable/__internal__/Observable.createPublisher.js";
import { Factory } from "../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../types.js";
import Observable_multicastImpl from "./DeferredObservable.multicastImpl.js";

const DeferredObservable_multicast: DeferredObservable.Signature["multicast"] =
  <T>(
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

export default DeferredObservable_multicast;
