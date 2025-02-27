import {
  ComputationLike_isPure,
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
} from "../../../computations.js";
import { alwaysTrue, error, newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";

class RetryDeferable<T> implements DeferableLike<T> {
  readonly [ComputationLike_isPure]: boolean;

  constructor(
    private readonly s: DeferableLike<T>,
    private readonly p: (count: number, error: Error) => boolean,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [DeferableLike_eval](sink: SinkLike<T>): void {
    const source = this.s;
    const predicate = this.p;
    const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);

    let cnt = 0;
    while (true) {
      try {
        source[DeferableLike_eval](delegatingSink);
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

const Deferable_retry: Deferable.Signature["retry"] =
  <T>(shouldRetry?: (count: number, error: Error) => boolean) =>
  (deferable: DeferableLike<T>) =>
    newInstance(RetryDeferable, deferable, shouldRetry ?? alwaysTrue);

export default Deferable_retry;
