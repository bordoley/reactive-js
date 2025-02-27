import {
  ComputationLike_isPure,
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { RunnableLike } from "../../../concurrent.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";
import Observable_takeWhile from "./Observable.takeWhile.js";

class RunnableDeferable<T> implements DeferableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  constructor(
    private readonly obs: RunnableLike<T>,
    private readonly options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly maxMicroTaskTicks?: number;
    },
  ) {
    this[ComputationLike_isPure] = obs[ComputationLike_isPure] ?? true;
  }

  [DeferableLike_eval](sink: SinkLike<T>): void {
    pipe(
      this.obs,
      Observable_takeWhile<T>(_ => !sink[SinkLike_isComplete]),
      Observable_forEach(bindMethod(sink, SinkLike_next)),
      Observable_run(this.options),
    );

    sink[SinkLike_complete]();
  }
}

const Observable_toDeferable: Observable.Signature["toDeferable"] =
  <T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }) =>
  (runnable: RunnableLike<T>) =>
    newInstance(RunnableDeferable, runnable, options);

export default Observable_toDeferable;
