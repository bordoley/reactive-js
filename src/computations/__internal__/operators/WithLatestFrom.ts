import {
  Mixin3,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ObservableLike,
  ProducerLike,
  SourceLike,
} from "../../../computations.js";
import {
  Function1,
  Function2,
  Optional,
  SideEffect1,
  bind,
  compose,
  none,
  pipe,
  returns,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import LiftedListenerMixin, {
  LiftedListenerLike,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ConsumerLike,
  DisposableLike,
  ListenerLike,
  ObserverLike,
  SchedulerLike,
  SinkLike_complete,
} from "../../../utils.js";
import Broadcaster_addEventHandler from "../../Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__private__/Observable.subscribe.js";
import Producer_forEach from "../../Producer/__private__/Producer.forEach.js";
import Producer_subscribe from "../../Producer/__private__/Producer.subscribe.js";

const WithLatestFromMixin: <
  TA,
  TB,
  T,
  TOther extends SourceLike<TB> = SourceLike<TB>,
>() => Mixin3<
  LiftedListenerLike<TA, T>,
  TOther,
  Function2<TA, TB, T>,
  Function1<SideEffect1<TB>, Function1<TOther, DisposableLike>>
> = /*@__PURE__*/ (<
  TA,
  TB,
  T,
  TOther extends SourceLike<TB> = SourceLike<TB>,
>() => {
  const WithLatestFromMixin_hasLatest = Symbol("WithLatestFromMixin_hasLatest");
  const WithLatestFromMixin_otherLatest = Symbol(
    "WithLatestFromMixin_otherLatest",
  );
  const WithLatestFromMixin_selector = Symbol("WithLatestFromMixin_selector");

  type TProperties = {
    [WithLatestFromMixin_hasLatest]: boolean;
    [WithLatestFromMixin_otherLatest]: Optional<TB>;
    [WithLatestFromMixin_selector]: Function2<TA, TB, T>;
  };

  function onWithLatestFromMixinOtherSubscriptionComplete(
    this: TProperties & DisposableLike & ConsumerLike,
  ) {
    if (!this[WithLatestFromMixin_hasLatest]) {
      this[SinkLike_complete]();
    }
  }

  function onOtherNotify(this: TProperties, next: TB) {
    this[WithLatestFromMixin_hasLatest] = true;
    this[WithLatestFromMixin_otherLatest] = next;
  }

  return returns(
    mix<
      LiftedListenerLike<TA, T>,
      TProperties,
      Pick<LiftedListenerLike<TA, T>, typeof LiftedListenerLike_notify>,
      LiftedListenerLike<TA, T>,
      TOther,
      Function2<TA, TB, T>,
      Function1<SideEffect1<TB>, Function1<TOther, DisposableLike>>
    >(
      function WithLatestFromMixin(
        this: LiftedListenerLike<TA, T> & TProperties,
        other: TOther,
        selector: Function2<TA, TB, T>,
        addEventListener: Function1<
          SideEffect1<TB>,
          Function1<TOther, DisposableLike>
        >,
      ): LiftedListenerLike<TA, T> {
        this[WithLatestFromMixin_selector] = selector;

        pipe(
          other,
          addEventListener(bind(onOtherNotify, this)),
          Disposable.addTo(this),
          DisposableContainer.onComplete(
            bind(onWithLatestFromMixinOtherSubscriptionComplete, this),
          ),
        );

        return this;
      },
      props<TProperties>({
        [WithLatestFromMixin_hasLatest]: false,
        [WithLatestFromMixin_otherLatest]: none,
        [WithLatestFromMixin_selector]: none,
      }),
      proto({
        [LiftedListenerLike_notify](
          this: TProperties & LiftedObserverLike<TA, T>,
          next: TA,
        ) {
          const shouldEmit = this[WithLatestFromMixin_hasLatest];

          if (shouldEmit) {
            const v = this[WithLatestFromMixin_selector](
              next,
              this[WithLatestFromMixin_otherLatest] as TB,
            );
            this[LiftedListenerLike_notifyDelegate](v);
          }
        },
      }),
    ),
  );
})();

export const createListener: <TA, TB, T>(
  delegate: ListenerLike<T>,
  other: BroadcasterLike<TB>,
  selector: Function2<TA, TB, T>,
) => ListenerLike<TA> = /*@__PURE__*/ (<TA, TB, T>() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), WithLatestFromMixin()),
    function WithLatestListener(
      this: unknown,
      delegate: ListenerLike<T>,
      other: BroadcasterLike<TB>,
      selector: Function2<TA, TB, T>,
    ): ListenerLike<TA> {
      init(LiftedListenerMixin<T>(), this, delegate);
      init(
        WithLatestFromMixin<TA, TB, T, BroadcasterLike<TB>>(),
        this,
        other,
        selector,
        Broadcaster_addEventHandler<TB>,
      );

      return this;
    },
  ))();

const Producer_addEventListener = <T>(callback: SideEffect1<T>) =>
  compose(Producer_forEach(callback), Producer_subscribe());

export const createConsumer: <TA, TB, T>(
  delegate: ConsumerLike<T>,
  other: ProducerLike<TB>,
  selector: Function2<TA, TB, T>,
) => ConsumerLike<TA> = /*@__PURE__*/ (<TA, TB, T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), WithLatestFromMixin()),
    function WithLatestConsumer(
      this: unknown,
      delegate: ConsumerLike<T>,
      other: ProducerLike<TB>,
      selector: Function2<TA, TB, T>,
    ): ConsumerLike<TA> {
      init(LiftedConsumerMixin<T>(), this, delegate);
      init(
        WithLatestFromMixin<TA, TB, T, ProducerLike<TB>>(),
        this,
        other,
        selector,
        Producer_addEventListener,
      );

      return this;
    },
  ))();

const Observable_addEventListener =
  (scheduler: SchedulerLike) =>
  <T>(callback: SideEffect1<T>) =>
    compose(Observable_forEach(callback), Observable_subscribe({ scheduler }));

export const createObserver: <TA, TB, T>(
  delegate: ObserverLike<T>,
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB, T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), WithLatestFromMixin()),
    function WithLatestObserver(
      this: unknown,
      delegate: ObserverLike<T>,
      other: ObservableLike<TB>,
      selector: Function2<TA, TB, T>,
    ): ObserverLike<TA> {
      init(LiftedObserverMixin<T>(), this, delegate, none);
      init(
        WithLatestFromMixin<TA, TB, T, ObservableLike<TB>>(),
        this,
        other,
        selector,
        Observable_addEventListener(this),
      );

      return this;
    },
  ))();
