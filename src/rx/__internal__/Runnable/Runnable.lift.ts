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
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";

const Runnable_lift: Lift<RunnableLike, TReactive>["lift"] =
  /*@__PURE__*/ (() => {
    class LiftedRunnable<TA, TB> implements RunnableLike<TB> {
      constructor(
        readonly src: RunnableLike<TA>,
        readonly operators: readonly Function1<SinkLike<any>, SinkLike<any>>[],
      ) {}

      [ReactiveContainerLike_sinkInto](sink: SinkLike<TB>) {
        pipeUnsafe(sink, ...this.operators, Sink_sourceFrom(this.src));
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

export default Runnable_lift;
