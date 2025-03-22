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
import {
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike, SchedulerLike_now } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_lift from "./Observable.lift.js";

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
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function WithCurrentTimeObserver(
      this: Pick<LiftedObserverLike<TA, TB>, typeof LiftedListenerLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<TB>,
      selector: Function2<number, TA, TB>,
    ): ObserverLike<TA> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<TA, TB>(), this, delegate, none);

      this[WithCurrentTimeObserver_selector] = selector;

      return this;
    },
    props<TProperties>({
      [WithCurrentTimeObserver_selector]: none,
    }),
    proto({
      [LiftedListenerLike_notify](
        this: TProperties & LiftedObserverLike<TA, TB>,
        next: TA,
      ) {
        const currentTime = this[SchedulerLike_now];
        const mapped = this[WithCurrentTimeObserver_selector](
          currentTime,
          next,
        );

        this[LiftedListenerLike_notifyDelegate](mapped);
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
    Observable_lift(),
  );

export default Observable_withCurrentTime;
