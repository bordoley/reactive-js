import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
  SourceLike_subscribe,
  SynchronousComputationOf,
} from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { SinkLike, VirtualTimeSchedulerLike_run } from "../../../utils.js";
import type * as Observable from "../../Observable.js";

class SynchronousObservableRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]?: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;

  constructor(
    private readonly s: SynchronousComputationOf<Observable.Computation, T>,
    private readonly o?: {
      readonly maxMicroTaskTicks?: number;
    },
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const scheduler = VirtualTimeScheduler.create(this.o);
    const observer = pipe(sink, Sink.toObserver(scheduler));

    this.s[SourceLike_subscribe](observer);

    scheduler[VirtualTimeSchedulerLike_run]();
  }
}

const Observable_toRunnable: Observable.Signature["toRunnable"] = (<
    T,
  >(options?: {
    readonly maxMicroTaskTicks?: number;
  }) =>
  (runnable: SynchronousComputationOf<Observable.Computation, T>) =>
    newInstance(
      SynchronousObservableRunnable,
      runnable,
      options,
    )) as Observable.Signature["toRunnable"];

export default Observable_toRunnable;
