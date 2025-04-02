import {
  createInstanceFactory,
  include,
  init,
  mixInstanceFactory,
} from "../../__internal__/mixins.js";
import { LiftedSinkLike } from "../../computations/__internal__/LiftedSource.js";
import { Function1, Reducer } from "../../functions.js";
import { ObserverLike, SchedulerLike, SinkLike } from "../../utils.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import FlowControllerWithoutBackpressureMixin from "../__mixins__/FlowControllerWithoutBackpressureMixin.js";
import { ReducerSinkMixin } from "../__mixins__/ReducerSinkMixin.js";
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

export const reducer: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  ref: [TAcc],
) => SinkLike<T> = /*@__PURE__*/ (<T, TAcc>() =>
  createInstanceFactory(ReducerSinkMixin<T, TAcc>()))();

export const toLiftedSink: <T>() => Function1<
  SinkLike<T>,
  LiftedSinkLike<SinkLike<T>, T>
> = Sink_toLiftedSink;

export const toObserver: <T>(
  scheduler: SchedulerLike,
) => Function1<SinkLike<T>, ObserverLike<T>> = /*@__PURE__*/ (<T>() => {
  const createFromSink = mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingSinkMixin(),
      DelegatingSchedulerMixin,
      FlowControllerWithoutBackpressureMixin,
    ),
    function SinkToObserver(
      this: unknown,
      delegate: SinkLike<T>,
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(DelegatingSinkMixin<T>(), this, delegate);
      init(DelegatingSchedulerMixin, this, scheduler);
      init(FlowControllerWithoutBackpressureMixin, this);

      return this;
    },
  );

  return (scheduler: SchedulerLike) => (sink: SinkLike<T>) =>
    createFromSink(sink, scheduler);
})();
