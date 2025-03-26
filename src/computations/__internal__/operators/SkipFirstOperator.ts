import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, none } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import { DisposableLike, EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  skipCount: Optional<number>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
  const SkipFirstOperator_count = Symbol("SkipFirstOperator_count");

  interface TProperties {
    [SkipFirstOperator_count]: number;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TSubscription, T>()),
    function SkipFirstOperator(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      skipCount: Optional<number>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedOperatorMixin<TSubscription, T>(), this, delegate);
      this[SkipFirstOperator_count] = clampPositiveInteger(skipCount ?? 1);

      return this;
    },
    props<TProperties>({
      [SkipFirstOperator_count]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
        next: T,
      ) {
        this[SkipFirstOperator_count] = max(
          this[SkipFirstOperator_count] - 1,
          -1,
        );

        const shouldEmit = this[SkipFirstOperator_count] < 0;

        if (shouldEmit) {
          this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
            next,
          );
        }
      },
    }),
  );
})();
