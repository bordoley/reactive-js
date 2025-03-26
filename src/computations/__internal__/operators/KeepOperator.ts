import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Predicate, none } from "../../../functions.js";
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
  predicate: Predicate<T>,
) => LiftedOperatorLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
  const KeepOperator_predicate = Symbol("KeepOperator_predicate");

  interface TProperties {
    [KeepOperator_predicate]: Predicate<T>;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TSubscription, T>()),
    function KeepOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, T>,
      predicate: Predicate<T>,
    ): LiftedOperatorLike<TSubscription, T> {
      init(DelegatingLiftedOperatorMixin<TSubscription, T>(), this, delegate);
      this[KeepOperator_predicate] = predicate;

      return this;
    },
    props<TProperties>({
      [KeepOperator_predicate]: none,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<TSubscription, T>,
        next: T,
      ) {
        const shouldNotify = this[KeepOperator_predicate](next);

        if (shouldNotify) {
          this[DelegatingLiftedOperatorLike_delegate][
            LiftedOperatorLike_notify
          ](next);
        }
      },
    }),
  );
})();
