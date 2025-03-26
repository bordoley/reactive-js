import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class ConcatRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(private readonly s: readonly RunnableLike<T>[]) {
    this[ComputationLike_isPure] = Computation.areAllPure(s);
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const delegatingSink = pipe(
      Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink),
      Disposable.addTo(sink),
    );

    for (const src of this.s) {
      src[RunnableLike_eval](delegatingSink);

      if (sink[SinkLike_isCompleted]) {
        break;
      }
    }
    sink[SinkLike_complete]();
  }
}

const Runnable_concat: Runnable.Signature["concat"] = (<T>(
  ...computations: readonly RunnableLike<T>[]
) =>
  newInstance(
    ConcatRunnable<T>,
    computations,
  )) as unknown as Runnable.Signature["concat"];

export default Runnable_concat;
