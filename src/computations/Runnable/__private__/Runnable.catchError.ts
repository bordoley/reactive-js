import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  HigherOrderInnerComputationLike,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  error,
  isNone,
  isSome,
  newInstance,
  none,
} from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

class CatchErrorRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isDeferred]: false = false as const;

  constructor(
    private readonly s: RunnableLike<T>,
    private readonly onError:
      | SideEffect1<Error>
      | Function1<Error, RunnableLike<T>>,
    isPure: boolean,
  ) {
    this[ComputationLike_isPure] = Computation.isPure(s) && isPure;
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const delegatingSink =
      Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink);

    this.s[RunnableLike_eval](delegatingSink);

    const err = delegatingSink[DisposableLike_error];

    if (isNone(err)) {
      sink[SinkLike_complete]();
      return;
    }

    let action: Optional<RunnableLike<T>> = none;

    try {
      action = this.onError(err) as Optional<RunnableLike>;
    } catch (e) {
      sink[DisposableLike_dispose](error([error(e), err]));
    }
    if (isSome(action) && !sink[SinkLike_isCompleted]) {
      action[RunnableLike_eval](sink);
      sink[SinkLike_complete]();
    } else {
      sink[SinkLike_complete]();
    }
  }
}

const Runnable_catchError: Runnable.Signature["catchError"] = (<
    T,
    TInnerLike extends HigherOrderInnerComputationLike,
  >(
    onError: SideEffect1<Error> | Function1<Error, RunnableLike<T>>,
    options?: {
      readonly innerType: TInnerLike;
    },
  ) =>
  (runnable: RunnableLike<T>) =>
    newInstance(
      CatchErrorRunnable<T>,
      runnable,
      onError,
      options?.innerType?.[ComputationLike_isPure] ?? true,
    )) as Runnable.Signature["catchError"];

export default Runnable_catchError;
