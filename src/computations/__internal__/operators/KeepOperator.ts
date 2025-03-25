import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Predicate, none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <T>(
  delegate: LiftedOperatorLike<T>,
  predicate: Predicate<T>,
) => LiftedOperatorLike<T> = /*@__PURE__*/ (<T>() => {
  const KeepOperator_predicate = Symbol("KeepOperator_predicate");

  interface TProperties {
    [KeepOperator_predicate]: Predicate<T>;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<T>()),
    function KeepOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<T>,
      predicate: Predicate<T>,
    ): LiftedOperatorLike<T> {
      init(DelegatingLiftedOperatorMixin<T>(), this, delegate);
      this[KeepOperator_predicate] = predicate;

      return this;
    },
    props<TProperties>({
      [KeepOperator_predicate]: none,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<T>,
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
