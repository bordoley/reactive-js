import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
} from "../../../computations.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";

class LiftedDeferable<T> implements DeferableLike<T> {
  constructor(
    public readonly src: DeferableLike<any>,
    public readonly ops: readonly Function1<SinkLike<any>, SinkLike<any>>[],
  ) {}

  [DeferableLike_eval](sink: SinkLike<T>): void {
    this.src[DeferableLike_eval](pipeUnsafe(sink, ...this.ops));
  }
}

const Deferable_lift =
  <TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
  ): Function1<DeferableLike<TA>, DeferableLike<TB>> =>
  (source: DeferableLike<TA>) => {
    const src: DeferableLike<any> = (source as any).src ?? source;
    const ops = [operator, ...((source as any).ops ?? [])];

    return newInstance(LiftedDeferable, src, ops);
  };

export default Deferable_lift;
