import { SynchronousObservableLike } from "../../../concurrent.js";
import { Function1, Optional, none, pipe } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";

const Observable_last: Observable.Signature["last"] =
  <T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, Optional<T>> =>
  observable => {
    let result: Optional<T> = none;

    pipe(
      observable,
      Observable_forEach((v: T) => {
        result = v;
      }),
      Observable_run(options),
    );

    return result;
  };

export default Observable_last;
