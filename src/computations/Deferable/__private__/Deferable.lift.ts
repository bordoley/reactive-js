import {
  ComputationLike_isPure,
  ComputationWithSideEffectsOperator,
  DeferableLike,
  DeferableLike_eval,
  DeferableWithSideEffectsLike,
  PureComputationOperator,
  SinkLike,
} from "../../../computations.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import type {
  DeferableComputation,
  DeferableWithSideEffectsComputation,
} from "../../Deferable.js";

class LiftedDeferable<T> implements DeferableLike<T> {
  readonly [ComputationLike_isPure]: boolean;

  constructor(
    public readonly src: DeferableLike<any>,
    public readonly ops: readonly Function1<SinkLike<any>, SinkLike<any>>[],
    isPure: boolean,
  ) {
    this[ComputationLike_isPure] = isPure;
  }

  [DeferableLike_eval](sink: SinkLike<T>): void {
    this.src[DeferableLike_eval](pipeUnsafe(sink, ...this.ops));
  }
}

interface DeferableLift {
  lift<TA, TB, TComputationType extends DeferableLike = DeferableLike>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure: true,
  ): PureComputationOperator<DeferableLike, DeferableComputation, TA, TB>;
  lift<TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure: false,
  ): ComputationWithSideEffectsOperator<
    DeferableLike,
    DeferableComputation,
    DeferableWithSideEffectsLike,
    DeferableWithSideEffectsComputation,
    TA,
    TB
  >;
}

const Deferable_lift: DeferableLift["lift"] = (<TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
    isPure: boolean,
  ): Function1<DeferableLike<TA>, DeferableLike<TB>> =>
  (source: DeferableLike<TA>) => {
    const src: DeferableLike<any> = (source as any).src ?? source;
    const ops = [operator, ...((source as any).ops ?? [])];

    return newInstance(LiftedDeferable, src, ops, isPure);
  }) as DeferableLift["lift"];

export default Deferable_lift;
