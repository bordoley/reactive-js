import {
  RunnableLike,
  VirtualTimeSchedulerLike_run,
} from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import * as VirtualTimeScheduler from "../../VirtualTimeScheduler.js";

import Observable_subscribe from "./Observable.subscribe.js";

const Observable_run: Observable.Signature["run"] =
  <T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }) =>
  (observable: RunnableLike<T>) => {
    const scheduler = VirtualTimeScheduler.create();

    const subscription = pipe(
      observable,
      Observable_subscribe(scheduler, options),
    );

    scheduler[VirtualTimeSchedulerLike_run]();

    Disposable.raiseIfDisposedWithError(subscription);
  };

export default Observable_run;
