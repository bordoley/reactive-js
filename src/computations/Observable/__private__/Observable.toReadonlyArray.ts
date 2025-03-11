import { SynchronousObservableLike } from "../../../computations.js";
import { Function1, pipe } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_first from "./Observable.first.js";

const Observable_toReadonlyArray: Observable.Signature["toReadonlyArray"] =
  <T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, ReadonlyArray<T>> =>
  observable =>
    pipe(observable, Observable_buffer<T>(), Observable_first(options)) ?? [];

export default Observable_toReadonlyArray;
