import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
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
import {
  Function1,
  SideEffect1,
  none,
  pipe,
  returns,
} from "../../functions.js";
import {
  BackPressureConfig_capacity,
  BackPressureConfig_strategy,
  ConsumerLike,
  DisposableLike,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  OverflowBackpressureStrategy,
  SchedulerLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";

import * as Consumer from "./Consumer.js";

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: SinkLike<T>,
) => SinkLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(
    DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin(),
  ))();

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
