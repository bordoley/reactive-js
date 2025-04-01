import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import {
  BackPressureConfig_capacity,
  BackPressureConfig_strategy,
  CollectionEnumeratorLike,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  OverflowBackpressureStrategy,
  SchedulerLike,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";

export const collect: <T>(
  scheduler: SchedulerLike,
  buffer: T[],
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    ObserverLike<T>,
    | typeof FlowControllerLike_isReady
    | typeof FlowControllerLike_addOnReadyListener
    | typeof BackPressureConfig_capacity
    | typeof BackPressureConfig_strategy
  >;

  return mixInstanceFactory(
    include(CollectorSinkMixin(), DelegatingSchedulerMixin),
    function CollectObserver(
      this: TPrototype,
      scheduler: SchedulerLike,
      buffer: T[],
    ): ObserverLike<T> {
      init(CollectorSinkMixin(), this, buffer);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
    props(),
    proto<TPrototype>({
      [FlowControllerLike_isReady]: true as const,
      [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,
      [BackPressureConfig_strategy]: OverflowBackpressureStrategy,
      [FlowControllerLike_addOnReadyListener]() {
        return Disposable.disposed;
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
