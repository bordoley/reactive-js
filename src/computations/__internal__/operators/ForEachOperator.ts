import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { SideEffect1, none } from "../../../functions.js";
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
  sideEffect: SideEffect1<T>,
) => LiftedOperatorLike<T> = /*@__PURE__*/ (<T>() => {
  const ForEachOperator_effect = Symbol("ForEachOperator_effect");

  interface TProperties {
    [ForEachOperator_effect]: SideEffect1<T>;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<T>()),
    function ForEachOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<T>,
      effect: SideEffect1<T>,
    ): LiftedOperatorLike<T> {
      init(DelegatingLiftedOperatorMixin<T>(), this, delegate);
      this[ForEachOperator_effect] = effect;

      return this;
    },
    props<TProperties>({
      [ForEachOperator_effect]: none,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<T>,
        next: T,
      ) {
        this[ForEachOperator_effect](next);

        this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](
          next,
        );
      },
    }),
  );
})();
