import {
  ComputationLike_isPure,
  DeferableLike,
  DeferableLike_eval,
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
import type * as Deferable from "../../Deferable.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";

class RepeatDeferable<T> implements DeferableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  constructor(
    private readonly s: DeferableLike<T>,
    private readonly p: Predicate<number>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [DeferableLike_eval](sink: SinkLike<T>): void {
    const source = this.s;
    const predicate = this.p;
    const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);

    let cnt = 0;
    while (true) {
      source[DeferableLike_eval](delegatingSink);
      cnt++;
      if (sink[SinkLike_isComplete] || !predicate(cnt)) {
        break;
      }
    }
    sink[SinkLike_complete]();
  }
}

const Deferable_repeat: Deferable.Signature["repeat"] = <T>(
  predicate?: Predicate<number> | number,
) => {
  const repeatPredicate = isFunction(predicate)
    ? predicate
    : isNone(predicate)
      ? alwaysTrue
      : (count: number) => count < predicate;

  return (deferable: DeferableLike<T>) =>
    newInstance(RepeatDeferable, deferable, repeatPredicate);
};

export default Deferable_repeat;
