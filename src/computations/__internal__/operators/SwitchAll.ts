import {
  Mixin,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ProducerLike,
  SourceLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import {
  Function1,
  bind,
  invoke,
  none,
  pipe,
  returns,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import LiftedConsumerMixin, {
  LiftedConsumerLike,
} from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import {
  LiftedListenerLike_delegate,
  LiftedListenerLike_notify,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  ConsumerLike,
  DisposableLike_isDisposed,
  ObserverLike,
  SerialDisposableLike,
  SerialDisposableLike_current,
  SinkLike_isCompleted,
} from "../../../utils.js";
import Observable_toProducer from "../../Observable/__private__/Observable.toProducer.js";

const SwitchAllConsumerLike_innerSourceToProducer = Symbol(
  "SwitchAllConsumerLike_innerSourceToProducer",
);

interface SwitchAllConsumerLike<T, TInnerSource extends SourceLike<T>>
  extends LiftedConsumerLike<TInnerSource, T> {
  readonly [SwitchAllConsumerLike_innerSourceToProducer]: Function1<
    TInnerSource,
    ProducerLike<T>
  >;
}

const SwitchAllMixin: <T, TInnerSource extends SourceLike<T>>() => Mixin<
  ConsumerLike<TInnerSource>,
  SwitchAllConsumerLike<T, TInnerSource>
> = /*@__PURE__*/ (<T, TInnerSource extends SourceLike<T>>() => {
  const SwitchAllMixin_currentRef = Symbol("SwitchAllMixin_currentRef");

  type TProperties = {
    [SwitchAllMixin_currentRef]: SerialDisposableLike;
  };

  function onSwitchAllObserverInnerObservableComplete(
    this: TProperties & LiftedConsumerLike<TInnerSource, T>,
  ) {
    if (this[SinkLike_isCompleted]) {
      this[LiftedSinkLike_completeDelegate]();
    }
  }

  return returns(
    mix<
      ConsumerLike<TInnerSource>,
      TProperties,
      Pick<
        SwitchAllConsumerLike<T, TInnerSource>,
        typeof LiftedListenerLike_notify | typeof LiftedSinkLike_complete
      >,
      SwitchAllConsumerLike<T, TInnerSource>
    >(
      function SwitchAllObserver(
        this: SwitchAllConsumerLike<T, TInnerSource> & TProperties,
      ): ConsumerLike<TInnerSource> {
        this[SwitchAllMixin_currentRef] = pipe(
          SerialDisposable.create(),
          Disposable.addTo(this),
        );

        return this;
      },
      props<TProperties>({
        [SwitchAllMixin_currentRef]: none,
      }),
      proto({
        [LiftedListenerLike_notify](
          this: TProperties &
            SwitchAllConsumerLike<T, TInnerSource> &
            TProperties,
          next: TInnerSource,
        ) {
          const delegate = this[LiftedListenerLike_delegate];
          const delegateWrapper = pipe(
            delegate,
            Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
            DisposableContainer.onComplete(
              bind(onSwitchAllObserverInnerObservableComplete, this),
            ),
          );

          this[SwitchAllMixin_currentRef][SerialDisposableLike_current] =
            delegateWrapper;

          pipe(
            next,
            this[SwitchAllConsumerLike_innerSourceToProducer],
            invoke(SourceLike_subscribe, delegateWrapper),
          );
        },

        [LiftedSinkLike_complete](
          this: TProperties & LiftedConsumerLike<ObservableLike<T>, T>,
        ) {
          if (
            this[SwitchAllMixin_currentRef][SerialDisposableLike_current][
              DisposableLike_isDisposed
            ]
          ) {
            this[LiftedSinkLike_completeDelegate]();
          }
        },
      }),
    ),
  );
})();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
) => ConsumerLike<ProducerLike<T>> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), SwitchAllMixin()),
    function WithLatestConsumer(
      this: Pick<
        SwitchAllConsumerLike<T, ProducerLike<T>>,
        typeof SwitchAllConsumerLike_innerSourceToProducer
      >,
      delegate: ConsumerLike<T>,
    ): ConsumerLike<ProducerLike<T>> {
      init(LiftedConsumerMixin<ProducerLike<T>, T>(), this, delegate);
      init(SwitchAllMixin<T, ProducerLike<T>>(), this);

      return this;
    },
    props(),
    proto({
      [SwitchAllConsumerLike_innerSourceToProducer](
        innerSource: ProducerLike<T>,
      ) {
        return innerSource;
      },
    }),
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
) => ObserverLike<ObservableLike<T>> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), SwitchAllMixin()),
    function WithLatestObserver(
      this: Pick<
        SwitchAllConsumerLike<T, ObservableLike<T>>,
        typeof SwitchAllConsumerLike_innerSourceToProducer
      >,
      delegate: ObserverLike<T>,
    ): ObserverLike<ObservableLike<T>> {
      init(LiftedObserverMixin<ObservableLike<T>, T>(), this, delegate, none);
      init(SwitchAllMixin<T, ObservableLike<T>>(), this);

      return this;
    },
    props(),
    proto({
      [SwitchAllConsumerLike_innerSourceToProducer](
        this: LiftedObserverLike<ObservableLike<T>, T>,
        innerSource: ObservableLike<T>,
      ) {
        const scheduler = this[LiftedListenerLike_delegate];
        return pipe(innerSource, Observable_toProducer({ scheduler }));
      },
    }),
  ))();
