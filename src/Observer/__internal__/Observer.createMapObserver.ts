import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  MappingLike,
  MappingLike_selector,
} from "../../__internal__/types.js";
import { Function1, none } from "../../functions.js";
import { ObserverLike, SinkLike_notify } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createMapObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  createInstanceFactory(
    mix(
      include(Observer_delegatingMixin<TA>(), Delegating_mixin()),
      function MapObserver(
        instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
          MappingLike<TA, TB>,
        delegate: ObserverLike<TB>,
        selector: Function1<TA, TB>,
      ): ObserverLike<TA> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[MappingLike_selector] = selector;

        return instance;
      },
      props<MappingLike<TA, TB>>({
        [MappingLike_selector]: none,
      }),
      {
        [SinkLike_notify](
          this: MappingLike<TA, TB> &
            DelegatingLike<ObserverLike<TB>> &
            ObserverLike<TA>,
          next: TA,
        ) {
          Observer_assertState(this);

          const mapped = this[MappingLike_selector](next);
          this[DelegatingLike_delegate][SinkLike_notify](mapped);
        },
      },
    ),
  ))();

export default Observer_createMapObserver;
