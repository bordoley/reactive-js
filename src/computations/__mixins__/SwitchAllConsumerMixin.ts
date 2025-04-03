import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import {
  EventSourceLike,
  EventSourceLike_subscribe,
} from "../../computations.js";
import { Function1, bind, none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import FlowControllerWithoutBackpressureMixin from "../../utils/__mixins__/FlowControllerWithoutBackpressureMixin.js";
import SinkMixin, {
  SinkMixinLike,
  SinkMixinLike_delegate,
  SinkMixinLike_doComplete,
  SinkMixinLike_isCompleted,
} from "../../utils/__mixins__/SinkMixin.js";
import {
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  FlowControllerLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";

type TReturn<
  TInnerSource extends EventSourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
> = ConsumerLike<TInnerSource>;

const SwitchAllConsumerMixin: <
  TInnerSource extends EventSourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
>() => Mixin2<
  TReturn<TInnerSource, TConsumer, T>,
  ConsumerLike<T>,
  Function1<TConsumer, TConsumer>
> = /*@__PURE__*/ (<
  TInnerSource extends EventSourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
>() => {
  const SwitchAllConsumer_createDelegatingNonCompleting = Symbol(
    "SwitchAllConsumer_createDelegatingNonCompleting",
  );
  const SwitchAllConsumer_innerSubscription = Symbol(
    "SwitchAllConsumer_innerSubscription",
  );

  type TProperties = {
    [SwitchAllConsumer_createDelegatingNonCompleting]: Function1<
      TConsumer,
      TConsumer
    >;
    [SwitchAllConsumer_innerSubscription]: DisposableLike;
  };

  function onSwitchAllConsumerInnerSourceComplete(
    this: TProperties &
      ConsumerLike<TInnerSource> &
      SinkMixinLike<TConsumer, T>,
  ) {
    if (this[SinkLike_isCompleted]) {
      this[SinkMixinLike_doComplete]();
    }
  }

  return returns(
    mix(
      include(
        DelegatingDisposableMixin,
        FlowControllerWithoutBackpressureMixin,
        SinkMixin(),
      ),
      function SwitchAllConsumerMixin(
        this: Omit<
          TReturn<TInnerSource, TConsumer, T>,
          keyof FlowControllerLike | typeof SinkLike_isCompleted
        > &
          TProperties,
        delegate: TConsumer,
        createDelegatingNonCompleting: Function1<TConsumer, TConsumer>,
      ): TReturn<TInnerSource, TConsumer, T> {
        init(DelegatingDisposableMixin, this, delegate);
        init(FlowControllerWithoutBackpressureMixin, this);
        init(SinkMixin<TConsumer, T>(), this, delegate);

        this[SwitchAllConsumer_createDelegatingNonCompleting] =
          createDelegatingNonCompleting;

        return this;
      },
      props<TProperties>({
        [SwitchAllConsumer_createDelegatingNonCompleting]: none,
        [SwitchAllConsumer_innerSubscription]: Disposable.disposed,
      }),
      proto({
        [EventListenerLike_notify](
          this: TProperties &
            ConsumerLike<TInnerSource> &
            SinkMixinLike<TConsumer, T>,
          next: TInnerSource,
        ) {
          if (this[SinkLike_isCompleted]) {
            return;
          }
          this[SwitchAllConsumer_innerSubscription][DisposableLike_dispose]();

          const delegate = this[SinkMixinLike_delegate];
          const delegatingNotifyOnlyNonCompletingNonDisposing = pipe(
            this[SwitchAllConsumer_createDelegatingNonCompleting](delegate),
            DisposableContainer.onComplete(
              bind(onSwitchAllConsumerInnerSourceComplete, this),
            ),
          );

          next[EventSourceLike_subscribe](
            delegatingNotifyOnlyNonCompletingNonDisposing,
          );

          this[SwitchAllConsumer_innerSubscription] =
            delegatingNotifyOnlyNonCompletingNonDisposing;
        },
        [SinkLike_complete](
          this: TProperties &
            ConsumerLike<TInnerSource> &
            SinkMixinLike<TConsumer, T>,
        ) {
          const isCompleted = this[SinkLike_isCompleted];
          this[SinkMixinLike_isCompleted] = true;
          const innerSubscriptionIsDispsoed =
            this[SwitchAllConsumer_innerSubscription][
              DisposableLike_isDisposed
            ];

          if (!isCompleted && innerSubscriptionIsDispsoed) {
            this[SinkMixinLike_doComplete]();
          }
        },
      }),
    ),
  );
})();

export default SwitchAllConsumerMixin;
