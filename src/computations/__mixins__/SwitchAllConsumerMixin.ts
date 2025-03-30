import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { SourceLike, SourceLike_subscribe } from "../../computations.js";
import { Function1, bind, none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_backpressureStrategy,
  FlowControllerLike_capacity,
  FlowControllerLike_isReady,
  OverflowBackpressureStrategy,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";

type TReturn<
  TInnerSource extends SourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
> = ConsumerLike<TInnerSource>;

const SwitchAllConsumerMixin: <
  TInnerSource extends SourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
>() => Mixin2<
  TReturn<TInnerSource, TConsumer, T>,
  ConsumerLike<T>,
  Function1<TConsumer, TConsumer>
> = /*@__PURE__*/ (<
  TInnerSource extends SourceLike<T, TConsumer>,
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

  const SwitchAllConsumer_delegate = Symbol("SwitchAllConsumer_delegate");

  interface TProperties {
    [SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing]: Function1<
      TConsumer,
      TConsumer
    >;
    [SwitchAllConsumer_innerSubscription]: DisposableLike;
    [SwitchAllConsumer_delegate]: TConsumer;
    [SinkLike_isCompleted]: boolean;
  }

  function onSwitchAllConsumerInnerSourceComplete(this: TProperties) {
    if (this[SinkLike_isCompleted]) {
      this[SwitchAllConsumer_delegate][SinkLike_complete]();
    }
  }

  return returns(
    mix(
      include(DelegatingDisposableMixin),
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

        this[
          SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing
        ] = createDelegatingNotifyOnlyNonCompletingNonDisposing;
        this[SwitchAllConsumer_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing]:
          none,
        [SwitchAllConsumer_innerSubscription]: Disposable.disposed,
        [SwitchAllConsumer_delegate]: none,
        [SinkLike_isCompleted]: false,
      }),
      proto({
        [FlowControllerLike_isReady]: true as const,
        [FlowControllerLike_backpressureStrategy]: OverflowBackpressureStrategy,

        [FlowControllerLike_capacity]: MAX_SAFE_INTEGER,

        [FlowControllerLike_addOnReadyListener]() {
          return Disposable.disposed;
        },

        [EventListenerLike_notify](
          this: TProperties & ConsumerLike<TInnerSource>,
          next: TInnerSource,
        ) {
          if (this[SinkLike_isCompleted]) {
            return;
          }
          this[SwitchAllConsumer_innerSubscription][DisposableLike_dispose]();

          const delegate = this[SwitchAllConsumer_delegate];
          const delegatingNotifyOnlyNonCompletingNonDisposing = pipe(
            this[
              SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing
            ](delegate),
            DisposableContainer.onComplete(
              bind(onSwitchAllConsumerInnerSourceComplete, this),
            ),
            Disposable.addTo(this),
          );

          next[SourceLike_subscribe](
            delegatingNotifyOnlyNonCompletingNonDisposing,
          );

          this[SwitchAllConsumer_innerSubscription] =
            delegatingNotifyOnlyNonCompletingNonDisposing;
        },
        [SinkLike_complete](this: TProperties) {
          const isCompleted = this[SinkLike_isCompleted];
          this[SinkLike_isCompleted] = true;
          const innerSubscriptionIsDispoed =
            this[SwitchAllConsumer_innerSubscription][
              DisposableLike_isDisposed
            ];

          if (!isCompleted && innerSubscriptionIsDispoed) {
            this[SwitchAllConsumer_delegate][SinkLike_complete]();
          }
        },
      }),
    ),
  );
})();

export default SwitchAllConsumerMixin;
