import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
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
  takeCount: Optional<number>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  T,
>() => {
  const TakeFirstSink_count = Symbol("TakeFirstSink_count");

  type TProperties = {
    [TakeFirstSink_count]: number;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function TakeFirstSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      takeCount: Optional<number>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);

      this[TakeFirstSink_count] = clampPositiveInteger(takeCount ?? 1);

      if (takeCount === 0) {
        this[SinkLike_complete]();
      }

      return this;
    },
    props<TProperties>({
      [TakeFirstSink_count]: 0,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
        next: T,
      ) {
        this[TakeFirstSink_count]--;

        const delegate = this[DelegatingEventListenerLike_delegate];
        delegate[EventListenerLike_notify](next);

        if (this[TakeFirstSink_count] <= 0) {
          this[SinkLike_complete]();
        }
      },
    }),
  );
})();
