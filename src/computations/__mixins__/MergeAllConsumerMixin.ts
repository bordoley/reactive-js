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
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import FlowControllerQueueMixin from "../../utils/__mixins__/FlowControllerQueueMixin.js";
import SinkMixin, {
  SinkMixinLike,
  SinkMixinLike_delegate,
  SinkMixinLike_doComplete,
  SinkMixinLike_isCompleted,
} from "../../utils/__mixins__/SinkMixin.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerEnumeratorLike_addOnDataAvailableListener,
  FlowControllerQueueLike,
  QueueLike_enqueue,
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
      FlowControllerQueueLike<TInnerSource> &
      ConsumerLike &
      SinkMixinLike<TConsumer, T>,
    source: TInnerSource,
  ) => {
    const delegate = mergeAllConsumer[SinkMixinLike_delegate];
    mergeAllConsumer[MergeAllConsumer_activeCount]++;

    const sourceDelegate = pipe(
      delegate,
      mergeAllConsumer[MergeAllConsumer_createDelegatingNonCompleting],
      Disposable.addTo(mergeAllConsumer),
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
      include(
        DelegatingDisposableMixin,
        FlowControllerQueueMixin(),
        SinkMixin(),
      ),
      function MergeAllConsumerMixin(
        this: Omit<
          TReturn<TInnerSource, TConsumer, T>,
          keyof FlowControllerQueueLike | typeof SinkLike_isCompleted
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
        init(DelegatingDisposableMixin, this, delegate);
        init(FlowControllerQueueMixin<TInnerSource>(), this, config);
        init(SinkMixin<TConsumer, T>(), this, delegate);

        const maxConcurrency = clampPositiveNonZeroInteger(
          config?.concurrency ?? MAX_SAFE_INTEGER,
        );

        pipe(
          this,
          Disposable.add(
            this[FlowControllerEnumeratorLike_addOnDataAvailableListener](
              () => {
                const activeCount = this[MergeAllConsumer_activeCount];

                if (activeCount >= maxConcurrency) {
                  return;
                }

                if (this[EnumeratorLike_moveNext]()) {
                  const next = this[EnumeratorLike_current];
                  subscribeToInner(this, next);
                }
              },
            ),
          ),
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
          this: TProperties &
            ConsumerLike<TInnerSource> &
            FlowControllerQueueLike<TInnerSource>,
          next: TInnerSource,
        ) {
          this[QueueLike_enqueue](next);
        },

        [SinkLike_complete](
          this: TProperties &
            ConsumerLike<TInnerSource> &
            SinkMixinLike<TConsumer, T>,
        ) {
          const isCompleted = this[SinkLike_isCompleted];
          const activeCount = this[MergeAllConsumer_activeCount];
          this[SinkMixinLike_isCompleted] = true;

          if (isCompleted || activeCount > 0) {
            return;
          }

          this[SinkMixinLike_doComplete]();
        },
      }),
    ),
  );
})();

export default MergeAllConsumerMixin;
