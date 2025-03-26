import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { ObservableLike } from "../../../computations.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  ObserverLike,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_subscription,
} from "../../__internal__/LiftedSource.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";

export const createTakeUntilOperator: <T>(
  delegate: LiftedOperatorLike<ObserverLike, T>,
  notifier: ObservableLike,
) => LiftedOperatorLike<ObserverLike, T> = /*@__PURE__*/ (<T>() => {
  const TakeUntilOperator_otherSubscription = Symbol(
    "TakeUntilOperator_otherSubscription",
  );

  type TProperties = {
    [TakeUntilOperator_otherSubscription]: DisposableLike;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<ObserverLike, T>()),
    function TakeUntilOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<ObserverLike, T>,
        typeof DelegatingLiftedOperatorLike_onCompleted
      > &
        TProperties,
      delegate: LiftedOperatorLike<ObserverLike, T>,
      notifier: ObservableLike,
    ): LiftedOperatorLike<ObserverLike, T> {
      init(DelegatingLiftedOperatorMixin<ObserverLike, T>(), this, delegate);

      const scheduler = this[LiftedOperatorLike_subscription];
      this[TakeUntilOperator_otherSubscription] = pipe(
        notifier,
        Observable_forEach(bindMethod(this, LiftedOperatorLike_complete)),
        Observable_subscribe({ scheduler }),
        Disposable.addTo(scheduler),
      );

      return this;
    },
    props<TProperties>({
      [TakeUntilOperator_otherSubscription]: none,
    }),
    proto({
      [DelegatingLiftedOperatorLike_onCompleted](this: TProperties) {
        this[TakeUntilOperator_otherSubscription][DisposableLike_dispose]();
      },
    }),
  );
})();

const Observable_takeUntil: Observable.Signature["takeUntil"] = ((
  notifier: ObservableLike,
) =>
  pipe(
    createTakeUntilOperator,
    partial(notifier),
    Observable_lift(),
  )) as Observable.Signature["takeUntil"];

export default Observable_takeUntil;
