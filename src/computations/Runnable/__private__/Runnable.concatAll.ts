import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DelegatingSinkMixin, {
  DelegatingSinkLike,
} from "../../../utils/__mixins__/DelegatingSinkMixin.js";
import {
  DisposableLike_dispose,
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Runnable from "../../Runnable.js";

const createConcatAllSink: <T>(
  delegate: SinkLike<T>,
) => SinkLike<RunnableLike<T>> = (<T>() => {
  return mixInstanceFactory(
    include(DelegatingDisposableMixin, DelegatingSinkMixin()),
    function RunnableConcatAllSink(
      this: Pick<SinkLike<RunnableLike<T>>, typeof EventListenerLike_notify>,
      delegate: SinkLike<T>,
    ): SinkLike<RunnableLike<T>> {
      init(DelegatingDisposableMixin, this, delegate);
      init(DelegatingSinkMixin(), this, delegate);

      return this;
    },
    props(),
    proto({
      [EventListenerLike_notify](
        this: DelegatingSinkLike<RunnableLike<T>, T>,
        next: RunnableLike<T>,
      ): void {
        const sink = this[DelegatingEventListenerLike_delegate];
        const delegatingSink = pipe(
          Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink),
          Disposable.addTo(sink),
        );

        next[RunnableLike_eval](sink);
        delegatingSink[DisposableLike_dispose]();
      },
    }),
  );
})();

class ConcatAllRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isPure]: boolean;
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: RunnableLike<RunnableLike<T>>,
    innerType: {
      [ComputationLike_isPure]?: boolean;
    },
  ) {
    this[ComputationLike_isPure] =
      Computation.isPure(s) && Computation.isPure(innerType);
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    const delegateSink = createConcatAllSink(sink);
    this.s[RunnableLike_eval](delegateSink);
    sink[SinkLike_complete]();
  }
}

const Runnable_concatAll: Runnable.Signature["concatAll"] = (<T>(innerType?: {
    [ComputationLike_isPure]?: boolean;
  }) =>
  (runnable: RunnableLike<RunnableLike<T>>) =>
    newInstance(
      ConcatAllRunnable,
      runnable,
      innerType ?? {},
    )) as Runnable.Signature["concatAll"];

export default Runnable_concatAll;
