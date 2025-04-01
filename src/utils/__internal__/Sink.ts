import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  createInstanceFactory,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { LiftedSinkLike } from "../../computations/__internal__/LiftedSource.js";
import { Function1, SideEffect1 } from "../../functions.js";
import {
  BackPressureConfig_capacity,
  BackPressureConfig_strategy,
  DisposableLike,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  OverflowBackpressureStrategy,
  SchedulerLike,
  SinkLike,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import { Sink_toLiftedSink } from "./Sink/__private__/Sink.toLiftedSink.js";

export const collect: <T>(buffer: T[]) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(CollectorSinkMixin()),
    function CollectorSink(this: unknown, buffer: T[]): SinkLike<T> {
      init(CollectorSinkMixin(), this, buffer);

      return this;
    },
  ))();

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: SinkLike<T>,
) => SinkLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(
    DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin(),
  ))();

export const toLiftedSink: <T>() => Function1<
  SinkLike<T>,
  LiftedSinkLike<SinkLike<T>, T>
> = Sink_toLiftedSink;

export const toObserver: <T>(
  scheduler: SchedulerLike,
) => Function1<SinkLike<T>, ObserverLike<T>> = /*@__PURE__*/ (<T>() => {
  type TPrototype = {
    [FlowControllerLike_isReady]: true;
    [BackPressureConfig_strategy]: typeof OverflowBackpressureStrategy;
    [BackPressureConfig_capacity]: number;
    [FlowControllerLike_addOnReadyListener](
      callback: SideEffect1<void>,
    ): DisposableLike;
  };

  const createFromSink = mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingSinkMixin(),
      DelegatingSchedulerMixin,
    ),
    function SinkToObserver(
      this: TPrototype,
      delegate: SinkLike<T>,
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(DelegatingSinkMixin<T>(), this, delegate);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
    props(),
    proto({
      [FlowControllerLike_isReady]: true as const,
      [BackPressureConfig_strategy]: OverflowBackpressureStrategy,
      [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,
      [FlowControllerLike_addOnReadyListener](_: SideEffect1<void>) {
        return Disposable.disposed;
      },
    }),
  );

  return (scheduler: SchedulerLike) => (sink: SinkLike<T>) =>
    createFromSink(sink, scheduler);
})();
