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
import { DisposableLike, EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  options?: { readonly equality?: Equality<T> },
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
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
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function DistinctUntilChangedMixin(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      options: Optional<{ readonly equality?: Equality<T> }>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);
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
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
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
          this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
            next,
          );
        }
      },
    }),
  );
})();
