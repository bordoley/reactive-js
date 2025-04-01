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
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  options?: { readonly equality?: Equality<T> },
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  T,
>() => {
  const DistinctUntilChangedSink_equality = Symbol(
    "DistinctUntilChangedSink_equality",
  );
  const DistinctUntilChangedSink_prev = Symbol("DistinctUntilChangedSink_prev");
  const DistinctUntilChangedSink_hasValue = Symbol(
    "DistinctUntilChangedSink_hasValue",
  );

  type TProperties = {
    [DistinctUntilChangedSink_equality]: Equality<T>;
    [DistinctUntilChangedSink_prev]: T;
    [DistinctUntilChangedSink_hasValue]: boolean;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function DistinctUntilChangedSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      options: Optional<{ readonly equality?: Equality<T> }>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);
      this[DistinctUntilChangedSink_equality] =
        options?.equality ?? strictEquality;

      return this;
    },
    props<TProperties>({
      [DistinctUntilChangedSink_equality]: none,
      [DistinctUntilChangedSink_prev]: none,
      [DistinctUntilChangedSink_hasValue]: false,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
        next: T,
      ) {
        const shouldEmit =
          !this[DistinctUntilChangedSink_hasValue] ||
          !this[DistinctUntilChangedSink_equality](
            this[DistinctUntilChangedSink_prev],
            next,
          );

        if (shouldEmit) {
          this[DistinctUntilChangedSink_prev] = next;
          this[DistinctUntilChangedSink_hasValue] = true;
          this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](
            next,
          );
        }
      },
    }),
  );
})();
