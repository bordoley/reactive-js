import {
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { alwaysTrue, error, newInstance } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../../utils/Sink/__internal__/DelegatingNonCompletingSink.js";
import { SinkLike, SinkLike_complete } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class RetryRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;

  constructor(
    private readonly s: RunnableLike<T>,
    private readonly p: (count: number, error: Error) => boolean,
  ) {
    this[ComputationLike_isPure] = Computation.isPure(s);
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const source = this.s;
    const predicate = this.p;
    const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);

    let cnt = 0;
    while (true) {
      try {
        source[RunnableLike_eval](delegatingSink);
        break;
      } catch (e) {
        cnt++;
        if (!predicate(cnt, error(e))) {
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
