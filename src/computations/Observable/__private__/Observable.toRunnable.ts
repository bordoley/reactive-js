import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
  SynchronousComputationOf,
} from "../../../computations.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";
import {
  BackpressureStrategy,
  ListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_last from "./Observable.last.js";
import Observable_takeWhile from "./Observable.takeWhile.js";

class SynchronousObservableRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;

  constructor(
    private readonly obs: SynchronousComputationOf<Observable.Computation, T>,
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
      Observable_takeWhile<T>(_ => !sink[SinkLike_isCompleted]),
      Observable_forEach(bindMethod(sink, ListenerLike_notify)),
      Observable_last(this.options),
    );

    sink[SinkLike_complete]();
  }
}

const Observable_toRunnable: Observable.Signature["toRunnable"] = (<
    T,
  >(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }) =>
  (runnable: SynchronousComputationOf<Observable.Computation, T>) =>
    newInstance(
      SynchronousObservableRunnable,
      runnable,
      options,
    )) as Observable.Signature["toRunnable"];

export default Observable_toRunnable;
