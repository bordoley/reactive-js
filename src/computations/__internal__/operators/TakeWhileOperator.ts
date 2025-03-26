import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, Predicate, none } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedOperatorLike<TSubscription, T>,
  predicate: Predicate<T>,
  options: Optional<{ readonly inclusive?: boolean }>,
) => LiftedOperatorLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
  const TakeWhileMixin_inclusive = Symbol("TakeWhileMixin_inclusive");
  const TakeWhileMixin_predicate = Symbol("TakeWhileMixin_predicate");

  interface TProperties {
    [TakeWhileMixin_inclusive]: boolean;
    [TakeWhileMixin_predicate]: Predicate<T>;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TSubscription, T>()),
    function TakeWhileOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, T>,
      predicate: Predicate<T>,
      options: Optional<{ readonly inclusive?: boolean }>,
    ): LiftedOperatorLike<TSubscription, T> {
      init(DelegatingLiftedOperatorMixin<TSubscription, T>(), this, delegate);

      this[TakeWhileMixin_predicate] = predicate;
      this[TakeWhileMixin_inclusive] = options?.inclusive ?? false;

      return this;
    },
    props<TProperties>({
      [TakeWhileMixin_predicate]: none,
      [TakeWhileMixin_inclusive]: none,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<TSubscription, T>,
        next: T,
      ) {
        const satisfiesPredicate = this[TakeWhileMixin_predicate](next);
        const isInclusive = this[TakeWhileMixin_inclusive];

        if (satisfiesPredicate || isInclusive) {
          this[DelegatingLiftedOperatorLike_delegate][
            LiftedOperatorLike_notify
          ](next);
        }

        if (!satisfiesPredicate) {
          this[LiftedOperatorLike_complete]();
        }
      },
    }),
  );
})();
