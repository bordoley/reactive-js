import {
  ComputationBaseOf,
  ComputationLike_isPure,
  ComputationOperatorWithSideEffects,
  PureComputationOperator,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { SinkLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";

class LiftedRunnable<TIn, TOut> implements RunnableLike<TOut> {
  readonly [ComputationLike_isPure]: boolean;

  constructor(
    public readonly src: RunnableLike<TIn>,
    public readonly ops: readonly Function1<
      LiftedSinkLike<SinkLike, any>,
      LiftedSinkLike<SinkLike, any>
    >[],
    config?: {
      [ComputationLike_isPure]?: boolean;
    },
  ) {
    this[ComputationLike_isPure] = Computation.isPure(config ?? {});
  }

  [RunnableLike_eval](sink: SinkLike<TOut>): void {
    const destinationOp: SinkLike<TIn> = pipeUnsafe(
      sink,
      Sink.toLiftedSink(),
      ...this.ops,
    );

    this.src[RunnableLike_eval](destinationOp);
  }
}

interface RunnableLift {
  lift<TA, TB>(): (
    operator: Function1<
      LiftedSinkLike<SinkLike, TB>,
      LiftedSinkLike<SinkLike, TA>
    >,
  ) => PureComputationOperator<Runnable.Computation, TA, TB>;

  lift<TA, TB>(config: {
    [ComputationLike_isPure]: true;
  }): (
    operator: Function1<
      LiftedSinkLike<SinkLike, TB>,
      LiftedSinkLike<SinkLike, TA>
    >,
  ) => PureComputationOperator<Runnable.Computation, TA, TB>;

  lift<TA, TB>(config: {
    [ComputationLike_isPure]: false;
  }): (
    operator: Function1<
      LiftedSinkLike<SinkLike, TB>,
      LiftedSinkLike<SinkLike, TA>
    >,
  ) => ComputationOperatorWithSideEffects<Runnable.Computation, TA, TB>;

  lift<TA, TB>(config: {
    [ComputationLike_isPure]: boolean;
  }): (
    operator: Function1<
      LiftedSinkLike<SinkLike, TB>,
      LiftedSinkLike<SinkLike, TA>
    >,
  ) => Function1<
    ComputationBaseOf<Runnable.Computation, TA>,
    ComputationBaseOf<Runnable.Computation, TB>
  >;
}

const Runnable_lift: RunnableLift["lift"] = (<TA, TB>(config?: {
    [ComputationLike_isPure]?: boolean;
  }) =>
  (
    operator: Function1<
      LiftedSinkLike<SinkLike, TB>,
      LiftedSinkLike<SinkLike, TA>
    >,
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
