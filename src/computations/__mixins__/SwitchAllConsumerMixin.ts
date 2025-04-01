import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  ReactiveSourceLike,
  ReactiveSourceLike_subscribe,
} from "../../computations.js";
import { Function1, bind, none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingEventListenerMixin, {
  DelegatingEventListenerLike,
  DelegatingEventListenerLike_delegate,
} from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import {
  BackPressureConfig_capacity,
  BackPressureConfig_strategy,
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  OverflowBackpressureStrategy,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";

type TReturn<
  TInnerSource extends ReactiveSourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
> = ConsumerLike<TInnerSource>;

const SwitchAllConsumerMixin: <
  TInnerSource extends ReactiveSourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
>() => Mixin2<
  TReturn<TInnerSource, TConsumer, T>,
  ConsumerLike<T>,
  Function1<TConsumer, TConsumer>
> = /*@__PURE__*/ (<
  TInnerSource extends ReactiveSourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
>() => {
  const SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing =
    Symbol(
      "SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing",
    );
  const SwitchAllConsumer_innerSubscription = Symbol(
    "SwitchAllConsumer_innerSubscription",
  );
  const SwitchAllConsumer_isCompleted = Symbol("SwitchAllConsumer_isCompleted");

  type TProperties = {
    [SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing]: Function1<
      TConsumer,
      TConsumer
    >;
    [SwitchAllConsumer_innerSubscription]: DisposableLike;
    [SwitchAllConsumer_isCompleted]: boolean;
  };

  function onSwitchAllConsumerInnerSourceComplete(
    this: TProperties &
      ConsumerLike<TInnerSource> &
      DelegatingEventListenerLike<TInnerSource, T, TConsumer>,
  ) {
    if (this[SinkLike_isCompleted]) {
      this[DelegatingEventListenerLike_delegate][SinkLike_complete]();
    }
  }

  return returns(
    mix(
      include(DelegatingDisposableMixin, DelegatingEventListenerMixin()),
      function SwitchAllConsumerMixin(
        this: Omit<TReturn<TInnerSource, TConsumer, T>, keyof DisposableLike> &
          TProperties,
        delegate: TConsumer,
        createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<
          TConsumer,
          TConsumer
        >,
      ): TReturn<TInnerSource, TConsumer, T> {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingEventListenerMixin(), this, delegate);

        this[
          SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing
        ] = createDelegatingNotifyOnlyNonCompletingNonDisposing;

        return this;
      },
      props<TProperties>({
        [SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing]:
          none,
        [SwitchAllConsumer_innerSubscription]: Disposable.disposed,
        [SwitchAllConsumer_isCompleted]: false,
      }),
      proto({
        get [SinkLike_isCompleted]() {
          unsafeCast<
            TProperties &
              DelegatingEventListenerLike<TInnerSource, T, TConsumer>
          >(this);
          return (
            this[SwitchAllConsumer_isCompleted] ||
            this[DelegatingEventListenerLike_delegate][SinkLike_isCompleted]
          );
        },

        [FlowControllerLike_isReady]: true as const,
        [BackPressureConfig_strategy]: OverflowBackpressureStrategy,

        [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,

        [FlowControllerLike_addOnReadyListener]() {
          return Disposable.disposed;
        },

        [EventListenerLike_notify](
          this: TProperties &
            ConsumerLike<TInnerSource> &
            DelegatingEventListenerLike<TInnerSource, T, TConsumer>,
          next: TInnerSource,
        ) {
          if (this[SinkLike_isCompleted]) {
            return;
          }
          this[SwitchAllConsumer_innerSubscription][DisposableLike_dispose]();

          const delegate = this[DelegatingEventListenerLike_delegate];
          const delegatingNotifyOnlyNonCompletingNonDisposing = pipe(
            this[
              SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing
            ](delegate),
            DisposableContainer.onComplete(
              bind(onSwitchAllConsumerInnerSourceComplete, this),
            ),
            Disposable.addTo(this),
          );

          next[ReactiveSourceLike_subscribe](
            delegatingNotifyOnlyNonCompletingNonDisposing,
          );

          this[SwitchAllConsumer_innerSubscription] =
            delegatingNotifyOnlyNonCompletingNonDisposing;
        },
        [SinkLike_complete](
          this: TProperties &
            ConsumerLike<TInnerSource> &
            DelegatingEventListenerLike<TInnerSource, T, TConsumer>,
        ) {
          const isCompleted = this[SinkLike_isCompleted];
          this[SwitchAllConsumer_isCompleted] = true;
          const innerSubscriptionIsDispsoed =
            this[SwitchAllConsumer_innerSubscription][
              DisposableLike_isDisposed
            ];

          if (!isCompleted && innerSubscriptionIsDispsoed) {
            this[DelegatingEventListenerLike_delegate][SinkLike_complete]();
          }
        },
      }),
    ),
  );
})();

export default SwitchAllConsumerMixin;
