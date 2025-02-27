import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance, returns } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import AbstractSink, {
  AbstractSink_delegate,
} from "../../Sink/__internal__/AbstractSink.js";
import DelegatingNonCompletingSink, {
  DelegatingNonCompletingSink_inner,
} from "../../Sink/__internal__/DelegatingNonCompletingSink.js";
import Deferable_lift from "./Deferable.lift.js";

class ConcatAllSink<T> extends AbstractSink<
  DeferableLike<T>,
  T,
  DelegatingNonCompletingSink<T>
> {
  [SinkLike_next](next: DeferableLike<T>): void {
    const sink = this[AbstractSink_delegate];
    next[DeferableLike_eval](sink);

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

const Deferable_concatAll: Deferable.Signature["concatAll"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(
    Deferable_lift((sink: SinkLike<T>) => {
      const innerSink = newInstance(DelegatingNonCompletingSink, sink);
      return newInstance(ConcatAllSink<T>, innerSink);
    }, true),
  ))();

export default Deferable_concatAll;
