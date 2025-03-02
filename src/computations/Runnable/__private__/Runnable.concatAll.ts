import {
  ComputationLike_isPure,
  ComputationWithSideEffectsType,
  RunnableLike,
  RunnableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import DelegatingNonCompletingSink, {
  DelegatingNonCompletingSink_inner,
} from "../../Sink/__internal__/DelegatingNonCompletingSink.js";
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

const Runnable_concatAll: Runnable.Signature["concatAll"] = (<T>(options?: {
  readonly innerType: typeof ComputationWithSideEffectsType;
}) =>
  Runnable_lift((sink: SinkLike<T>) => {
    const innerSink = newInstance(DelegatingNonCompletingSink, sink);
    return newInstance(ConcatAllSink<T>, innerSink);
  }, options?.innerType?.[ComputationLike_isPure] ?? true)) as Runnable.Signature["concatAll"];

export default Runnable_concatAll;
