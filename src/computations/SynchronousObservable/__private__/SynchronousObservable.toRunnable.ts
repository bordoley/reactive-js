import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationOf,
  RunnableLike,
  RunnableLike_eval,
  SourceLike_subscribe,
} from "../../../computations.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { SinkLike, VirtualTimeSchedulerLike_run } from "../../../utils.js";
import type * as SynchronousObservable from "../../SynchronousObservable.js";

class SynchronousObservableRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: Optional<boolean>;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: ComputationOf<SynchronousObservable.Computation, T>,
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

const SynchronousObservable_toRunnable: SynchronousObservable.Signature["toRunnable"] =
  (<T>(options?: { readonly maxMicroTaskTicks?: number }) =>
    (runnable: ComputationOf<SynchronousObservable.Computation, T>) =>
      newInstance(
        SynchronousObservableRunnable,
        runnable,
        options,
      )) as SynchronousObservable.Signature["toRunnable"];

export default SynchronousObservable_toRunnable;
