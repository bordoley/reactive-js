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
  SideEffect1,
  bind,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  SinkLike,
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

export const create: <TSubscription extends SinkLike, TOther, TA, TB, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  other: TOther,
  selector: Function2<TA, TB, T>,
  addEventListener: Function2<
    TSubscription,
    SideEffect1<TB>,
    Function1<TOther, DisposableLike>
  >,
) => LiftedSinkLike<TSubscription, TA> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  TOther,
  TA,
  TB,
  T,
>() => {
  const WithLatestFromSink_selector = Symbol("WithLatestFromSink_selector");
  const WithLatestFromSink_hasLatest = Symbol("WithLatestFromSink_hasLatest");
  const WithLatestFromSink_otherLatest = Symbol(
    "WithLatestFromSink_otherLatest",
  );
  const WithLatestFromSink_otherSubscription = Symbol(
    "WithLatestFromSink_otherSubscription",
  );

  type TProperties = {
    [WithLatestFromSink_hasLatest]: boolean;
    [WithLatestFromSink_otherLatest]: Optional<TB>;
    [WithLatestFromSink_selector]: Function2<TA, TB, T>;
    [WithLatestFromSink_otherSubscription]: DisposableLike;
  };

  function onWithLatestFromSinkOtherSubscriptionComplete(
    this: TProperties & LiftedSinkLike<TSubscription, TA>,
  ) {
    if (!this[WithLatestFromSink_hasLatest]) {
      this[SinkLike_complete]();
    }
  }

  function onOtherNotify(this: TProperties, next: TB) {
    this[WithLatestFromSink_hasLatest] = true;
    this[WithLatestFromSink_otherLatest] = next;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, TA, TB>()),
    function WithLatestFromSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, TA, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      other: TOther,
      selector: Function2<TA, TB, T>,
      addEventListener: Function2<
        TSubscription,
        SideEffect1<TB>,
        Function1<TOther, DisposableLike>
      >,
    ): LiftedSinkLike<TSubscription, TA> {
      init(DelegatingLiftedSinkMixin<TSubscription, TA, T>(), this, delegate);
      this[WithLatestFromSink_selector] = selector;

      const subscription = this[LiftedSinkLike_subscription];
      this[WithLatestFromSink_otherSubscription] = pipe(
        other,
        addEventListener(subscription, bind(onOtherNotify, this)),
        Disposable.addTo(this),
        DisposableContainer.onComplete(
          bind(onWithLatestFromSinkOtherSubscriptionComplete, this),
        ),
      );

      return this;
    },
    props<TProperties>({
      [WithLatestFromSink_hasLatest]: false,
      [WithLatestFromSink_otherLatest]: none,
      [WithLatestFromSink_selector]: none,
      [WithLatestFromSink_otherSubscription]: none,
    }),
    proto({
      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
      ) {
        this[WithLatestFromSink_otherSubscription][DisposableLike_dispose]();
        this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
      },

      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, TA, T>,
        next: TA,
      ) {
        const shouldEmit = this[WithLatestFromSink_hasLatest];

        if (shouldEmit) {
          const v = this[WithLatestFromSink_selector](
            next,
            this[WithLatestFromSink_otherLatest] as TB,
          );
          this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](v);
        }
      },
    }),
  );
})();
