import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isInteractive,
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { SynchronousObservableLike } from "../../../concurrent.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";
import Observable_takeWhile from "./Observable.takeWhile.js";

class SynchronousObservableRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isInteractive]: false = false as const;

  constructor(
    private readonly obs: SynchronousObservableLike<T>,
    private readonly options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly maxMicroTaskTicks?: number;
    },
  ) {
    this[ComputationLike_isPure] = Computation.isPure(obs);
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    pipe(
      this.obs,
      Observable_takeWhile<T>(_ => !sink[SinkLike_isComplete]),
      Observable_forEach(bindMethod(sink, SinkLike_next)),
      Observable_run(this.options),
    );

    sink[SinkLike_complete]();
  }
}

const Observable_toRunnable: Observable.Signature["toRunnable"] =
  <T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }) =>
  (runnable: SynchronousObservableLike<T>) =>
    newInstance(SynchronousObservableRunnable, runnable, options);

export default Observable_toRunnable;
