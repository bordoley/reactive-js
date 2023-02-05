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

const LiftedRunnable_src = Symbol("LiftedRunnable_src");

const LiftedRunnable_operators = Symbol("LiftedRunnable_operators");

class LiftedRunnable<TA, TB> implements RunnableLike<TB> {
  readonly [LiftedRunnable_src]: RunnableLike<TA>;
  readonly [LiftedRunnable_operators]: readonly Function1<
    SinkLike<any>,
    SinkLike<any>
  >[];

  constructor(
    src: RunnableLike<TA>,
    operators: readonly Function1<SinkLike<any>, SinkLike<any>>[],
  ) {
    this[LiftedRunnable_src] = src;
    this[LiftedRunnable_operators] = operators;
  }

  [ReactiveContainerLike_sinkInto](sink: SinkLike<TB>) {
    pipeUnsafe(
      sink,
      ...this[LiftedRunnable_operators],
      Sink_sourceFrom(this[LiftedRunnable_src]),
    );
  }
}

const Runnable_lift: Lift<RunnableLike, TReactive>["lift"] =
  /*@__PURE__*/ (() => {
    return <TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>) =>
      (runnable: RunnableLike<TA>): RunnableLike<TB> => {
        const src =
          runnable instanceof LiftedRunnable
            ? runnable[LiftedRunnable_src]
            : runnable;

        const allFunctions =
          runnable instanceof LiftedRunnable
            ? [operator, ...runnable[LiftedRunnable_operators]]
            : [operator];

        return newInstance(LiftedRunnable, src, allFunctions);
      };
  })();

export default Runnable_lift;
