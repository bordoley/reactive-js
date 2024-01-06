import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, SchedulerLike_now } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { Function2, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

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
    decorateNotifyWithObserverStateAssert(
      mix(
        include(ObserverMixin(), DelegatingDisposableMixin<ObserverLike<TB>>()),
        function WithCurrentTimeObserver(
          instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<TB>,
          selector: Function2<number, TA, TB>,
        ): ObserverLike<TA> {
          init(
            DelegatingDisposableMixin<ObserverLike<TB>>(),
            instance,
            delegate,
          );
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
            const currentTime = this[SchedulerLike_now];
            const mapped = this[WithCurrentTimeObserver_selector](
              currentTime,
              next,
            );
            this[DelegatingDisposableLike_delegate][SinkLike_notify](mapped);
          },
        },
      ),
    ),
  );
})();

const Observable_withCurrentTime: Observable.Signature["withCurrentTime"] = <
  TA,
  TB,
>(
  selector: Function2<number, TA, TB>,
) =>
  pipe(
    Observer_createWithCurrentTimeObserver,
    partial(selector),
    Observable_liftPureDeferred,
  );

export default Observable_withCurrentTime;
