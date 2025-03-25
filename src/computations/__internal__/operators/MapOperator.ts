import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Function1, none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <TA, TB>(
  delegate: LiftedOperatorLike<TB>,
  selector: Function1<TA, TB>,
) => DelegatingLiftedOperatorLike<TA, TB> = /*@__PURE__*/ (<TA, TB>() => {
  const MapOperator_selector = Symbol("MapOperator_selector");

  interface TProperties {
    [MapOperator_selector]: Function1<TA, TB>;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TA, TB>()),
    function MapOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TA, TB>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TB>,
      selector: Function1<TA, TB>,
    ): DelegatingLiftedOperatorLike<TA, TB> {
      init(DelegatingLiftedOperatorMixin<TA, TB>(), this, delegate);
      this[MapOperator_selector] = selector;

      return this;
    },
    props<TProperties>({
      [MapOperator_selector]: none,
    }),
    {
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<TA, TB>,
        next: TA,
      ) {
        const mapped = this[MapOperator_selector](next);
        this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](
          mapped,
        );
      },
    },
  );
})();
