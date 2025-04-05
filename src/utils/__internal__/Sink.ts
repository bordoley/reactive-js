import {
  createInstanceFactory,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../../computations/__internal__/LiftedSource.js";
import { Function1, Reducer, none, returns } from "../../functions.js";
import {
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingCatchErrorSinkMixin from "../__mixins__/DelegatingCatchErrorSinkMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNonCompletingSinkMixin from "../__mixins__/DelegatingNonCompletingSinkMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import FlowControllerWithoutBackpressureMixin from "../__mixins__/FlowControllerWithoutBackpressureMixin.js";
import { ReducerSinkMixin } from "../__mixins__/ReducerSinkMixin.js";

export const collect: <T>(buffer: T[]) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(CollectorSinkMixin()),
    function CollectorSink(this: unknown, buffer: T[]): SinkLike<T> {
      init(CollectorSinkMixin(), this, buffer);

      return this;
    },
  ))();

export const createDelegatingCatchError: <T>(o: SinkLike<T>) => SinkLike<T> =
  /*@__PURE__*/ (() =>
    createInstanceFactory(DelegatingCatchErrorSinkMixin()))();

export const createDelegatingNonCompleting: <T>(o: SinkLike<T>) => SinkLike<T> =
  /*@__PURE__*/ (() =>
    createInstanceFactory(DelegatingNonCompletingSinkMixin()))();

export const reducer: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  ref: [TAcc],
) => SinkLike<T> = /*@__PURE__*/ (<T, TAcc>() =>
  createInstanceFactory(ReducerSinkMixin<T, TAcc>()))();

export const toLiftedSink: <T>() => Function1<
  SinkLike<T>,
  LiftedSinkLike<SinkLike<T>, T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [LiftedSinkLike_subscription]: SinkLike<T>;
  };

  type TPrototype = Pick<
    LiftedSinkLike<SinkLike<T>, T>,
    | typeof SinkLike_isCompleted
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
  >;

  return returns(
    mixInstanceFactory(
      include(DelegatingDisposableMixin),
      function SinktoLiftedSink(
        this: TPrototype & TProperties,
        listener: SinkLike<T>,
      ): LiftedSinkLike<SinkLike<T>, T> {
        init(DelegatingDisposableMixin, this, listener);
        this[LiftedSinkLike_subscription] = listener;
        return this;
      },
      props<TProperties>({
        [LiftedSinkLike_subscription]: none,
      }),
      proto<TPrototype>({
        get [SinkLike_isCompleted](): boolean {
          unsafeCast<TProperties>(this);
          return this[LiftedSinkLike_subscription][SinkLike_isCompleted];
        },

        [EventListenerLike_notify](this: TProperties, next: T) {
          this[LiftedSinkLike_subscription][EventListenerLike_notify](next);
        },

        [SinkLike_complete](this: TProperties) {
          this[LiftedSinkLike_subscription][SinkLike_complete]();
        },
      }),
    ),
  );
})();

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
