import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Function1, none } from "../../../functions.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike, TA, TB>(
  delegate: LiftedSinkLike<TSubscription, TB>,
  selector: Function1<TA, TB>,
) => LiftedSinkLike<TSubscription, TA> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  TA,
  TB,
>() => {
  const MapSink_selector = Symbol("MapSink_selector");

  type TProperties = {
    [MapSink_selector]: Function1<TA, TB>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, TA, TB>()),
    function MapSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, TA, TB>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, TB>,
      selector: Function1<TA, TB>,
    ): LiftedSinkLike<TSubscription, TA> {
      init(DelegatingLiftedSinkMixin<TSubscription, TA, TB>(), this, delegate);
      this[MapSink_selector] = selector;

      return this;
    },
    props<TProperties>({
      [MapSink_selector]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, TA, TB>,
        next: TA,
      ) {
        const mapped = this[MapSink_selector](next);
        this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
          mapped,
        );
      },
    }),
  );
})();
