import { SynchronousObservableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import {
  BackpressureStrategy,
  VirtualTimeSchedulerLike_run,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";

import Observable_subscribe from "./Observable.subscribe.js";

const Observable_run: Observable.Signature["run"] =
  <T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }) =>
  (observable: SynchronousObservableLike<T>) => {
    const scheduler = VirtualTimeScheduler.create(options);

    const subscription = pipe(
      observable,
      Observable_subscribe(scheduler, options),
    );

    scheduler[VirtualTimeSchedulerLike_run]();

    Disposable.raiseIfDisposedWithError(subscription);
  };

export default Observable_run;
