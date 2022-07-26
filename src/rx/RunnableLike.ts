import {
  Lift,
  TReactive,
  reactive,
} from "../__internal__/containers/StatefulContainerLikeInternal";
import { Function1, newInstance, pipe, pipeUnsafe } from "../functions";
import { ReactiveContainerLike_sinkInto, RunnableLike } from "../rx";
import { SinkLike } from "../util";
import { dispose } from "../util/DisposableLike";
import { sourceFrom } from "./ReactiveContainerLike";

const lift = /*@__PURE__*/ (() => {
  class LiftedRunnable<T> implements RunnableLike<T> {
    constructor(
      readonly src: RunnableLike<any>,
      readonly operators: readonly Function1<SinkLike<any>, SinkLike<any>>[],
    ) {}

    [ReactiveContainerLike_sinkInto](sink: SinkLike<T>) {
      pipe(
        pipeUnsafe(sink, ...this.operators) as SinkLike<T>,
        sourceFrom(this.src),
        dispose(),
      );
    }
  }

  return <TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>) =>
    (runnable: RunnableLike<TA>) => {
      const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;

      const allFunctions =
        runnable instanceof LiftedRunnable
          ? [operator, ...runnable.operators]
          : [operator];

      return newInstance(LiftedRunnable, src, allFunctions);
    };
})();

export const liftT: Lift<RunnableLike<unknown>, TReactive> = {
  lift,
  variance: reactive,
};
