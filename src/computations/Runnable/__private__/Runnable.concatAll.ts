import {
  ComputationLike_isPure,
  HigherOrderInnerComputationLike,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../../utils/Sink/__internal__/AbstractSink.js";
import DelegatingNonCompletingSink, {
  DelegatingNonCompletingSink_inner,
} from "../../../utils/Sink/__internal__/DelegatingNonCompletingSink.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class ConcatAllSink<T> extends AbstractSink<
  RunnableLike<T>,
  T,
  DelegatingNonCompletingSink<T>
> {
  [SinkLike_next](next: RunnableLike<T>): void {
    const sink = this[AbstractSink_delegate];
    next[RunnableLike_eval](sink);

    if (sink[DelegatingNonCompletingSink_inner][SinkLike_isComplete]) {
      this[SinkLike_complete]();
    }
  }

  [SinkLike_complete]() {
    super[SinkLike_complete]();
    this[AbstractSink_delegate][DelegatingNonCompletingSink_inner][
      SinkLike_complete
    ]();
  }
}

const Runnable_concatAll: Runnable.Signature["concatAll"] = (<
  T,
  TInnerType extends HigherOrderInnerComputationLike,
>(options?: {
  readonly innerType: TInnerType;
}) =>
  Runnable_lift((sink: SinkLike<T>) => {
    const innerSink = newInstance(DelegatingNonCompletingSink, sink);
    return newInstance(ConcatAllSink<T>, innerSink);
  }, options?.innerType?.[ComputationLike_isPure] ?? true)) as Runnable.Signature["concatAll"];

export default Runnable_concatAll;
