import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  Mixin3,
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
import { Function1, Optional, none, pipe, returns } from "../../functions.js";
import { clampPositiveNonZeroInteger } from "../../math.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import { DelegatingEventListenerLike_delegate } from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DelegatingNonCompletingSinkMixin from "../../utils/__mixins__/DelegatingNonCompletingSinkMixin.js";
import { DelegatingSinkLike } from "../../utils/__mixins__/DelegatingSinkMixin.js";
import FlowControlQueueMixin from "../../utils/__mixins__/FlowControlQueueMixin.js";
import {
  BackpressureStrategy,
  ConsumableEnumeratorLike_addOnDataAvailableListener,
  ConsumerLike,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControlQueueLike,
  QueueLike_enqueue,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";

type TReturn<
  TInnerSource extends EventSourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
> = ConsumerLike<TInnerSource>;

const MergeAllConsumerMixin: <
  TInnerSource extends EventSourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
>() => Mixin3<
  TReturn<TInnerSource, TConsumer, T>,
  ConsumerLike<T>,
  Optional<{
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
    concurrency?: number;
  }>,
  Function1<TConsumer, TConsumer>
> = /*@__PURE__*/ (<
  TInnerSource extends EventSourceLike<T, TConsumer>,
  TConsumer extends ConsumerLike<T>,
  T,
>() => {
  const MergeAllConsumer_createDelegatingNonCompleting = Symbol(
    "MergeAllConsumer_createDelegatingNonCompleting",
  );
  const MergeAllConsumer_activeCount = Symbol("MergeAllConsumer_activeCount");

  type TProperties = {
    [MergeAllConsumer_createDelegatingNonCompleting]: Function1<
      TConsumer,
      TConsumer
    >;
    [MergeAllConsumer_activeCount]: number;
  };

  const subscribeToInner = (
    mergeAllConsumer: TProperties &
      FlowControlQueueLike<TInnerSource> &
      ConsumerLike &
      DelegatingSinkLike<TInnerSource, T, TConsumer>,
    source: TInnerSource,
  ) => {
    const delegate = mergeAllConsumer[DelegatingEventListenerLike_delegate];
    mergeAllConsumer[MergeAllConsumer_activeCount]++;

    const sourceDelegate = pipe(
      delegate,
      mergeAllConsumer[MergeAllConsumer_createDelegatingNonCompleting],
      DisposableContainer.onComplete(() => {
        mergeAllConsumer[MergeAllConsumer_activeCount]--;
        const activeCount = mergeAllConsumer[MergeAllConsumer_activeCount];

        if (mergeAllConsumer[EnumeratorLike_moveNext]()) {
          const next = mergeAllConsumer[EnumeratorLike_current];
          subscribeToInner(mergeAllConsumer, next);
        } else if (activeCount <= 0 && mergeAllConsumer[SinkLike_isCompleted]) {
          delegate[SinkLike_complete]();
        }
      }),
    );

    source[EventSourceLike_subscribe](sourceDelegate);
  };

  return returns(
    mix(
      include(FlowControlQueueMixin(), DelegatingNonCompletingSinkMixin()),
      function MergeAllConsumerMixin(
        this: Omit<
          TReturn<TInnerSource, TConsumer, T>,
          keyof FlowControlQueueLike | keyof SinkLike
        > &
          TProperties,
        delegate: TConsumer,
        config: Optional<{
          backpressureStrategy?: BackpressureStrategy;
          capacity?: number;
          concurrency?: number;
        }>,
        createDelegatingNonCompleting: Function1<TConsumer, TConsumer>,
      ): TReturn<TInnerSource, TConsumer, T> {
        init(FlowControlQueueMixin<TInnerSource>(), this, config);
        init(
          DelegatingNonCompletingSinkMixin<TInnerSource, T, TConsumer>(),
          this,
          delegate,
        );

        const maxConcurrency = clampPositiveNonZeroInteger(
          config?.concurrency ?? MAX_SAFE_INTEGER,
        );

        this[ConsumableEnumeratorLike_addOnDataAvailableListener](() => {
          const activeCount = this[MergeAllConsumer_activeCount];

          if (activeCount >= maxConcurrency) {
            return;
          }

          if (this[EnumeratorLike_moveNext]()) {
            const next = this[EnumeratorLike_current];
            subscribeToInner(this, next);
          }
        });

        pipe(
          this,
          DisposableContainer.onComplete(() => {
            const activeCount = this[MergeAllConsumer_activeCount];

            if (activeCount <= 0) {
              delegate[SinkLike_complete]();
            }
          }),
        );

        this[MergeAllConsumer_createDelegatingNonCompleting] =
          createDelegatingNonCompleting;

        return this;
      },
      props<TProperties>({
        [MergeAllConsumer_createDelegatingNonCompleting]: none,
        [MergeAllConsumer_activeCount]: 0,
      }),
      proto({
        [EventListenerLike_notify](
          this: FlowControlQueueLike<TInnerSource>,
          next: TInnerSource,
        ) {
          this[QueueLike_enqueue](next);
        },
      }),
    ),
  );
})();

export default MergeAllConsumerMixin;
