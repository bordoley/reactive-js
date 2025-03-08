import {
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../../utils/Sink/__internal__/DelegatingNonCompletingSink.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class ConcatRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;

  constructor(private readonly s: readonly RunnableLike<T>[]) {
    this[ComputationLike_isPure] = Computation.areAllPure(s);
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);

    for (const src of this.s) {
      src[RunnableLike_eval](delegatingSink);

      if (sink[SinkLike_isComplete]) {
        break;
      }
    }
    sink[SinkLike_complete]();
  }
}

const Runnable_concat: Runnable.Signature["concat"] = (<T>(
  ...computations: readonly RunnableLike<T>[]
) =>
  newInstance(ConcatRunnable<T>, computations)) as Runnable.Signature["concat"];

export default Runnable_concat;
