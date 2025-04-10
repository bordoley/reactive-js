import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import {
  Optional,
  SideEffect1,
  error,
  isFunction,
  isSome,
  newInstance,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
  SinkLike,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class WithEffectRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: Optional<boolean>;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: RunnableLike<T>,
    private readonly e: () =>
      | void
      | DisposableLike
      | SideEffect1<Optional<Error>>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const source = this.s;
    const effect = this.e;

    try {
      const cleanup = effect();
      if (isSome(cleanup) && isFunction(cleanup)) {
        sink[DisposableContainerLike_add](cleanup);
      } else if (isSome(cleanup)) {
        pipe(sink, Disposable.add(cleanup as DisposableLike));
      }
    } catch (e) {
      sink[DisposableLike_dispose](error(e));
    }
    source[RunnableLike_eval](sink);
  }
}

const Runnable_withEffect: Runnable.Signature["withEffect"] = (<T>(
    effect: () => void | DisposableLike | SideEffect1<Optional<Error>>,
  ) =>
  (deferable: RunnableLike<T>) =>
    newInstance(
      WithEffectRunnable,
      deferable,
      effect,
    )) as Runnable.Signature["withEffect"];

export default Runnable_withEffect;
