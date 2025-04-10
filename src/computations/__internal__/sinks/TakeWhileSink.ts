import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, Predicate, none } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  predicate: Predicate<T>,
  options: Optional<{ readonly inclusive?: boolean }>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  T,
>() => {
  const TakeWhileMixin_inclusive = Symbol("TakeWhileMixin_inclusive");
  const TakeWhileMixin_predicate = Symbol("TakeWhileMixin_predicate");

  type TProperties = {
    [TakeWhileMixin_inclusive]: boolean;
    [TakeWhileMixin_predicate]: Predicate<T>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function TakeWhileSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      predicate: Predicate<T>,
      options: Optional<{ readonly inclusive?: boolean }>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);

      this[TakeWhileMixin_predicate] = predicate;
      this[TakeWhileMixin_inclusive] = options?.inclusive ?? false;

      return this;
    },
    props<TProperties>({
      [TakeWhileMixin_predicate]: none,
      [TakeWhileMixin_inclusive]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
        next: T,
      ) {
        const satisfiesPredicate = this[TakeWhileMixin_predicate](next);
        const isInclusive = this[TakeWhileMixin_inclusive];

        if (satisfiesPredicate || isInclusive) {
          this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](
            next,
          );
        }

        if (!satisfiesPredicate) {
          this[SinkLike_complete]();
        }
      },
    }),
  );
})();
