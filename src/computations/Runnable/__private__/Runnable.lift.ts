import {
  ComputationLike_isInteractive,
  ComputationLike_isPure,
  ComputationOperator,
  ComputationWithSideEffectsOperator,
  RunnableLike,
  RunnableLike_eval,
  RunnableWithSideEffectsLike,
  SinkLike,
} from "../../../computations.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import type {
  RunnableComputation,
  RunnableWithSideEffectsComputation,
} from "../../Runnable.js";

class LiftedRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isInteractive]: false = false as const;

  constructor(
    public readonly src: RunnableLike<any>,
    public readonly ops: readonly Function1<SinkLike<any>, SinkLike<any>>[],
    isPure: boolean,
  ) {
    this[ComputationLike_isPure] = isPure;
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    this.src[RunnableLike_eval](pipeUnsafe(sink, ...this.ops));
  }
}

interface RunnableLift {
  lift<TA, TB, TComputationType extends RunnableLike = RunnableLike>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure: true,
  ): ComputationOperator<RunnableLike, RunnableComputation, TA, TB>;
  lift<TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure: false,
  ): ComputationWithSideEffectsOperator<
    RunnableLike,
    RunnableComputation,
    RunnableWithSideEffectsLike,
    RunnableWithSideEffectsComputation,
    TA,
    TB
  >;
}

const Runnable_lift: RunnableLift["lift"] = (<TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure: boolean,
  ): Function1<RunnableLike<TA>, RunnableLike<TB>> =>
  (source: RunnableLike<TA>) => {
    const src: RunnableLike<any> = (source as any).src ?? source;
    const ops = [operator, ...((source as any).ops ?? [])];

    return newInstance(LiftedRunnable, src, ops, isPure);
  }) as RunnableLift["lift"];

export default Runnable_lift;
