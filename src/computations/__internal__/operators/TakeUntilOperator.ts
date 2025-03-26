import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  Function1,
  Function2,
  SideEffect,
  bindMethod,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
  DelegatingLiftedOperatorLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_subscription,
} from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T, TNotifier>(
  delegate: LiftedOperatorLike<TSubscription, T>,
  notifier: TNotifier,
  addEventListener: Function2<
    TSubscription,
    SideEffect,
    Function1<TNotifier, DisposableLike>
  >,
) => LiftedOperatorLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
  TNotifier,
>() => {
  const TakeUntilOperator_notifierSubscription = Symbol(
    "TakeUntilOperator_notifierSubscription",
  );

  type TProperties = {
    [TakeUntilOperator_notifierSubscription]: DisposableLike;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TSubscription, T>()),
    function TakeUntilOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, T>,
        typeof DelegatingLiftedOperatorLike_onCompleted
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, T>,
      notifier: TNotifier,
      addEventListener: Function2<
        TSubscription,
        SideEffect,
        Function1<TNotifier, DisposableLike>
      >,
    ): LiftedOperatorLike<TSubscription, T> {
      init(DelegatingLiftedOperatorMixin<TSubscription, T>(), this, delegate);

      const subscription = this[LiftedOperatorLike_subscription];
      this[TakeUntilOperator_notifierSubscription] = pipe(
        notifier,
        addEventListener(
          subscription,
          bindMethod(this, LiftedOperatorLike_complete),
        ),
        Disposable.addTo(subscription),
      );

      return this;
    },
    props<TProperties>({
      [TakeUntilOperator_notifierSubscription]: none,
    }),
    proto({
      [DelegatingLiftedOperatorLike_onCompleted](
        this: TProperties & DelegatingLiftedOperatorLike<TSubscription, T>,
      ) {
        this[TakeUntilOperator_notifierSubscription][DisposableLike_dispose]();
        this[DelegatingLiftedOperatorLike_delegate][
          LiftedOperatorLike_complete
        ]();
      },
    }),
  );
})();
