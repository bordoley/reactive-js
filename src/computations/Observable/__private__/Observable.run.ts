import { SynchronousObservableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import { VirtualTimeSchedulerLike_run } from "../../../utils.js";
import type * as Observable from "../../Observable.js";

import Observable_subscribe from "./Observable.subscribe.js";

const Observable_run: Observable.Signature["run"] =
  <T>(options?: { readonly maxMicroTaskTicks?: number }) =>
  (observable: SynchronousObservableLike<T>) => {
    const scheduler = VirtualTimeScheduler.create(options);

    const subscription = pipe(observable, Observable_subscribe(scheduler));

    scheduler[VirtualTimeSchedulerLike_run]();

    Disposable.raiseIfDisposedWithError(subscription);
  };

export default Observable_run;
