import {
  Lift,
  TReactive,
} from "../../../containers/__internal__/containers.internal";
import { Function1, newInstance, pipeUnsafe } from "../../../functions";
import {
  ReactiveContainerLike_sinkInto,
  RunnableLike,
  SinkLike,
} from "../../../rx";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";

const RunnableLike__lift: Lift<RunnableLike, TReactive>["lift"] =
  /*@__PURE__*/ (() => {
    class LiftedRunnable<TA, TB> implements RunnableLike<TB> {
      constructor(
        readonly src: RunnableLike<TA>,
        readonly operators: readonly Function1<SinkLike<any>, SinkLike<any>>[],
      ) {}

      [ReactiveContainerLike_sinkInto](sink: SinkLike<TB>) {
        pipeUnsafe(sink, ...this.operators, SinkLike__sourceFrom(this.src));
      }
    }

    return <TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>) =>
      (runnable: RunnableLike<TA>): RunnableLike<TB> => {
        const src =
          runnable instanceof LiftedRunnable ? runnable.src : runnable;

        const allFunctions =
          runnable instanceof LiftedRunnable
            ? [operator, ...runnable.operators]
            : [operator];

        return newInstance(LiftedRunnable, src, allFunctions);
      };
  })();

export default RunnableLike__lift;
