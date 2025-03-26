import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Tuple2, none, tuple } from "../../../functions.js";
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
  delegate: LiftedOperatorLike<TSubscription, Tuple2<T, T>>,
) => LiftedOperatorLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
  const PairwiseOperator_hasPrev = Symbol("PairwiseOperator_hasPrev");
  const PairwiseOperator_prev = Symbol("PairwiseOperator_prev");

  interface TProperties {
    [PairwiseOperator_hasPrev]: boolean;
    [PairwiseOperator_prev]: T;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TSubscription, T>()),
    function BufferOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, Tuple2<T, T>>,
    ): LiftedOperatorLike<TSubscription, T> {
      init(
        DelegatingLiftedOperatorMixin<TSubscription, Tuple2<T, T>>(),
        this,
        delegate,
      );

      return this;
    },
    props<TProperties>({
      [PairwiseOperator_prev]: none,
      [PairwiseOperator_hasPrev]: false,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, T, Tuple2<T, T>>,
        next: T,
      ) {
        const prev = this[PairwiseOperator_prev];
        const hasPrev = this[PairwiseOperator_hasPrev];

        this[PairwiseOperator_hasPrev] = true;
        this[PairwiseOperator_prev] = next;

        if (hasPrev) {
          const pair = tuple(prev, next);
          this[DelegatingLiftedOperatorLike_delegate][
            LiftedOperatorLike_notify
          ](pair);
        }
      },
    }),
  );
})();
