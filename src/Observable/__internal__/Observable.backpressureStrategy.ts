import type * as Observable from "../../Observable.js";
import Observer_createBackpressureObserver from "../../Observer/__internal__/Observer.createBackpressureStrategyObserver.js";
import { partial, pipe } from "../../functions.js";
import {
  BufferLike_capacity,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../types.js";
import Observable_liftRunnableBoundedPureObservableOperator from "./Observable.liftRunnableBoundedPureObservableOperator.js";

const Observable_backpressureStrategy: Observable.Signature["backpressureStrategy"] =
  <T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ) =>
    pipe(
      Observer_createBackpressureObserver<T>,
      partial({
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
        [BufferLike_capacity]: capacity,
      }),
      Observable_liftRunnableBoundedPureObservableOperator<T, T>,
    );

export default Observable_backpressureStrategy;
