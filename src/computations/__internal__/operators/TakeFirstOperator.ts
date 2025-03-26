import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, none } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  SinkLike_complete,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  takeCount: Optional<number>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
  const TakeFirstOperator_count = Symbol("TakeFirstOperator_count");

  interface TProperties {
    [TakeFirstOperator_count]: number;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function TakeFirstOperator(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      takeCount: Optional<number>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);

      this[TakeFirstOperator_count] = clampPositiveInteger(takeCount ?? 1);

      if (takeCount === 0) {
        this[SinkLike_complete]();
      }

      return this;
    },
    props<TProperties>({
      [TakeFirstOperator_count]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
        next: T,
      ) {
        this[TakeFirstOperator_count];
        this[TakeFirstOperator_count]--;

        const delegate = this[DelegatingLiftedSinkLike_delegate];
        delegate[EventListenerLike_notify](next);

        if (this[TakeFirstOperator_count] <= 0) {
          this[SinkLike_complete]();
        }
      },
    }),
  );
})();
