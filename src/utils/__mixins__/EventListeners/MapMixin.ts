import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { Function1, none, returns } from "../../../functions.js";
import {
  LiftedEventListenerLike,
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../LiftedEventListenerMixin.js";

const MapMixin: <TA, TB>() => Mixin1<
  Pick<LiftedEventListenerLike<TA, TB>, typeof LiftedEventListenerLike_notify>,
  Function1<TA, TB>
> = /*@__PURE__*/ (<TA, TB>() => {
  const MapMixin_selector = Symbol("MapMixin_selector");

  interface TProperties<TA, TB> {
    [MapMixin_selector]: Function1<TA, TB>;
  }

  return returns(
    mix(
      function MapMixin(
        this: Pick<
          LiftedEventListenerLike<TA, TB>,
          typeof LiftedEventListenerLike_notify
        > &
          TProperties<TA, TB>,
        selector: Function1<TA, TB>,
      ): Pick<
        LiftedEventListenerLike<TA, TB>,
        typeof LiftedEventListenerLike_notify
      > {
        this[MapMixin_selector] = selector;

        return this;
      },
      props<TProperties<TA, TB>>({
        [MapMixin_selector]: none,
      }),
      {
        [LiftedEventListenerLike_notify](
          this: TProperties<TA, TB> & LiftedEventListenerLike<TA, TB>,
          next: TA,
        ) {
          const mapped = this[MapMixin_selector](next);
          this[LiftedEventListenerLike_notifyDelegate](mapped);
        },
      },
    ),
  );
})();

export default MapMixin;
