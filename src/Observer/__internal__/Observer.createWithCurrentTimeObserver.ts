import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __WithCurrentTimeObserver_selector } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Function2, none } from "../../functions.js";
import {
  ObserverLike,
  SchedulerLike_now,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createWithCurrentTimeObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function2<number, TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() => {
  type TProperties = {
    readonly [__WithCurrentTimeObserver_selector]: Function2<number, TA, TB>;
  };

  return createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Delegating_mixin()),
      function WithCurrentTimeObserver(
        instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<TB>,
        selector: Function2<number, TA, TB>,
      ): ObserverLike<TA> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__WithCurrentTimeObserver_selector] = selector;

        return instance;
      },
      props<TProperties>({
        [__WithCurrentTimeObserver_selector]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            DelegatingLike<ObserverLike<TB>> &
            ObserverLike<TA>,
          next: TA,
        ) {
          Observer_assertState(this);
          const currentTime = this[SchedulerLike_now];
          const mapped = this[__WithCurrentTimeObserver_selector](
            currentTime,
            next,
          );
          this[DelegatingLike_delegate][SinkLike_notify](mapped);
        },
      },
    ),
  );
})();

export default Observer_createWithCurrentTimeObserver;
