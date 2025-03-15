import { SynchronousObservableLike } from "../../../computations.js";
import { Function1, Optional, compose } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_last from "./Observable.last.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_first: Observable.Signature["first"] = <T>(options?: {
  readonly maxMicroTaskTicks?: number;
}): Function1<SynchronousObservableLike<T>, Optional<T>> =>
  compose(Observable_takeFirst(), Observable_last(options));

export default Observable_first;
