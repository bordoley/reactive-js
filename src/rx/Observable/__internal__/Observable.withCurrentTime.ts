import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __WithCurrentTimeObserver_selector } from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.internal.js";
import { ContainerOperator } from "../../../containers.js";
import { Function2, none, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";

type ObservableWithCurrentTime = <C extends ObservableLike, TA, TB>(
  selector: Function2<number, TA, TB>,
) => ContainerOperator<C, TA, TB>;
const Observable_withCurrentTime: ObservableWithCurrentTime = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const createWithCurrentTimeObserver: <TA, TB>(
    delegate: ObserverLike<TB>,
    selector: Function2<number, TA, TB>,
  ) => ObserverLike<TA> = (<TA, TB>() => {
    type TProperties = {
      readonly [__WithCurrentTimeObserver_selector]: Function2<number, TA, TB>;
    };

    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin(), Delegating_mixin()),
        function WithCurrentTimeObserver(
          instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
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
          [ObserverLike_notify](
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
            this[DelegatingLike_delegate][ObserverLike_notify](mapped);
          },
        },
      ),
    );
  })();

  return ((selector: Function2<number, TA, TB>) =>
    pipe(
      createWithCurrentTimeObserver,
      partial(selector),
      Enumerable_lift,
    )) as ObservableWithCurrentTime;
})();

export default Observable_withCurrentTime;
