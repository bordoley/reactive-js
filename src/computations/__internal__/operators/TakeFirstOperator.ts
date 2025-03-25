import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, none } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <T>(
  delegate: LiftedOperatorLike<T>,
  takeCount: Optional<number>,
) => LiftedOperatorLike<T> = /*@__PURE__*/ (<T>() => {
  const TakeFirstOperator_count = Symbol("TakeFirstOperator_count");

  interface TProperties {
    [TakeFirstOperator_count]: number;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<T>()),
    function TakeFirstOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<T>,
      takeCount: Optional<number>,
    ): LiftedOperatorLike<T> {
      init(DelegatingLiftedOperatorMixin<T>(), this, delegate);

      this[TakeFirstOperator_count] = clampPositiveInteger(takeCount ?? 1);

      if (takeCount === 0) {
        this[LiftedOperatorLike_complete]();
      }

      return this;
    },
    props<TProperties>({
      [TakeFirstOperator_count]: none,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<T>,
        next: T,
      ) {
        this[TakeFirstOperator_count];
        this[TakeFirstOperator_count]--;

        const delegate = this[DelegatingLiftedOperatorLike_delegate];
        delegate[LiftedOperatorLike_notify](next);

        if (this[TakeFirstOperator_count] <= 0) {
          delegate[LiftedOperatorLike_complete]();
        }
      },
    }),
  );
})();
