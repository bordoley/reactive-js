import { SynchronousObservableLike } from "../../../computations.js";
import { Function1, Optional, none, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_first: Observable.Signature["first"] =
  <T>(options?: {
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, Optional<T>> =>
  observable => {
    let result: Optional<T> = none;

    pipe(
      observable,
      Observable_takeFirst(),
      Observable_forEach((v: T) => {
        result = v;
      }),
      Observable_run(options),
    );

    return result;
  };

export default Observable_first;
