import type * as Observable from "../../Observable.js";
import Observer_createBackpressureObserver from "../../Observer/__internal__/Observer.createBackpressureStrategyObserver.js";
import { partial, pipe } from "../../functions.js";
import {
  BufferLike_capacity,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../types.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_backpressureStrategy: Observable.Signature["backpressureStrategy"] =
  (
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ) =>
    pipe(
      Observer_createBackpressureObserver,
      partial({
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
        [BufferLike_capacity]: capacity,
      }),
      Observable_liftSource,
    );

export default Observable_backpressureStrategy;
