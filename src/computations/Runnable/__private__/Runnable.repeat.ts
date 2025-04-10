import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import {
  Optional,
  Predicate,
  alwaysTrue,
  error,
  isFunction,
  isNone,
  newInstance,
} from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import {
  DisposableLike_dispose,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class RepeatRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: Optional<boolean>;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: RunnableLike<T>,
    private readonly p: Predicate<number>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const source = this.s;
    const predicate = this.p;

    let cnt = 0;
    while (true) {
      const delegatingSink = Sink.createDelegatingNonCompleting(sink);

      source[RunnableLike_eval](delegatingSink);
      cnt++;

      try {
        if (sink[SinkLike_isCompleted] || !predicate(cnt)) {
          break;
        }
      } catch (e) {
        sink[DisposableLike_dispose](error(e));
        break;
      }
    }
    sink[SinkLike_complete]();
  }
}

const Runnable_repeat: Runnable.Signature["repeat"] = (<T>(
  predicate?: Predicate<number> | number,
) => {
  const repeatPredicate = isFunction(predicate)
    ? predicate
    : isNone(predicate)
      ? alwaysTrue
      : (count: number) => count < predicate;

  return (deferable: RunnableLike<T>) =>
    newInstance(RepeatRunnable, deferable, repeatPredicate);
}) as Runnable.Signature["repeat"];

export default Runnable_repeat;
