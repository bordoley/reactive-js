import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  HigherOrderInnerComputationLike,
  RunnableLike,
  RunnableLike_eval,
} from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DelegatingListenerLike_delegate } from "../../../utils/__mixins__/DelegatingListenerMixin.js";
import { DelegatingSinkLike } from "../../../utils/__mixins__/DelegatingSinkMixin.js";
import { LiftedListenerLike_delegate } from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
  LiftedSinkLike_complete,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  ListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

export const createConcatAllSink: <T>(
  o: SinkLike<T>,
) => SinkLike<RunnableLike<T>> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin()),
    function ConcatAllSink(
      this: unknown,
      innerSink: SinkLike<T>,
    ): SinkLike<RunnableLike<T>> {
      const delegate =
        Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(innerSink);

      init(LiftedSinkMixin(), this, delegate);

      return this;
    },
    props(),
    proto({
      [ListenerLike_notify](
        this: LiftedSinkLike<
          RunnableLike<T>,
          T,
          DelegatingSinkLike<T, SinkLike<T>>
        >,
        next: RunnableLike<T>,
      ): void {
        const sink = this[LiftedListenerLike_delegate];
        next[RunnableLike_eval](sink);

        if (sink[SinkLike_isCompleted]) {
          this[SinkLike_complete]();
        }
      },
      [SinkLike_complete](
        this: LiftedSinkLike<
          RunnableLike<T>,
          T,
          DelegatingSinkLike<T, SinkLike<T>>
        >,
      ) {
        this[LiftedSinkLike_complete]();

        this[LiftedListenerLike_delegate][DelegatingListenerLike_delegate][
          SinkLike_complete
        ]();
      },
    }),
  ))();

const Runnable_concatAll: Runnable.Signature["concatAll"] = (<
  T,
  TInnerLike extends HigherOrderInnerComputationLike,
>(options?: {
  readonly innerType: TInnerLike;
}) =>
  pipe(
    createConcatAllSink,
    Runnable_lift<RunnableLike<T>, T>(
      options?.innerType as {
        [ComputationLike_isPure]: boolean;
      },
    ),
  )) as Runnable.Signature["concatAll"];

export default Runnable_concatAll;
