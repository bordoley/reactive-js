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
  Optional,
  SideEffect,
  bindMethod,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  SinkLike,
  SinkLike_complete,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike, T, TNotifier>(
  delegate: LiftedSinkLike<TSubscription, T>,
  notifier: TNotifier,
  addEventListener: Function2<
    SideEffect,
    Optional<{ scheduler: TSubscription }>,
    Function1<TNotifier, DisposableLike>
  >,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  T,
  TNotifier,
>() => {
  const TakeUntilSink_notifierSubscription = Symbol(
    "TakeUntilSink_notifierSubscription",
  );

  type TProperties = {
    [TakeUntilSink_notifierSubscription]: DisposableLike;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function TakeUntilSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof DelegatingLiftedSinkLike_onCompleted
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      notifier: TNotifier,
      addEventListener: Function2<
        SideEffect,
        Optional<{ scheduler: TSubscription }>,
        Function1<TNotifier, DisposableLike>
      >,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);

      const scheduler = this[LiftedSinkLike_subscription];
      this[TakeUntilSink_notifierSubscription] = pipe(
        notifier,
        addEventListener(bindMethod(this, SinkLike_complete), { scheduler }),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [TakeUntilSink_notifierSubscription]: none,
    }),
    proto({
      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
      ) {
        this[TakeUntilSink_notifierSubscription][DisposableLike_dispose]();
      },
    }),
  );
})();
