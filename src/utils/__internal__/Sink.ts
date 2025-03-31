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
import { Function1, SideEffect1, pipe, returns } from "../../functions.js";
import {
  BackPressureConfig_capacity,
  BackPressureConfig_strategy,
  ConsumerLike,
  DisposableLike,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  OverflowBackpressureStrategy,
  SchedulerLike,
  SinkLike,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";

import * as Consumer from "./Consumer.js";
import { Sink_toLiftedSink } from "./Sink/__private__/Sink.toLiftedSink.js";

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

export const toConsumer: <T>() => Function1<SinkLike<T>, ConsumerLike<T>> =
  /*@__PURE__*/ (<T>() => {
    type TPrototype = {
      [FlowControllerLike_isReady]: true;
      [BackPressureConfig_strategy]: typeof OverflowBackpressureStrategy;
      [BackPressureConfig_capacity]: number;
      [FlowControllerLike_addOnReadyListener](
        callback: SideEffect1<void>,
      ): DisposableLike;
    };

    return returns(
      mixInstanceFactory(
        include(DelegatingDisposableMixin, DelegatingSinkMixin()),
        function SinkToConsumer(
          this: TPrototype,
          delegate: SinkLike<T>,
        ): ConsumerLike<T> {
          init(DelegatingDisposableMixin, this, delegate);
          init(DelegatingSinkMixin<T>(), this, delegate);

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
      ),
    );
  })();

export const toObserver: <T>(
  scheduler: SchedulerLike,
) => Function1<SinkLike<T>, ObserverLike<T>> =
  <T>(scheduler: SchedulerLike) =>
  (sink: SinkLike<T>) =>
    pipe(sink, toConsumer(), Consumer.toObserver(scheduler));
