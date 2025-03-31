import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { Optional, newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import {
  DisposableLike_dispose,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class ConcatRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: Optional<boolean>;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(private readonly s: readonly RunnableLike<T>[]) {
    this[ComputationLike_isPure] = Computation.areAllPure(s);
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    for (const src of this.s) {
      const delegatingSink = pipe(
        Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink),
        Disposable.addTo(sink),
      );
      src[RunnableLike_eval](delegatingSink);
      delegatingSink[DisposableLike_dispose]();

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
