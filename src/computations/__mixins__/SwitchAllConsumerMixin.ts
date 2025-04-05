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
import { DelegatingEventListenerLike_delegate } from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DelegatingNonCompletingSinkMixin from "../../utils/__mixins__/DelegatingNonCompletingSinkMixin.js";
import { DelegatingSinkLike } from "../../utils/__mixins__/DelegatingSinkMixin.js";
import FlowControllerWithoutBackpressureMixin from "../../utils/__mixins__/FlowControllerWithoutBackpressureMixin.js";
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
      DelegatingSinkLike<TInnerSource, T, TConsumer>,
  ) {
    if (this[SinkLike_isCompleted]) {
      this[DelegatingEventListenerLike_delegate][SinkLike_complete]();
    }
  }

  return returns(
    mix(
      include(
        FlowControllerWithoutBackpressureMixin,
        DelegatingNonCompletingSinkMixin(),
      ),
      function SwitchAllConsumerMixin(
        this: Omit<
          TReturn<TInnerSource, TConsumer, T>,
          | keyof FlowControllerLike
          | typeof SinkLike_isCompleted
          | typeof SinkLike_complete
        > &
          TProperties,
        delegate: TConsumer,
        createDelegatingNonCompleting: Function1<TConsumer, TConsumer>,
      ): TReturn<TInnerSource, TConsumer, T> {
        init(FlowControllerWithoutBackpressureMixin, this);
        init(
          DelegatingNonCompletingSinkMixin<TInnerSource, T, TConsumer>(),
          this,
          delegate,
        );

        this[SwitchAllConsumer_createDelegatingNonCompleting] =
          createDelegatingNonCompleting;

        pipe(
          this,
          DisposableContainer.onComplete(() => {
            const innerSubscriptionIsDispsoed =
              this[SwitchAllConsumer_innerSubscription][
                DisposableLike_isDisposed
              ];

            if (innerSubscriptionIsDispsoed) {
              delegate[SinkLike_complete]();
            }
          }),
        );

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
            DelegatingSinkLike<TInnerSource, T, TConsumer>,
          next: TInnerSource,
        ) {
          this[SwitchAllConsumer_innerSubscription][DisposableLike_dispose]();

          const delegate = this[DelegatingEventListenerLike_delegate];
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
      }),
    ),
  );
})();

export default SwitchAllConsumerMixin;
