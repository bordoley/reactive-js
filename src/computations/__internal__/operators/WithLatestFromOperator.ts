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

export const create: <TSubscription extends DisposableLike, TOther, TA, TB, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  other: TOther,
  selector: Function2<TA, TB, T>,
  addEventListener: Function2<
    TSubscription,
    SideEffect1<TB>,
    Function1<TOther, DisposableLike>
  >,
) => LiftedSinkLike<TSubscription, TA> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  TOther,
  TA,
  TB,
  T,
>() => {
  const WithLatestFromOperator_selector = Symbol(
    "WithLatestFromOperator_selector",
  );
  const WithLatestFromOperator_hasLatest = Symbol(
    "WithLatestFromOperator_hasLatest",
  );
  const WithLatestFromOperator_otherLatest = Symbol(
    "WithLatestFromOperator_otherLatest",
  );
  const WithLatestFromOperator_otherSubscription = Symbol(
    "WithLatestFromOperator_otherSubscription",
  );

  interface TProperties {
    [WithLatestFromOperator_hasLatest]: boolean;
    [WithLatestFromOperator_otherLatest]: Optional<TB>;
    [WithLatestFromOperator_selector]: Function2<TA, TB, T>;
    [WithLatestFromOperator_otherSubscription]: DisposableLike;
  }

  function onWithLatestFromOperatorOtherSubscriptionComplete(
    this: TProperties & LiftedSinkLike<TSubscription, TA>,
  ) {
    if (!this[WithLatestFromOperator_hasLatest]) {
      this[SinkLike_complete]();
    }
  }

  function onOtherNotify(this: TProperties, next: TB) {
    this[WithLatestFromOperator_hasLatest] = true;
    this[WithLatestFromOperator_otherLatest] = next;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, TA, TB>()),
    function WithLatestFromOperator(
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
      this[WithLatestFromOperator_selector] = selector;

      const subscription = this[LiftedSinkLike_subscription];
      this[WithLatestFromOperator_otherSubscription] = pipe(
        other,
        addEventListener(subscription, bind(onOtherNotify, this)),
        Disposable.addTo(subscription),
        DisposableContainer.onComplete(
          bind(onWithLatestFromOperatorOtherSubscriptionComplete, this),
        ),
      );

      return this;
    },
    props<TProperties>({
      [WithLatestFromOperator_hasLatest]: false,
      [WithLatestFromOperator_otherLatest]: none,
      [WithLatestFromOperator_selector]: none,
      [WithLatestFromOperator_otherSubscription]: none,
    }),
    proto({
      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
      ) {
        this[WithLatestFromOperator_otherSubscription][
          DisposableLike_dispose
        ]();
        this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
      },

      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, TA, T>,
        next: TA,
      ) {
        const shouldEmit = this[WithLatestFromOperator_hasLatest];

        if (shouldEmit) {
          const v = this[WithLatestFromOperator_selector](
            next,
            this[WithLatestFromOperator_otherLatest] as TB,
          );
          this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](v);
        }
      },
    }),
  );
})();
