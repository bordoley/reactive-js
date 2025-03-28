import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { alwaysTrue, error, newInstance } from "../../../functions.js";
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

class RetryRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;

  constructor(
    private readonly s: RunnableLike<T>,
    private readonly p: (count: number, error: Error) => boolean,
  ) {
    this[ComputationLike_isPure] = Computation.isPure(s);
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const source = this.s;
    const predicate = this.p;

    let cnt = 0;
    while (true) {
      try {
        const delegatingSink =
          Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink);
        source[RunnableLike_eval](delegatingSink);

        Disposable.raiseIfDisposedWithError(delegatingSink);

        break;
      } catch (e) {
        if (sink[SinkLike_isCompleted]) {
          break;
        }

        cnt++;
        try {
          if (!predicate(cnt, error(e))) {
            sink[DisposableLike_dispose](error(e));
            break;
          }
        } catch (ePredicate) {
          sink[DisposableLike_dispose](error([e, ePredicate]));
          break;
        }
      }
    }
    sink[SinkLike_complete]();
  }
}

const Runnable_retry: Runnable.Signature["retry"] = (<T>(
    shouldRetry?: (count: number, error: Error) => boolean,
  ) =>
  (deferable: RunnableLike<T>) =>
    newInstance(
      RetryRunnable,
      deferable,
      shouldRetry ?? alwaysTrue,
    )) as Runnable.Signature["retry"];

export default Runnable_retry;
