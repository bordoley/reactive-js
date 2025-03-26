import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Function1, none } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, TA, TB>(
  delegate: LiftedOperatorLike<TSubscription, TB>,
  selector: Function1<TA, TB>,
) => LiftedOperatorLike<TSubscription, TA> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  TA,
  TB,
>() => {
  const MapOperator_selector = Symbol("MapOperator_selector");

  interface TProperties {
    [MapOperator_selector]: Function1<TA, TB>;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TSubscription, TA, TB>()),
    function MapOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, TA, TB>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, TB>,
      selector: Function1<TA, TB>,
    ): LiftedOperatorLike<TSubscription, TA> {
      init(
        DelegatingLiftedOperatorMixin<TSubscription, TA, TB>(),
        this,
        delegate,
      );
      this[MapOperator_selector] = selector;

      return this;
    },
    props<TProperties>({
      [MapOperator_selector]: none,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<TSubscription, TA, TB>,
        next: TA,
      ) {
        const mapped = this[MapOperator_selector](next);
        this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](
          mapped,
        );
      },
    }),
  );
})();
