import {
  ComputationBaseOf,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationOperatorWithSideEffects,
  PureComputationOperator,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class LiftedRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    public readonly src: RunnableLike<any>,
    public readonly ops: readonly Function1<SinkLike<any>, SinkLike<any>>[],
    config?: {
      [ComputationLike_isPure]?: boolean;
    },
  ) {
    this[ComputationLike_isPure] = Computation.isPure(config ?? {});
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    this.src[RunnableLike_eval](pipeUnsafe(sink, ...this.ops));
  }
}

interface RunnableLift {
  lift<TA, TB>(): (
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
  ) => PureComputationOperator<Runnable.Computation, TA, TB>;

  lift<TA, TB>(config: {
    [ComputationLike_isPure]: true;
  }): (
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
  ) => PureComputationOperator<Runnable.Computation, TA, TB>;

  lift<TA, TB>(config: {
    [ComputationLike_isPure]: false;
  }): (
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
  ) => ComputationOperatorWithSideEffects<Runnable.Computation, TA, TB>;

  lift<TA, TB>(config: {
    [ComputationLike_isPure]: boolean;
  }): (
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
  ) => Function1<
    ComputationBaseOf<Runnable.Computation, TA>,
    ComputationBaseOf<Runnable.Computation, TB>
  >;
}

const Runnable_lift: RunnableLift["lift"] = (<TA, TB>(config?: {
    [ComputationLike_isPure]?: boolean;
  }) =>
  (
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
  ): Function1<RunnableLike<TA>, RunnableLike<TB>> =>
  (source: RunnableLike<TA>) => {
    const src: RunnableLike<any> = (source as any).src ?? source;
    const ops = [operator, ...((source as any).ops ?? [])];

    const liftedConfig = {
      [ComputationLike_isPure]:
        Computation.isPure(source) && Computation.isPure(config ?? {}),
    };

    return newInstance(LiftedRunnable, src, ops, liftedConfig);
  }) as RunnableLift["lift"];

export default Runnable_lift;
