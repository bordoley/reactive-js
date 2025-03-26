import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Predicate, none } from "../../../functions.js";
import { DisposableLike, EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  predicate: Predicate<T>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
  const KeepOperator_predicate = Symbol("KeepOperator_predicate");

  interface TProperties {
    [KeepOperator_predicate]: Predicate<T>;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function KeepOperator(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      predicate: Predicate<T>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);
      this[KeepOperator_predicate] = predicate;

      return this;
    },
    props<TProperties>({
      [KeepOperator_predicate]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
        next: T,
      ) {
        const shouldNotify = this[KeepOperator_predicate](next);

        if (shouldNotify) {
          this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
            next,
          );
        }
      },
    }),
  );
})();
