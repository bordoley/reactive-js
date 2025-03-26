import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Tuple2, none, tuple } from "../../../functions.js";
import { DisposableLike, EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedSinkLike<TSubscription, Tuple2<T, T>>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
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
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, Tuple2<T, T>>,
    ): LiftedSinkLike<TSubscription, T> {
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
      [EventListenerLike_notify](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, T, Tuple2<T, T>>,
        next: T,
      ) {
        const prev = this[PairwiseOperator_prev];
        const hasPrev = this[PairwiseOperator_hasPrev];

        this[PairwiseOperator_hasPrev] = true;
        this[PairwiseOperator_prev] = next;

        if (hasPrev) {
          const pair = tuple(prev, next);
          this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
            pair,
          );
        }
      },
    }),
  );
})();
