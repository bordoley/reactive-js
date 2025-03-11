import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Function2, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "../../../utils/__mixins__/ObserverMixin.js";
import {
  ObserverLike,
  QueueableLike_enqueue,
  SchedulerLike_now,
} from "../../../utils.js";

import type * as Observable from "../../Observable.js";
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
    include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()),
    function WithCurrentTimeObserver(
      this: ObserverMixinBaseLike<TA> & Mutable<TProperties>,
      delegate: ObserverLike<TB>,
      selector: Function2<number, TA, TB>,
    ): ObserverLike<TA> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[WithCurrentTimeObserver_selector] = selector;

      return this;
    },
    props<TProperties>({
      [WithCurrentTimeObserver_selector]: none,
    }),
    proto({
      [ObserverMixinBaseLike_notify](
        this: TProperties & LiftedObserverLike<TA, TB>,
        next: TA,
      ) {
        const currentTime = this[SchedulerLike_now];
        const mapped = this[WithCurrentTimeObserver_selector](
          currentTime,
          next,
        );
        return this[LiftedObserverLike_delegate][QueueableLike_enqueue](mapped);
      },
    }),
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
