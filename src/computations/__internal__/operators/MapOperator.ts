import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Function1, none } from "../../../functions.js";
import { DisposableLike, EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, TA, TB>(
  delegate: LiftedSinkLike<TSubscription, TB>,
  selector: Function1<TA, TB>,
) => LiftedSinkLike<TSubscription, TA> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  TA,
  TB,
>() => {
  const MapOperator_selector = Symbol("MapOperator_selector");

  interface TProperties {
    [MapOperator_selector]: Function1<TA, TB>;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, TA, TB>()),
    function MapOperator(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, TA, TB>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, TB>,
      selector: Function1<TA, TB>,
    ): LiftedSinkLike<TSubscription, TA> {
      init(DelegatingLiftedSinkMixin<TSubscription, TA, TB>(), this, delegate);
      this[MapOperator_selector] = selector;

      return this;
    },
    props<TProperties>({
      [MapOperator_selector]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, TA, TB>,
        next: TA,
      ) {
        const mapped = this[MapOperator_selector](next);
        this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
          mapped,
        );
      },
    }),
  );
})();
