import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  Mixin3,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
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
import DelegatingEventListenerMixin, {
  DelegatingEventListenerLike,
  DelegatingEventListenerLike_delegate,
} from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import FlowControllerQueueMixin from "../../utils/__mixins__/FlowControllerQueueMixin.js";
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
  const MergeAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing =
    Symbol(
      "MergeAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing",
    );
  const MergeAllConsumer_activeCount = Symbol("MergeAllConsumer_activeCount");
  const MergeAllConsumer_isCompleted = Symbol("MergeAllConsumer_isCompleted");

  type TProperties = {
    [MergeAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing]: Function1<
      TConsumer,
      TConsumer
    >;
    [MergeAllConsumer_isCompleted]: boolean;
    [MergeAllConsumer_activeCount]: number;
  };

  const subscribeToInner = (
    mergeAllConsumer: TProperties &
      FlowControllerQueueLike<TInnerSource> &
      ConsumerLike &
      DelegatingEventListenerLike<TInnerSource, T, TConsumer>,
    source: TInnerSource,
  ) => {
    const delegate = mergeAllConsumer[DelegatingEventListenerLike_delegate];
    mergeAllConsumer[MergeAllConsumer_activeCount]++;

    const sourceDelegate = pipe(
      delegate,
      mergeAllConsumer[
        MergeAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing
      ],
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
        DelegatingEventListenerMixin(),
        FlowControllerQueueMixin(),
      ),
      function MergeAllConsumerMixin(
        this: Omit<
          TReturn<TInnerSource, TConsumer, T>,
          keyof FlowControllerQueueLike
        > &
          TProperties,
        delegate: TConsumer,
        config: Optional<{
          backpressureStrategy?: BackpressureStrategy;
          capacity?: number;
          concurrency?: number;
        }>,
        createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<
          TConsumer,
          TConsumer
        >,
      ): TReturn<TInnerSource, TConsumer, T> {
        init(DelegatingDisposableMixin, this, delegate);
        init(FlowControllerQueueMixin<TInnerSource>(), this, config);
        init(
          DelegatingEventListenerMixin<TInnerSource, T, TConsumer>(),
          this,
          delegate,
        );

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

        this[
          MergeAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing
        ] = createDelegatingNotifyOnlyNonCompletingNonDisposing;

        return this;
      },
      props<TProperties>({
        [MergeAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing]:
          none,
        [MergeAllConsumer_isCompleted]: false,
        [MergeAllConsumer_activeCount]: 0,
      }),
      proto({
        get [SinkLike_isCompleted]() {
          unsafeCast<
            TProperties &
              DelegatingEventListenerLike<TInnerSource, T, TConsumer>
          >(this);
          return (
            this[MergeAllConsumer_isCompleted] ||
            this[DelegatingEventListenerLike_delegate][SinkLike_isCompleted]
          );
        },

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
            DelegatingEventListenerLike<TInnerSource, T, TConsumer>,
        ) {
          const isCompleted = this[SinkLike_isCompleted];
          const activeCount = this[MergeAllConsumer_activeCount];
          this[MergeAllConsumer_isCompleted] = true;

          if (isCompleted || activeCount > 0) {
            return;
          }

          this[DelegatingEventListenerLike_delegate][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default MergeAllConsumerMixin;
