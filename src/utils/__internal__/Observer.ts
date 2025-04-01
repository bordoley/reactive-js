import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { none, pipe } from "../../functions.js";
import {
  BackPressureConfig_capacity,
  BackPressureConfig_strategy,
  CollectionEnumeratorLike,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  OverflowBackpressureStrategy,
  SchedulerLike,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";

export const collect: <T>(
  scheduler: SchedulerLike,
  buffer: T[],
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const CollectObserver_buffer = Symbol("CollectObserver_buffer");
  const CollectObserver_count = Symbol("CollectObserver_count");

  type TProperties = {
    [CollectObserver_buffer]: T[];
    [CollectObserver_count]: number;
  };

  type TPrototype = Pick<
    ObserverLike<T>,
    | typeof FlowControllerLike_isReady
    | typeof FlowControllerLike_addOnReadyListener
    | typeof BackPressureConfig_capacity
    | typeof BackPressureConfig_strategy
    | typeof EventListenerLike_notify
  >;

  function onCollectObserverCompleted(this: TProperties) {
    const buffer = this[CollectObserver_buffer];
    const count = this[CollectObserver_count];
    buffer.length = count;
  }

  return mixInstanceFactory(
    include(
      DisposableMixin,
      DelegatingSchedulerMixin,
      DisposeOnCompleteSinkMixin(),
    ),
    function CollectObserver(
      this: TProperties & TPrototype,
      scheduler: SchedulerLike,
      buffer: T[],
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(DisposeOnCompleteSinkMixin(), this);

      this[CollectObserver_buffer] = buffer;

      buffer.length = 0;

      pipe(this, DisposableContainer.onComplete(onCollectObserverCompleted));

      return this;
    },
    props<TProperties>({
      [CollectObserver_buffer]: none,
      [CollectObserver_count]: 0,
    }),
    proto<TPrototype>({
      [FlowControllerLike_isReady]: true as const,
      [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,
      [BackPressureConfig_strategy]: OverflowBackpressureStrategy,
      [FlowControllerLike_addOnReadyListener]() {
        return Disposable.disposed;
      },
      [EventListenerLike_notify](this: TProperties, next: T) {
        const buffer = this[CollectObserver_buffer];
        const bufferLength = buffer.length;
        const index = this[CollectObserver_count];

        if (index === bufferLength) {
          buffer.length = index === 0 ? 32 : index << 1;
        }

        buffer[index] = next;
        this[CollectObserver_count]++;
      },
    }),
  );
})();

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(),
      DelegatingSchedulerMixin,
    ),
    function NonDisposingDelegatingObserver(
      this: unknown,
      delegate: ObserverLike<T>,
    ): ObserverLike<T> {
      init(
        DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(),
        this,
        delegate,
      );
      init(DelegatingSchedulerMixin, this, delegate);

      return this;
    },
  ))();

export const takeLast: <T>(
  scheduler: SchedulerLike,
  capacity: number,
) => ObserverLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(TakeLastConsumerMixin(), DelegatingSchedulerMixin),
    function TakeLastObserver(
      this: unknown,
      scheduler: SchedulerLike,
      capacity: number,
    ): ObserverLike<T> & CollectionEnumeratorLike<T> {
      init(TakeLastConsumerMixin<T>(), this, capacity);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
  ))();
