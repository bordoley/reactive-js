import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  Equality,
  Optional,
  none,
  strictEquality,
} from "../../../functions.js";
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
  options?: { readonly equality?: Equality<T> },
) => LiftedOperatorLike<T> = /*@__PURE__*/ (<T>() => {
  const DistinctUntilChangedMixin_equality = Symbol(
    "DistinctUntilChangedMixin_equality",
  );
  const DistinctUntilChangedMixin_prev = Symbol(
    "DistinctUntilChangedMixin_prev",
  );
  const DistinctUntilChangedMixin_hasValue = Symbol(
    "DistinctUntilChangedMixin_hasValue",
  );

  type TProperties = {
    [DistinctUntilChangedMixin_equality]: Equality<T>;
    [DistinctUntilChangedMixin_prev]: T;
    [DistinctUntilChangedMixin_hasValue]: boolean;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<T>()),
    function DistinctUntilChangedMixin(
      this: Pick<
        DelegatingLiftedOperatorLike<T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<T>,
      options: Optional<{ readonly equality?: Equality<T> }>,
    ): LiftedOperatorLike<T> {
      init(DelegatingLiftedOperatorMixin<T>(), this, delegate);
      this[DistinctUntilChangedMixin_equality] =
        options?.equality ?? strictEquality;

      return this;
    },
    props<TProperties>({
      [DistinctUntilChangedMixin_equality]: none,
      [DistinctUntilChangedMixin_prev]: none,
      [DistinctUntilChangedMixin_hasValue]: false,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<T>,
        next: T,
      ) {
        const shouldEmit =
          !this[DistinctUntilChangedMixin_hasValue] ||
          !this[DistinctUntilChangedMixin_equality](
            this[DistinctUntilChangedMixin_prev],
            next,
          );

        if (shouldEmit) {
          this[DistinctUntilChangedMixin_prev] = next;
          this[DistinctUntilChangedMixin_hasValue] = true;
          this[DelegatingLiftedOperatorLike_delegate][
            LiftedOperatorLike_notify
          ](next);
        }
      },
    }),
  );
})();
