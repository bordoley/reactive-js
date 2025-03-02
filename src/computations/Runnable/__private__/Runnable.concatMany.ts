import {
  ComputationLike_isInteractive,
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
} from "../../../computations.js";
import { newInstance, pick } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";

class ConcatManyRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isInteractive]: false = false as const;

  constructor(private readonly s: readonly RunnableLike<T>[]) {
    this[ComputationLike_isPure] = s.every(pick(ComputationLike_isPure));
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

const Runnable_concatMany: Runnable.Signature["concatMany"] = (<T>(
  computations: readonly RunnableLike<T>[],
) =>
  newInstance(
    ConcatManyRunnable<T>,
    computations,
  )) as Runnable.Signature["concatMany"];

export default Runnable_concatMany;
