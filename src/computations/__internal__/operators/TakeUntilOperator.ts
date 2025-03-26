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
import {
  DisposableLike,
  DisposableLike_dispose,
  SinkLike_complete,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T, TNotifier>(
  delegate: LiftedSinkLike<TSubscription, T>,
  notifier: TNotifier,
  addEventListener: Function2<
    TSubscription,
    SideEffect,
    Function1<TNotifier, DisposableLike>
  >,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
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
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function TakeUntilOperator(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof DelegatingLiftedSinkLike_onCompleted
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      notifier: TNotifier,
      addEventListener: Function2<
        TSubscription,
        SideEffect,
        Function1<TNotifier, DisposableLike>
      >,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);

      const subscription = this[LiftedSinkLike_subscription];
      this[TakeUntilOperator_notifierSubscription] = pipe(
        notifier,
        addEventListener(subscription, bindMethod(this, SinkLike_complete)),
        Disposable.addTo(subscription),
      );

      return this;
    },
    props<TProperties>({
      [TakeUntilOperator_notifierSubscription]: none,
    }),
    proto({
      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
      ) {
        this[TakeUntilOperator_notifierSubscription][DisposableLike_dispose]();
        this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
      },
    }),
  );
})();
