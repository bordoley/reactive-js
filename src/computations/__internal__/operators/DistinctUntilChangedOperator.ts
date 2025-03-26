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
  options?: { readonly equality?: Equality<T> },
) => LiftedOperatorLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
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
    include(DelegatingLiftedOperatorMixin<TSubscription, T>()),
    function DistinctUntilChangedMixin(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, T>,
      options: Optional<{ readonly equality?: Equality<T> }>,
    ): LiftedOperatorLike<TSubscription, T> {
      init(DelegatingLiftedOperatorMixin<TSubscription, T>(), this, delegate);
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
        this: TProperties & DelegatingLiftedOperatorLike<TSubscription, T>,
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
