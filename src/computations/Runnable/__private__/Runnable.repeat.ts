import {
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
} from "../../../computations.js";
import {
  Predicate,
  alwaysTrue,
  isFunction,
  isNone,
  newInstance,
} from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";

class RepeatRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  constructor(
    private readonly s: RunnableLike<T>,
    private readonly p: Predicate<number>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const source = this.s;
    const predicate = this.p;
    const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);

    let cnt = 0;
    while (true) {
      source[RunnableLike_eval](delegatingSink);
      cnt++;
      if (sink[SinkLike_isComplete] || !predicate(cnt)) {
        break;
      }
    }
    sink[SinkLike_complete]();
  }
}

const Runnable_repeat: Runnable.Signature["repeat"] = <T>(
  predicate?: Predicate<number> | number,
) => {
  const repeatPredicate = isFunction(predicate)
    ? predicate
    : isNone(predicate)
      ? alwaysTrue
      : (count: number) => count < predicate;

  return (deferable: RunnableLike<T>) =>
    newInstance(RepeatRunnable, deferable, repeatPredicate);
};

export default Runnable_repeat;
