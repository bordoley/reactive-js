import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../computations/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../computations/__mixins__/ObserverMixin.js";
import { ObserverLike, ObserverLike_notify } from "../../../computations.js";
import { Function2, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";

import { SchedulerLike_now } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createWithCurrentTimeObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function2<number, TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() => {
  const WithCurrentTimeObserver_selector = Symbol(
    "WithCurrentTimeObserver_selector",
  );

  type TProperties = {
    readonly [WithCurrentTimeObserver_selector]: Function2<number, TA, TB>;
  };

  return mixInstanceFactory(
    include(
      ObserverMixin(),
      DelegatingDisposableMixin(),
      LiftedObserverMixin(),
    ),
    function WithCurrentTimeObserver(
      instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<TB>,
      selector: Function2<number, TA, TB>,
    ): ObserverLike<TA> {
      init(DelegatingDisposableMixin(), instance, delegate);
      init(ObserverMixin(), instance, delegate, delegate);
      init(LiftedObserverMixin(), instance, delegate);

      instance[WithCurrentTimeObserver_selector] = selector;

      return instance;
    },
    props<TProperties>({
      [WithCurrentTimeObserver_selector]: none,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties & LiftedObserverLike<TA, TB>,
        next: TA,
      ) {
        const currentTime = this[SchedulerLike_now];
        const mapped = this[WithCurrentTimeObserver_selector](
          currentTime,
          next,
        );
        this[LiftedObserverLike_delegate][ObserverLike_notify](mapped);
      }),
    },
  );
})();

const Observable_withCurrentTime: Observable.Signature["withCurrentTime"] = <
  TA,
  TB,
>(
  selector: Function2<number, TA, TB>,
) =>
  pipe(
    createWithCurrentTimeObserver<TA, TB>,
    partial(selector),
    Observable_liftPureDeferred,
  );

export default Observable_withCurrentTime;
