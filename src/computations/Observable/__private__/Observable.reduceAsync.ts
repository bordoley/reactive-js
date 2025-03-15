import { ObservableLike } from "../../../computations.js";
import { Factory, Reducer, compose, identity } from "../../../functions.js";
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_actionReducer from "./Observable.actionReducer.js";
import Observable_lastAsync from "./Observable.lastAsync.js";

const Observable_reduceAsync: Observable.Signature["reduceAsync"] = (<T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
  options?: {
    readonly scheduler?: SchedulerLike;
    readonly capacity?: number;
    readonly backpressureStrategy?: BackpressureStrategy;
  },
) =>
  compose(
    identity<ObservableLike<T>>,
    Observable_actionReducer(reducer, initialValue),
    Observable_lastAsync(options),
  )) as Observable.Signature["reduceAsync"];

export default Observable_reduceAsync;
