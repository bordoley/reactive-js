import {
  include,
  init,
  mixInstanceFactory,
  props,
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
) => DelegatingLiftedOperatorLike<T> = /*@__PURE__*/ (<T>() => {
  const KeepMixin_predicate = Symbol("KeepMixin_predicate");

  interface TProperties {
    [KeepMixin_predicate]: Predicate<T>;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<T>()),
    function KeepMixin(
      this: Pick<
        DelegatingLiftedOperatorLike<T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<T>,
      predicate: Predicate<T>,
    ): DelegatingLiftedOperatorLike<T> {
      init(DelegatingLiftedOperatorMixin<T>(), this, delegate);
      this[KeepMixin_predicate] = predicate;

      return this;
    },
    props<TProperties>({
      [KeepMixin_predicate]: none,
    }),
    {
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<T>,
        next: T,
      ) {
        const shouldNotify = this[KeepMixin_predicate](next);

        if (shouldNotify) {
          this[DelegatingLiftedOperatorLike_delegate][
            LiftedOperatorLike_notify
          ](next);
        }
      },
    },
  );
})();
