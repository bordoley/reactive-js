import type * as Observable from "../../Observable.js";
import Observer_createBackpressureObserver from "../../Observer/__internal__/Observer.createBackpressureStrategyObserver.js";
import { partial, pipe } from "../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
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
        [QueueableLike_capacity]: capacity,
      }),
      Observable_liftRunnableBoundedPureObservableOperator<T, T>,
    );

export default Observable_backpressureStrategy;
