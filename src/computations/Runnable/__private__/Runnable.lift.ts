import {
  ComputationBaseOf,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationOperatorWithSideEffects,
  RunnableLike,
  RunnableLike_eval,
  StatefulSynchronousComputationOperator,
  StatelessComputationOperator,
} from "../../../computations.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class LiftedRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;

  constructor(
    public readonly src: RunnableLike<any>,
    public readonly ops: readonly Function1<SinkLike<any>, SinkLike<any>>[],
    isPure: boolean,
  ) {
    this[ComputationLike_isPure] = isPure && Computation.isPure(src);
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    this.src[RunnableLike_eval](pipeUnsafe(sink, ...this.ops));
  }
}

interface RunnableLift {
  lift<TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
  ): StatelessComputationOperator<Runnable.Computation, TA, TB>;
  lift<TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure: true,
  ): StatefulSynchronousComputationOperator<Runnable.Computation, TA, TB>;
  lift<TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure: false,
  ): ComputationOperatorWithSideEffects<Runnable.Computation, TA, TB>;
  lift<TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure: boolean,
  ): Function1<
    ComputationBaseOf<Runnable.Computation, TA>,
    ComputationBaseOf<Runnable.Computation, TB>
  >;
}

const Runnable_lift: RunnableLift["lift"] = (<TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure?: boolean,
  ): Function1<RunnableLike<TA>, RunnableLike<TB>> =>
  (source: RunnableLike<TA>) => {
    const src: RunnableLike<any> = (source as any).src ?? source;
    const ops = [operator, ...((source as any).ops ?? [])];

    return newInstance(
      LiftedRunnable,
      src,
      ops,
      (isPure ?? true) && Computation.isPure(source),
    );
  }) as RunnableLift["lift"];

export default Runnable_lift;
