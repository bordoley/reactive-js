import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, none } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import { DisposableLike } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedOperatorLike<TSubscription, T>,
  skipCount: Optional<number>,
) => LiftedOperatorLike<TSubscription, T> = /*@__PURE__*/ (<
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
        DelegatingLiftedOperatorLike<TSubscription, T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, T>,
      skipCount: Optional<number>,
    ): LiftedOperatorLike<TSubscription, T> {
      init(DelegatingLiftedOperatorMixin<TSubscription, T>(), this, delegate);
      this[SkipFirstOperator_count] = clampPositiveInteger(skipCount ?? 1);

      return this;
    },
    props<TProperties>({
      [SkipFirstOperator_count]: none,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<TSubscription, T>,
        next: T,
      ) {
        this[SkipFirstOperator_count] = max(
          this[SkipFirstOperator_count] - 1,
          -1,
        );

        const shouldEmit = this[SkipFirstOperator_count] < 0;

        if (shouldEmit) {
          this[DelegatingLiftedOperatorLike_delegate][
            LiftedOperatorLike_notify
          ](next);
        }
      },
    }),
  );
})();
