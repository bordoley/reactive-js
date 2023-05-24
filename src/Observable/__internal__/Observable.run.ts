import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import type * as Observable from "../../Observable.js";
import Scheduler_createVirtualTimeScheduler from "../../Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import { pipe } from "../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableBaseLike,
  VirtualTimeSchedulerLike_run,
} from "../../types.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_run: Observable.Signature["run"] =
  <T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }) =>
  (observable: RunnableBaseLike<T>) => {
    const scheduler = Scheduler_createVirtualTimeScheduler();

    const subscription = pipe(
      observable,
      Observable_subscribe(scheduler, options),
    );

    scheduler[VirtualTimeSchedulerLike_run]();

    Disposable_raiseIfDisposedWithError(subscription);
  };

export default Observable_run;
