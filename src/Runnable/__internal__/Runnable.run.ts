import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import type * as Runnable from "../../Runnable.js";
import Scheduler_createVirtualTimeScheduler from "../../Scheduler/__internal__/Scheduler.createVirtualTimeScheduler.js";
import { pipe } from "../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableLike,
  VirtualTimeSchedulerLike_run,
} from "../../types.js";

const Runnable_run: Runnable.Signature["run"] =
  <T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }) =>
  (observable: RunnableLike<T>) => {
    const scheduler = Scheduler_createVirtualTimeScheduler();

    const subscription = pipe(
      observable,
      Observable_subscribe(scheduler, options),
    );

    scheduler[VirtualTimeSchedulerLike_run]();

    Disposable_raiseIfDisposedWithError(subscription);
  };

export default Runnable_run;
