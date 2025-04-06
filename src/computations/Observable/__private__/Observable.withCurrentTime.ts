import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Function2, none, partial, pipe } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import {
  ClockLike_now,
  EventListenerLike_notify,
  ObserverLike,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../../__internal__/LiftedSource.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import Observable_lift from "./Observable.lift.js";

const createWithCurrentTimeOperator: <TA, TB>(
  delegate: LiftedSinkLike<ObserverLike, TB>,
  selector: Function2<number, TA, TB>,
) => LiftedSinkLike<ObserverLike, TA> = /*@__PURE__*/ (<TA, TB>() => {
  const WithCurrentTimeOperator_selector = Symbol(
    "WithCurrentTimeOperator_selector",
  );

  type TProperties = {
    [WithCurrentTimeOperator_selector]: Function2<number, TA, TB>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<ObserverLike, TA, TB>()),
    function WithCurrentTimeOperator(
      this: Pick<
        DelegatingLiftedSinkLike<ObserverLike, TA, TB>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<ObserverLike, TB>,
      selector: Function2<number, TA, TB>,
    ): LiftedSinkLike<ObserverLike, TA> {
      init(DelegatingLiftedSinkMixin<ObserverLike, TA, TB>(), this, delegate);
      this[WithCurrentTimeOperator_selector] = selector;

      return this;
    },
    props<TProperties>({
      [WithCurrentTimeOperator_selector]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<ObserverLike, TA, TB>,
        next: TA,
      ) {
        const currentTime = this[LiftedSinkLike_subscription][ClockLike_now];
        const mapped = this[WithCurrentTimeOperator_selector](
          currentTime,
          next,
        );
        this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](
          mapped,
        );
      },
    }),
  );
})();

const Observable_withCurrentTime: Observable.Signature["withCurrentTime"] = (<
  TA,
  TB,
>(
  selector: Function2<number, TA, TB>,
) =>
  pipe(
    createWithCurrentTimeOperator<TA, TB>,
    partial(selector),
    Observable_lift(),
  )) as Observable.Signature["withCurrentTime"];

export default Observable_withCurrentTime;
