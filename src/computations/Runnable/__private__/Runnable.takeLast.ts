import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { Optional, invoke, newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import {
  EnumeratorLike_current,
  SinkLike,
  SyncEnumeratorLike_moveNext,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import { Runnable_genPure } from "./Runnable.gen.js";

class TakeLastRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: Optional<boolean>;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: RunnableLike<T>,
    private readonly c: number,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const count = this.c;

    const takeLastSink = pipe(
      Consumer.takeLast<T>(count),
      Disposable.addTo(sink),
      DisposableContainer.onComplete(() =>
        pipe(
          Runnable_genPure(function* TakeLast() {
            while (takeLastSink[SyncEnumeratorLike_moveNext]()) {
              yield takeLastSink[EnumeratorLike_current];
            }
          }),
          invoke(RunnableLike_eval, sink),
        ),
      ),
    );

    pipe(this.s, invoke(RunnableLike_eval, takeLastSink));
  }
}

const Runnable_takeLast: Runnable.Signature["takeLast"] = (<T>(options?: {
    readonly count?: number;
  }) =>
  (runnable: RunnableLike<T>) =>
    newInstance(
      TakeLastRunnable,
      runnable,
      options?.count ?? 1,
    )) as Runnable.Signature["takeLast"];

export default Runnable_takeLast;
