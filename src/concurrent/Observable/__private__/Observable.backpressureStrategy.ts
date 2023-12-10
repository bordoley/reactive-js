import { partial, pipe } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_createBackpressureObserver from "../../Observer/__private__/Observer.createBackpressureStrategyObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

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
      Observable_liftPure<T, T>,
    );

export default Observable_backpressureStrategy;
