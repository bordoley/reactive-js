import {
  ComputationLike_isInteractive,
  ComputationLike_isPure,
  RunnableLike,
  RunnableLike_eval,
  SinkLike,
  SinkLike_complete,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  error,
  isSome,
  newInstance,
  none,
} from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";

class CatchErrorRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isInteractive]: false = false as const;

  constructor(
    private readonly s: RunnableLike<T>,
    private readonly onError:
      | SideEffect1<Error>
      | Function1<Error, RunnableLike<T>>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure] ?? true;
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    try {
      this.s[RunnableLike_eval](sink);
    } catch (e) {
      const err = error(e);
      let action: Optional<RunnableLike<T>> = none;

      try {
        action = this.onError(err) as Optional<RunnableLike<T>>;
      } catch (e) {
        throw error([error(e), err]);
      }

      if (isSome(action)) {
        action[RunnableLike_eval](sink);
      }
      sink[SinkLike_complete]();
    }
  }
}

const Runnable_catchError: Runnable.Signature["catchError"] =
  <T>(onError: SideEffect1<Error> | Function1<Error, RunnableLike<T>>) =>
  (deferable: RunnableLike<T>) =>
    newInstance(CatchErrorRunnable<T>, deferable, onError);

export default Runnable_catchError;
