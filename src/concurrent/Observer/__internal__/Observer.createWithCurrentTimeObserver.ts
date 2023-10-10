import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, SchedulerLike_now } from "../../../concurrent.js";
import { Function2, none } from "../../../functions.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  SinkLike_notify,
} from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertState from "./Observer.assertState.js";

const Observer_createWithCurrentTimeObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function2<number, TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() => {
  const WithCurrentTimeObserver_selector = Symbol(
    "WithCurrentTimeObserver_selector",
  );

  type TProperties = {
    readonly [WithCurrentTimeObserver_selector]: Function2<number, TA, TB>;
  };

  return createInstanceFactory(
    mix(
      include(ObserverMixin(), DelegatingDisposableMixin<ObserverLike<TB>>()),
      function WithCurrentTimeObserver(
        instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<TB>,
        selector: Function2<number, TA, TB>,
      ): ObserverLike<TA> {
        init(DelegatingDisposableMixin<ObserverLike<TB>>(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[WithCurrentTimeObserver_selector] = selector;

        return instance;
      },
      props<TProperties>({
        [WithCurrentTimeObserver_selector]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            DelegatingDisposableLike<ObserverLike<TB>> &
            ObserverLike<TA>,
          next: TA,
        ) {
          Observer_assertState(this);
          const currentTime = this[SchedulerLike_now];
          const mapped = this[WithCurrentTimeObserver_selector](
            currentTime,
            next,
          );
          this[DelegatingDisposableLike_delegate][SinkLike_notify](mapped);
        },
      },
    ),
  );
})();

export default Observer_createWithCurrentTimeObserver;
