import { Array_push } from "../../../__internal__/constants.js";
import { RunnableLike } from "../../../concurrent.js";
import { Function1, bindMethod, pipe } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";

const Observable_toReadonlyArray: Observable.Signature["toReadonlyArray"] =
  <T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): Function1<RunnableLike<T>, ReadonlyArray<T>> =>
  observable => {
    const result: T[] = [];

    pipe(
      observable,
      Observable_forEach(bindMethod(result, Array_push)),
      Observable_run(options),
    );

    return result;
  };

export default Observable_toReadonlyArray;
